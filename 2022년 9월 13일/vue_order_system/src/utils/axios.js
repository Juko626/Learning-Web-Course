import axios from "axios";

//본인이 배포해서 운영중인 express 가 존재하는 aws주소 : 8080
//43.200.232.205:8080 내꺼
//3.35.208.145:8080 강사님꺼
const DOMAIN = "http://3.35.208.145:8080";

const request = axios.create({
  baseURL: `${DOMAIN}/api`,
});

export const api = {
  menus: {
    findAll: () => request.get("/menus"),
    findOne: (id) => request.get(`/menus/${id}`),
    create: (name, description, file) => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("file", file);
      return request.post("/menus", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    update: (id, name, description) =>
      request.patch(`/menus/${id}`, {
        name: name,
        description: description,
      }),
    updateImage: (id, file) => {
      const formData = new FormData();
      formData.append("file", file);
      return request.post(`/menus/${id}/image`, formData, {
        headers: {
          "Content-Type": " multipart/form-data",
        },
      });
    },
    delete: (id) => request.delete(`/orders/${id}`),
  },
  orders: {
    findAll: () => request.get("/orders"),
    create: (menus_id, quantity, request_detail) =>
      request.post("/orders", {
        menus_id: menus_id,
        quantity,
        request_detail,
      }),
    findOne: (id) => {},
    update: (id) => {},
    delete: (id) => {},
  },
};
