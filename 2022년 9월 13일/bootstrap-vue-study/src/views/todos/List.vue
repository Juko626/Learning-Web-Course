<template>
  <div>
    <!-- : key vue에서 렌더링을 다시 할지 말지를 :key로 정한다
    key 가 있다면 같은 값이라고 판단하기 때문에 렌더링을 하지 않는다
    성능 때문에 vue 자체에서 DOM을 갱신할 지 정할 때-->

    <div @click="moveDetail(List.id)" v-for="list in lists" :key="list.id" class="list-wrapper">
      <div>
        {{list.title}} 
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../utils/axios";

export default {
    methods:{
        moveDetail(id){
            console.log(id);
            this.$router.push(`/todos/${id}`)
        }
    },
  data() {
    return {
      lists: [],
    };
  },
  async created() {
    //로딩을 키고
    this.$store.commit("SET_LOADING", true);
    const results = await api.jsonplaceholder.findAll();
    console.log(results);
    this.lists = results.data;
    //데이터를 넣었으니 로딩을 끄자
    this.$store.commit("SET_LOADING", false);
  },
};
</script>

<style>
.list-wrapper {
  border: 1px solid black;
  padding: 20px;
}
</style>
