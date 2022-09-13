<template>
  <div>
    <div>제목 : {{ data.title }}</div>
    <div>완료 여부: {{ data.completed }}</div>
  </div>
</template>

<script>
import { api } from "../../utils/axios";
export default {
  data() {
    return {
      data: {},
    };
  },

  async created() {
    //router에 정의한 /:id 값 가져오기
    console.log(this.$route.params.id);
    //로딩을 키고
    this.$store.commit("SET_LOADING", true);
    const result = await api.jsonplaceholder.findOne(this.$route.params.id);
    console.log(result);
    this.data = result.data;
    //로딩을 끄고
    this.$store.commit("SET_LOADING", false);
  },
};
</script>

<style></style>
