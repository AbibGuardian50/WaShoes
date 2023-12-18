<script>
</script>

<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import "swiper/css";



const photos = [
  "Step-Into.png",
  "Shoe-Love.png"
]



</script>



<template>
  <nav class="bg-green">
    <div class="flex justify-between md:items-center">
      <img class="ml-8 py-4" src="../assets/washoes2.png" alt="WaShoes-logo">

      <div>
        <nav id="navbar">
          <ul
            class="md:flex hidden md:pr-4  md:items-center z-10 md:z-0 absolute md:relative md:text-white bg-white md:bg-green left-0 md:w-auto">
            <li><a href="../components/Booking.vue"
                class="mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500">Home</a></li>
            <li><a href="#" class="mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500">About</a></li>
            <li><router-link to="/booking"
                class="mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500">Services</router-link></li>

            <button class="rounded-md bg-cream md:p-1 ">
              <router-link to="#"
                class="mx-4 my-6 md:my-0 text-inter font-semibold text-lg text-green">LOGOUT</router-link>
            </button>
          </ul>
        </nav>

      </div>
      <button class="md:hidden">
        <img onclick="toggle()" id="burger-menu" class="ml-4" src="../assets/MenuVertical.png" alt="burger-menu">
      </button>
    </div>

  </nav>

  <!-- CAROUSEL  -->

  <div class="md:w-auto mb-4">
    <Swiper :modules="[Pagination, Navigation, EffectFade]" :pagination="true" :navigation="true" :effect="'fade'"
      :spaceBetween="30">
      <SwiperSlide v-for="photo in photos">
        <img class="md:w-full" :src="`src/assets/${photo}`" alt="slide-washoes">
      </SwiperSlide>
    </Swiper>
  </div>


  <!-- <div class="carousel mb-4">
    <section class="pt-0" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <img src="../assets/Shoe-Love.png" alt="">
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <img src="../assets/Step-Into.png" alt="">
        </li>
      </ol>
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a>
          </li>
        </ol>
      </aside>
    </section>
  </div> -->


  <!-- Kategori Sepatu -->

  <div class="shoes-category mb-4">
    <div class="flex-1 flex-col mx-6 md:flex md:flex-row md:items-end md:justify-evenly">

      <div class="md:w-96">
        <router-link to="/Booking">
          <div
            class="border border-solid border-rose-500 md:h-24 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
            <img class="max-h-24" src="../assets/Flatshoes.png" alt="Flatshoes">
            <p class="name-product">FlatShoes</p>
          </div>
        </router-link>
        <div
          class="border border-solid border-rose-500 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Kets.png" alt="Kets">
          <p class="name-product">Kets</p>
        </div>

        <div
          class="border border-solid border-rose-500 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Sandals.png" alt="Sandals">
          <p class="name-product">Sandals</p>
        </div>

        <div
          class="border border-solid border-rose-500 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Heels.png" alt="Heels">
          <p class="name-product">Heels</p>
        </div>

      </div>

      <div class="md:w-96">
        <div
          class="border border-solid border-rose-500 md:h-24 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Sneakers.png" alt="Sneakers">
          <p class="name-product">Sneakers</p>
        </div>

        <div
          class="border border-solid border-rose-500 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Boots.png" alt="Boots">
          <p class="name-product">Boots</p>
        </div>

        <div
          class="border border-solid border-rose-500 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Loafers.png" alt="Loafers">
          <p class="name-product">Loafers</p>
        </div>

        <div
          class="border border-solid border-rose-500 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
          <img class="max-h-24" src="../assets/Wedges.png" alt="Wedges">
          <p class="name-product">Wedges</p>
        </div>
      </div>




    </div>
  </div>

  <!-- Testimoni -->

  <div class="testimoni">
    <div class="flex-col bg-green pb-4">
      <h1 class="font-inter text-4xl text-white text-center judul-testimoni py-4">Testimoni</h1>

      <div class="md:flex md:items-baseline">
        <div class="rounded-md mx-3 drop-shadow-md bg-whitecream p-4 mb-4">
          <div class="flex items-center mb-4">
            <img class="mr-4" src="../assets/marmut.png" alt="">
            <p class="font-inter">Lorem Ipsum</p>
          </div>

          <p class="font-inter font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi blanditiis
          </p>

        </div>

        <div class="rounded-md mx-3 drop-shadow-md bg-whitecream p-4 mb-4">
          <div class="flex items-center mb-4">
            <img class="mr-4" src="../assets/marmut.png" alt="">
            <p class="font-inter">Lorem Ipsum</p>
          </div>

          <p class="font-inter font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi blanditiis
          </p>

        </div>

        <div class="rounded-md mx-3 drop-shadow-md bg-whitecream p-4">
          <div class="flex items-center mb-4">
            <img class="mr-4" src="../assets/marmut.png" alt="">
            <p class="font-inter">Lorem Ipsum</p>

          </div>
          <p class="font-inter font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi blanditiis
          </p>
        </div>




      </div>

    </div>

  </div>

  <!-- Footer -->

  <footer class="bg-cream">
    <div class="pt-4 flex items-center justify-around">
      <img src="../assets/washoes.png" alt="WaShoes-Logo-Footer">

      <div class="flex-col font-inter">
        <p>Help</p>
        <p>Help</p>
        <p>Help</p>
        <p>Help</p>
      </div>

      <div class="flex-col font-inter">
        <p>Help</p>
        <p>Help</p>
        <p>Help</p>
        <p>Help</p>
      </div>

    </div>

    <div class="flex items-center justify-evenly">
      <p class="font-inter">Follow</p>
      <img src="../assets/Whatsapp.png" alt="Whatsapp">
      <img src="../assets/TikTok.png" alt="Tiktok">
      <img src="../assets/Instagram.png" alt="Instagram">
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

@keyframes tonext {
  75% {
    left: 0;
  }

  95% {
    left: 100%;
  }

  98% {
    left: 100%;
  }

  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }

  95% {
    left: -300%;
  }

  98% {
    left: -300%;
  }

  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }

  97% {
    scroll-snap-align: none;
  }

  99% {
    scroll-snap-align: none;
  }

  100% {
    scroll-snap-align: center;
  }
}

body {
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  font-family: 'Lato', sans-serif;
}

* {
  box-sizing: border-box;
  scrollbar-color: transparent transparent;
  /* thumb and track color */
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
  border-bottom: 1px solid black;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
}

.carousel__slide:nth-child(even) {
  background-color: #99f;
}

.carousel__slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -40%, 70px);
  color: #fff;
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  /* position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0; */
  display: hidden;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.name-product {
  font-family: 'Inter', sans-serif;
}

/* .carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
} */</style>
