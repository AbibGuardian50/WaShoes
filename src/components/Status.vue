<script setup>
</script>

<template>
    <!-- NAVBAR -->

    <nav class="bg-green">
        <div class="flex justify-between items-center mb-4">
            <img class="ml-8 py-4" src="../assets/washoes2.png" alt="WaShoes-logo">

            <div>
                <nav class="flex items-center" id="navbar">
                    <ul class="mr-8 rounded-md flex items-center relative md:w-auto">

                        <button class="rounded-md bg-cream ">
                            <router-link to="/"
                                class="mx-4 my-6 md:my-0 md:p-0.5 text-inter font-semibold text-lg text-green">LOGOUT</router-link>
                        </button>
                    </ul>
                </nav>

            </div>
        </div>

    </nav>

    <div class="flex flex-col items-center">
        <p class="font-inter text-2xl">Status</p>
        <div class="max-w-7xl mx-auto grid grid-cols-9 px-2 mb-4">
            <!-- Stack 1 -->
            <div class="col-span-3 w-full h-full"></div>
            <div class="relative w-1/4 col-span-1 h-full flex justify-center items-center">
                <div class="h-full w-px bg-green"></div>
                <div class="absolute w-6 h-6 rounded-full bg-whitecream z-10 font-inter text-green text-center">1</div>
            </div>
            <div class="col-span-4 w-full h-full ">
                <div class="w-44 h-full rounded-md p-2 md:pl-4">
                    <h1 class="text-black font-inter text-xl font-medium py-2">Pesanan Diterima</h1>
                </div>
            </div>


            <!-- Stack 2 -->
            <div class="col-span-3 w-full h-full"></div>
            <div class="relative w-1/4 col-span-1 h-full flex justify-center items-center">
                <div class="h-full w-px bg-green"></div>
                <div class="absolute w-6 h-6 rounded-full bg-whitecream z-10 font-inter text-green text-center">2</div>
            </div>
            <div class="col-span-4 w-full h-full ">
                <div class="w-44 h-full rounded-md p-2 md:pl-4">
                    <h1 class="text-black font-inter text-xl font-medium py-2">Pesanan Diproses</h1>
                </div>
            </div>

            <!-- Stack 3 -->
            <div class="col-span-3 w-full h-full"></div>
            <div class="relative w-1/4 col-span-1 h-full flex justify-center items-center">
                <div class="h-full w-px bg-green"></div>
                <div class="absolute w-6 h-6 rounded-full bg-whitecream z-10 font-inter text-green text-center">3</div>
            </div>
            <div class="col-span-4 w-full h-full ">
                <div class="w-44 h-full rounded-full p-2 md:pl-4">
                    <h1 class="text-black font-inter text-xl font-medium py-2">Pesanan Selesai</h1>
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
</footer></template>