const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

const { pool } = require("./db");

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    return res.json(data[0]);
  } catch (error) {
    return res.json({
      success: false,
      message: "전체 메뉴 목록 조회에 실패하였습니당",
    });
  }
});



app.get("/api/menus/:id", async (req, res) => {
  try{
    const data =await pool.query("SELECT * FROM menus WHERE id = ?", [req.params.id]);
    console.log(data[0]);
    return res.json(data[0][0]);
  } catch (error){
    console.log(error);
    return res.json({
      success: false, message: "메뉴 조회에 실패하였습니다"
    });
  }
});
    
app.get("/api/orders", async (req, res) => {
  try{
    const data =await pool.query(
      `SELECT a.id , quantity, request_detail, name, description 
      FROM orders as a 
      INNER JOIN menus as b
      ON a.menus_id = b.id
      ORDER BY a.id DESC
      `);
      return res.json(data[0]);
  } catch (error){
    console.log(error);
    return res.json({
      success: false, message: "전체 주문 목록 조회에 실패하였습니다"
    });
  }
});
    

app.post~~~~~~ 해야됨

// app.patch("/api/menus/:id", async (req, res) => {
//     try {
//       console.log(req.params);


//       const data = await pool.query('UPDATE menus SET name = ?, description = ? where id = ?',
//       [req.body.name, req.body.description, req.params.id]);

//       return res.json({
//         success: true, message: "메뉴 정보 수정에 성공하였습니다."
//       })
//     } catch(error){
//       console.log(error);
//       return res.json({
//         success : false, message: "메뉴 정보 수정에 실패하였습니다."
//       });
//     }

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
