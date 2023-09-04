const express = require("express");
const router = express.Router();

const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

//http://localhost:3000/api/product เอาไปทดสอบใน postman
//Read ดูข้อมูลทั้งหมด
router.get("/product", list);

//Read เลือกดูข้อมูลชนิดเดียว
router.get("/product/:id", read);

//Create สร้างข้อมูล
// router.post("/product", (req, res) => {
//   res.send("Hello Post Endpoint");
// });
router.post("/product", create);

// Update แก้ไขข้อมูล
router.put("/product/:id", update);

//Delete ลบข้อมูล
router.delete("/product/:id", remove);

module.exports = router;
