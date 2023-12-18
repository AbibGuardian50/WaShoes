<script>
// Auto Redirect after 5 Seconds, 5000 ms = 5 seconds
export default {
    created() {
        setTimeout(() => this.$router.push({ path: '/Status' }), 5000);

    }
}
</script>

<template>
    <!-- NAVBAR -->

    <nav class="bg-green">
        <div class="flex justify-between items-center">
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

    <!-- Scan QR Code -->

    <div class="flex flex-col items-center py-8">
        <div class="flex flex-col items-center drop-shadow-md">
            <p class="font-inter font-semibold leading-7 text-2xl text-grey">Scan Me</p>
            <img src="../assets/QR Code.png" alt="">
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
    </footer>
</template>