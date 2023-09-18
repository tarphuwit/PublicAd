import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="flex justify-center bg-green-800 shadow-lg shadow-blue-500/50  p-2">
        <div class="self-center top-0 w-full max-w-8xl">
          <div class="flex justify-between items-center text-gray-700">
            <div class="mx-2 my-4 ">
              <ion-icon
                name="logo-pwa"
                class="text-5xl text-blue-600 hover:text-stone-600"
              ></ion-icon>
            </div>
            <ul class="hidden md:flex items-center text-[18px] font-semibold pr-10">
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">หลักสูตรรัฐประศาสนศาสตร์</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">การประเมินนโยบายสาธารณะ</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/team">เกี่ยวกับ</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <Link to="/eval">ทีมงาน</Link>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/edit">ยุทธศาสตร์ชาติ</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">ติดต่อ</a>
              </li>
              <li class="text-white hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                <a href="#">LogIn</a>
              </li>
              <li class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                <a href="#">SignUp</a>
              </li>
            </ul>{" "}
            <button class="block p-3 mx-10 md:hidden hover:bg-gray-200 rounded-xl group">
              <div class="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
              <div class="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
              <div class="w-5 my-[3px] h-[3px] bg-gray-600"></div>
              <div class="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-white group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul class="flex flex-col items-center text-[18px] pt-[60px]">
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Home</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">About Us</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Our Services</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Portfolio</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Contact</a>
                  </li>
                  <li class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl">
                    <a href="#">LogIn</a>
                  </li>
                  <li class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                    <a href="#">SignUp</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Navbar;
