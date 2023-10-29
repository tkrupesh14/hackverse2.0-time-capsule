import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../index.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Nfts = () => {
  return (
    <div>
      <section class="bg-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrxJzWaTKRS91u_57xJyUBJAyXdS9dxKu81ptrhiWhVjkIHaElssn6kFx1BIlUzQTXvI&usqp=CAU"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Capsule
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$66.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrxJzWaTKRS91u_57xJyUBJAyXdS9dxKu81ptrhiWhVjkIHaElssn6kFx1BIlUzQTXvI&usqp=CAU"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Capsule
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrxJzWaTKRS91u_57xJyUBJAyXdS9dxKu81ptrhiWhVjkIHaElssn6kFx1BIlUzQTXvI&usqp=CAU"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Capsule
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrxJzWaTKRS91u_57xJyUBJAyXdS9dxKu81ptrhiWhVjkIHaElssn6kFx1BIlUzQTXvI&usqp=CAU"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Capsule
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nfts;
