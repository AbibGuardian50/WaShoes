<template>
  <!-- NAVBAR -->
  <nav class="bg-green">
    <div class="flex justify-between items-center">
      <img class="ml-8 py-4" src="../assets/washoes2.png" alt="WaShoes-logo">

      <div>
        <nav class="flex items-center" id="navbar">
          <ul 
            class="mr-8 rounded-md flex items-center relative md:w-auto">

            <button class="rounded-md bg-cream ">
              <router-link to="/"
                class="mx-4 my-6 md:my-0 md:p-0.5 text-inter font-semibold text-lg text-green">LOGOUT</router-link>
            </button>
          </ul>
        </nav>

      </div>
      <!-- <button class="md:hidden">
        <img onclick="toggle()" id="burger-menu" class="ml-4" src="../assets/MenuVertical.png" alt="burger-menu">
      </button> -->
    </div>

  </nav>

  <!-- Informasi Booking -->

  <div class="md:flex-row md:shadow-lg md:justify-evenly flex flex-col mt-4 mb-4">

    <div class="flex flex-col items-center flex-nowrap pb-4">
      <div border-color="border-green"
        class="md:pt-8 shadow-lg shadow-indigo-500/40 mb-4 flex items-center justify-around md:flex-row-reverse">
        <img class="max-h-24 shadow-md" src="../assets/Flatshoes.png" alt="Flatshoes">
      </div>

      <p class="font-inter">FLATSHOES</p>
    </div>

    <div class="flex justify-center">
      <form class="flex flex-col ">
        <label class="font-inter" for="fname">Tanggal Booking:</label>
        <input class="border" type="date" id="fname" name="fname">
        <label class="font-inter" for="lname">Ukuran:</label>

        <div class="flex gap-4 size-picker">
          <input type="radio" id="34" name="size-picker" value="34">
          <label for="34">34 </label>

          <input type="radio" id="35" name="size-picker" value="35">
          <label for="35">35 </label>

          <input type="radio" id="36" name="size-picker" value="36">
          <label for="36">36 </label>

          <input type="radio" id="37" name="size-picker" value="37">
          <label for="37">37 </label>

          <input type="radio" id="38" name="size-picker" value="38">
          <label for="38">38 </label>

        </div>

        <div class="flex mt-4">
          <input class="border w-40 text-center text-black" type="number" id="price" name="number" placeholder="35000">
        <router-link to="/Pembayaran"><button class="bg-green font-inter w-40"><input type="submit" value="Booking"></button></router-link>  
        </div>


      </form>

    </div>

  </div>
  <!-- footer -->

  <footer class="bg-cream">
    <div class="pt-4 flex items-center justify-around">
      <img src="../assets/washoes.png" alt="WaShoes-Logo-Footer">

      <div class="flex-col font-inter">
        <p>Help</p>
        <p>Order Status</p>
        <p>Delivery</p>
      </div>

      <div class="flex-col font-inter">
        <p>About</p>
        <p>Contact Us</p>
      </div>

    </div>

    <div class="flex items-center justify-evenly md:justify-center md:gap-6">
      <p class="font-inter">Follow</p>
      <img src="../assets/Whatsapp.png" alt="Whatsapp">
      <img src="../assets/TikTok.png" alt="Tiktok">
      <img src="../assets/Instagram.png" alt="Instagram">
    </div>
  </footer>
</template>

<style>
:root {
  --cream: #E9DAC1;
  --green: #54BAB9;
}

.size-picker label {
  display: inline-block;
  width: 3.25rem;
  padding: 5px;
  border: solid 2px #ccc;
  transition: all 0.3s;
  text-align: center;
}

#price,
.size-picker label {
  border: solid 2px var(--green);
}

.size-picker input[type="radio"] {
  display: none;
}

.size-picker input[type="radio"]:checked+label {  
  background-color: var(--cream);
}

/* .size-picker label {
  display: block;
  padding: 5px;
  position: relative;
  padding-left: 20px;
}

.size-picker label input {
  display: none;
}

.size-picker label span {
  border: 1px solid #ccc;
  width: 15px;
  height: 15px;
  position: absolute;
  overflow: hidden;
  line-height: 1;
  text-align: center;
  border-radius: 100%;
  font-size: 10pt;
  left: 0;
  top: 50%;
  margin-top: -7.5px;
}

.size-picker input:checked+span {
  background: #ccf;
  border-color: #ccf;
} */</style>