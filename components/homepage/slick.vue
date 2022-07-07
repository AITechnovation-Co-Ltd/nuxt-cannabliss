<template>
    <div class="w-full relative px-36">
        <p class="my-4 text-7xl text-primary">Review</p>
        <VueSlickCarousel class="flex justify-center items-center" v-bind="settings">
            <div class="maincrs w-full flex flex-col justify-center items-center">
                <div class="w-full flex my-6">
                    <div class="w-full relative py-10 px-20 mt-8">
                        <div class="w-full flex flex-col items-center">
                            <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
                            <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus
                                incidunt ratione
                                hic vero
                                omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus
                                ipsam laboriosam
                                molestiae, provident corrupti.</p>
                            <div class="w-full flex justify-between">
                                <div class="w-full flex justify-center relative ">
                                    <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                                        class="absolute bottom-0 -left-8 w-28 h-28">
                                    <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
                                </div>
                                <p>Kimberly K.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="maincrs w-full flex flex-col justify-center items-center">
                <div class="w-full flex my-6">

                    <div class="w-full relative p-10 bg-tertiary rounded-xl mt-8">
                        <img src="@/static/images/IMG_01home/pages_01home/review01.png"
                            class="absolute -top-12 -left-8 w-24 h-20">
                        <div class="w-full flex flex-col items-center">
                            <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
                            <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus
                                incidunt ratione
                                hic vero
                                omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus
                                ipsam laboriosam
                                molestiae, provident corrupti.</p>
                            <div class="w-full flex justify-between">
                                <div class="w-full flex justify-center relative ">
                                    <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                                        class="absolute bottom-0 -left-8 w-28 h-28">
                                    <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
                                </div>
                                <p>Kimberly K.</p>
                            </div>
                        </div>
                        <img src="@/static/images/IMG_01home/pages_01home/review02.png"
                            class="absolute -bottom-12 right-0 w-24 h-20">
                    </div>
                </div>
            </div>
            <div class="maincrs w-full flex flex-col justify-center items-center">
                <div class="w-full flex my-6">

                    <div class="w-full relative py-10 px-20 mt-8">
                        <div class="w-full flex flex-col items-center">
                            <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
                            <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus
                                incidunt ratione
                                hic vero
                                omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus
                                ipsam laboriosam
                                molestiae, provident corrupti.</p>
                            <div class="w-full flex justify-between">
                                <div class="w-full flex justify-center relative ">
                                    <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                                        class="absolute bottom-0 -left-8 w-28 h-28">
                                    <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
                                </div>
                                <p>Kimberly K.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="maincrs w-full flex flex-col justify-center items-center">
                <div class="w-full flex my-6">
  
                    <div class="w-full relative py-10 px-20 mt-8">
                        <div class="w-full flex flex-col items-center">
                            <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
                            <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus
                                incidunt ratione
                                hic vero
                                omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus
                                ipsam laboriosam
                                molestiae, provident corrupti.</p>
                            <div class="w-full flex justify-between">
                                <div class="w-full flex justify-center relative ">
                                    <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                                        class="absolute bottom-0 -left-8 w-28 h-28">
                                    <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
                                </div>
                                <p>Kimberly K.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import './css/carousel.css'
export default {
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
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
            },
        }
    },
}
</script>

<style scoped>

</style>