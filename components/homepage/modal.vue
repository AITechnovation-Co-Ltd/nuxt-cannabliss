<template>
    <base-modal v-model="isShow" :width="calculateWidthScreen" class="mt-12 z-50">
        <div
            class="w-full h-full bg-secondary pt-4 pb-12 rounded-3xl flex flex-col items-center relative overflow-hidden">
            <img src="~/static/images/IMG_03blogs_details/Group803@2x.png" class="widget803 z-10">
            <img src="~/static/images/IMG_04review_popup/Group1161@2x.png" class="widget1161 z-10">
            <!-- Title -->
            <div class="w-full text-4xl xl:text-6xl font-extralight text-primary text-center pt-4 mb-4">
                Video
            </div>

            <div class="w-full flex items-center justify-center mx-auto xl:w-2/3 mt-4 flex flex-col text-gray-300 z-20">
                <iframe class="aspect-video video" src="https://www.youtube.com/embed/hVr4bcsxoow"
                    title="เปิดตัวพรีเซ็นเตอร์ CANABLISS - อิงฟ้า วราหะ" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
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
            if (w <= 1024) {
                let wscreen = (w * 95) / 100
                return wscreen
            }
            else {
                let wscreen = (w * 72) / 100
                return wscreen
            }
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

.video {
    width: 40vw;
    height: auto;
}

@media (max-width:1024px) {
    .video {
        width: 96%;
        height: auto;
    }
}

/* iframe {
    width: px;
    height: 90px;
} */
</style>
