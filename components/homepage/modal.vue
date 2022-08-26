<template>
    <base-modal v-model="isShow" :width="calculateWidthScreen" :height="calculateHeightScreen">
        <div class="bg-secondary pt-4 mt-12 pb-12 rounded-3xl flex flex-col items-center relative overflow-hidden">
            <img src="~/static/images/IMG_03blogs_details/Group803@2x.png" class="widget803 z-10">
            <img src="~/static/images/IMG_04review_popup/Group1161@2x.png" class="widget1161 z-10">
            <!-- Title -->
            <div class="w-full text-4xl xl:text-6xl font-extralight text-primary text-center pt-4 mb-4">
                Video
            </div>
            <!-- Form Review -->
            <div class="w-full xl:w-2/3 mt-4 px-8 sm:px-24 flex flex-col text-gray-300 z-20">
                <iframe class="aspect-video" src="https://drive.google.com/file/d/1cQaCaTQeE4kP2bPhn9RSvVa36L2JUpbi/preview"
                    allowfullscreen allow="autoplay"></iframe>
            </div>
        </div>
    </base-modal>
</template>

<script>
import products from "@/static/json/products.json"
export default {
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: "confirm",
        },
        center: {
            type: Boolean,
            default: false,
        },
        product_name: {
            type: String,
            default: '',
        }
    },
    computed: {
        calculateWidthScreen() {
            var w = window.innerWidth;
            let wscreen = (w * 70) / 100
            return wscreen
        },
        calculateHeightScreen() {
            var h = window.innerHeight;
            let hscreen = (h * 68) / 100
            return hscreen.toString()
        },
    },
    data() {
        return {
            products,
            product_no: '',
            s1: false,
            s2: false,
            s3: false,
            s4: false,
            s5: false,
            isShow: false,
        };
    },
    mounted() {
    },
    methods: {
        show(title, callback) {
            this.title = title;
            this.callback = callback;
            this.isShow = true;
        },
        onClick() {
            this.isShow = false;
            this.callback();
        },
    },
};
</script>
<style scoped>
.widget803 {
    height: 50rem;
    position: absolute;
    right: -10rem;
    top: -2rem;
}

.widget1161 {
    height: 15rem;
    position: absolute;
    left: 5rem;
    top: 3rem;
}

/* iframe {
    width: px;
    height: 90px;
} */
</style>
