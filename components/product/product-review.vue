<template>
  <div class="w-full relative">
    <div class="w-full relative mt-20 px-4 pb-16 sm:pb-24 lg:px-12 xl:px-28 3xl:px-32 z-20">
      <h1 class="w-full text-5xl text-center font-normal text-primary">
        Review
      </h1>
      <div class="w-full flex flex-col xl:flex-row mt-12 static z-10">
        <div class="
            w-full
            flex flex-col
            items-center
            sm:items-start
            xl:w-1/4
            2xl:mr-20
          ">
          <div class="w-full flex flex-col sm:flex-row items-center">
            <p class="text-4xl font-light mr-0 sm:mr-4">4.0</p>
            <div class="flex -space-x-2">
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-gray-300" />
            </div>
          </div>
          <p class="ml-2 mt-2 text-quaternary text-sm">Based on reviews</p>
          <base-button @click="$refs.DialogReviewRefs.show()" class="mt-4 sm:mt-6">Write a review</base-button>
        </div>
        <div v-if="!no_product" class="w-full mt-8 lg:mt-0 xl:w-3/4">
          <div v-if="products_reviews.length != 0" class="
              w-full
              flex flex-col
              justify-center
              divide-y divide-primary47
            ">
            <div v-for="(review, index) in products_reviews.slice(0, 2)" :key="index">
              <div class="w-full columns-1 xl:flex px-4 py-8 text-quaternary">
                <!-- Image Product-->
                <div class="w-full xl:w-2/5 columns-1 items-start lg:flex">
                  <div class="productimg">
                    <img :src="require(`~/static/images/products${review.imgUrl}`)" class="w-auto h-24" />
                  </div>
                  <p class="mt-3 lg:mt-0 text-sm font-extralight">
                    {{ review.product_name }}
                  </p>
                </div>
                <!-- Details review -->
                <div class="
                    w-full
                    xl:w-3/5
                    flex flex-col
                    ml-0
                    xl:ml-4
                    mt-4
                    xl:mt-0
                  ">
                  <div class="flex sm:flex justify-between">
                    <p class="text-lg font-light">{{ review.name }}</p>
                    <div class="flex flex-row w-40">
                      <div v-for="i in review.score" :key="`review-${i}`">
                        <base-icon icon="star" viewBox="0 0 30 41" size="30" class="text-primary" />
                      </div>
                      <div v-for="j in 5 - review.score" :key="`review+${j}`">
                        <base-icon icon="star" viewBox="0 0 30 41" size="30" class="text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <!-- Comment -->
                  <p class="my-4 text-sm font-extralight">
                    {{ review.review }}
                  </p>
                  <!-- Date -->
                  <p class="text-sm font-extralight">{{ review.date }}</p>
                </div>
              </div>
            </div>
            <!-- Load More -->
          </div>
          <base-button @click="$router.push(`/review`)" class="mt-6 mx-auto sm:mx-0">View more</base-button>
        </div>
        <div v-else class="w-full py-12 mt-12 bg-white text-center font-light text-2xl text-primary">No Review
        </div>
      </div>
      <dialog-review ref="DialogReviewRefs" class="static z-20" :product_name="product_name" />
    </div>
    <img src="~/static/images/IMG_01home/pages_01home/Group1135@2x.png" class="absolute bottom-0 z-10">
  </div>
</template>

<script>
import DialogReview from "@/components/review/dialog-review.vue";
import ReviewCard from "../review/review-card.vue";
import products from "@/static/json/products.json";
import reviews from "@/static/json/review.json";
export default {
  components: { ReviewCard, DialogReview },
  data() {
    return {
      products,
      product_name: "",
      no_product: false,
      reviews,
      products_reviews: [],
      // product_id,
    };
  },
  props: {
    params: {
      type: String,
      required: false,
    },
  },
  methods: {
    list_reviews() {
      const self = this
      if (self.$store.getters["me/getProductName"] != "") {
        let list = self.reviews.filter((e) => e.product_name == self.$store.getters["me/getProductName"]);
        if (list.length == 0) {
          self.no_product = true;
        } else {
          self.products_reviews = list;
        }
      }
      else {
        let list = self.reviews.filter((e) => e.product_id == self.params);
        if (list.length == 0) {
          let list = self.reviews.filter((e) => e.product_name == self.params);
          if (list.length == 0) {
            self.no_product = true;
          }
          else {
            self.products_reviews = list;
          }
        } else {
          self.products_reviews = list;
        }
      }

    },
    async fetch() {
      const self = this;
      if (self.$store.getters["me/getProductName"] != "") {
        let products_test = await self.products.filter(
          (e) => e.name == self.$store.getters["me/getProductName"]
        );
        if (products_test.length == 0) {
          self.no_product = true;
        } else {
          self.product_name = products_test[0].name;
        }
      } else {
        let products_test = await self.products.filter(
          (e) => e.no == self.params
        );
        if (products_test.length == 0) {
          let products_test = await self.products.filter(
            (e) => e.name == self.params
          );
          if (products_test.length == 0) {
            self.no_product = true;
          } else {
            self.product_name = products_test[0].name;
          }
        } else {
          self.product_name = products_test[0].name;
        }
      }
    },
  },
  async mounted() {
    await this.fetch();
    this.list_reviews();
  },
};
</script>

<style scoped>
.b BaseButtongheight {
  height: 500px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}

.productimg {
  min-width: 100px;
  max-height: 100px;
}
</style>