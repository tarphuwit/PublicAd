import axios from "axios";

export const update = async (id, data) => {
  return await axios.put("http://localhost:3000/api/product/" + id, data);
};

//โค้ดดิงใช้เชื่อมต่อกับไฟล์ FormEditProduct.jsx
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(data);
//     update(params.id, data)
//       .then((res) => {
//         console.log(res.data);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };
