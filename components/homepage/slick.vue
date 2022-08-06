<template>
    <div class="w-full relative px-4 lg:px-12">
        <p class="my-4 text-5xl text-primary text-center font-medium">Review</p>
        <VueSlickCarousel class="flex justify-center items-center" v-bind="settings">

            <div class="w-full my-0 sm:my-6 ml-0 sm:ml-8 flex flex-col justify-center items-center"
                v-for="(review, index) in reviews.slice(0, 4)" :key="index">
                <div class="w-full flex justify-center sm:justify-start mt-0 sm:mt-6 mb-6">
                    <div class="w-11/12 relative px-4 py-8 xl:p-10 bg-f rounded-xl mt-8">
                        <img src="@/static/images/IMG_01home/pages_01home/review01.png"
                            class="absolute -top-6 left-0 w-16">
                        <div class="w-full flex flex-col items-center text-sm font-extralight text-quaternary">
                            <div class="flex flex-row w-40">
                                <div v-for="i in `first${review.score}`" :key="i">
                                    <base-icon icon="star" viewBox="0 0 30 41" size="30" class="text-primary" />
                                </div>
                                <div v-for="j in (5 - review.score)" :key="j">
                                    <base-icon icon="star" viewBox="0 0 30 41" size="30" class="text-gray-300" />
                                </div>
                            </div>
                            <p class="my-6 text-center">{{ review.review }}.</p>
                            <div class="w-full flex justify-between items-end">
                                <div class="w-full flex flex-col 3xl:flex-row  justify-center">
                                    <img :src="require(`~/static/images/products${review.imgUrl}`)" class="w-20">
                                    <p>{{ review.product_name }}</p>
                                </div>
                                <p class="whitespace-nowrap">{{ review.name }}</p>
                            </div>
                        </div>
                        <img src="@/static/images/IMG_01home/pages_01home/review02.png"
                            class="absolute -bottom-6 right-0 w-16">
                    </div>
                </div>
            </div>

        </VueSlickCarousel>
        <div class="w-full my-6 flex justify-center">
            <base-button @click="$router.push(`/review`)" color_arrow="quaternary">View All</base-button>
        </div>
        <div class="w-full mt-12">
            <div class="w-full mt-8 sm:mt-0 text-xl flex justify-between">
                <h1 class="text-3xl md:text-5xl text-primary">#Cannabliss</h1>
                <a href="" class="text-quaternary hidden md:block">
                    <div class="flex items-center">
                        <img class="w-8 mr-2" src="~/static/images/IMG_footer/icons8-instagram@2x.png" alt="">
                        <p class="text-sm">Follow us on instagram</p>
                    </div>
                </a>
            </div>
            <div class="ig mt-2 sm:mt-8 grid grid-cols-1 gap-y-4 sm:gap-y-0 sm:grid-cols-2 md:grid-cols-4">
                <div class="flex justify-center items-center">
                    <img src="@/static/images/IMG_01home/pages_01home/content-pixie-TxBQ7yLj6JU-unsplash.jpg" alt="">
                </div>
                <div class="flex justify-center items-center">
                    <img src="@/static/images/IMG_01home/pages_01home/mathilde-langevin-FDRaYqiTY1k-unsplash.jpg"
                        alt="">
                </div>
                <div class="w-full h-full justify-center items-center hidden sm:flex">
                    <img src="@/static/images/IMG_01home/pages_01home/lume-wellness-zpMn92OY4I8-unsplash.jpg" alt="">
                </div>
                <div class="w-full h-full justify-center items-center hidden sm:flex">
                    <img src="@/static/images/IMG_01home/pages_01home/birgith-roosipuu-W71jxsXrwyQ-unsplash.jpg" alt="">
                </div>
            </div>
            <div class="w-full mt-4 sm:mt-8 sm:mt-0 text-xl flex justify-center">
                <a href="" class="text-quaternary block md:hidden">
                    <div class="flex items-center">
                        <img class="w-8 mr-2" src="~/static/images/IMG_footer/icons8-instagram@2x.png" alt="">
                        <p class="text-sm">Follow us on instagram</p>
                    </div>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import './css/carousel.css'
import reviews from "@/static/json/review.json"
export default {
    components: { VueSlickCarousel },
    data() {
        return {
            reviews,
            settings: {
                centerMode: true,
                centerPadding: "0px",
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,
                pauseOnDotsHover: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                "responsive": [
                    {
                        "breakpoint": 1440,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                        }
                    },
                    {
                        "breakpoint": 1023,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            },
        }
    },
}
</script>

<style scoped>
.bg-f {
    background: #DAE6DF;
}

.ig img {
    object-fit: cover;
    width: 290px;
    height: 290px;
    border-radius: 10%;
}
</style>