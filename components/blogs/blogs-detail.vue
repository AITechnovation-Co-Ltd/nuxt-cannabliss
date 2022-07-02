<template>
  <div class="w-full flex flex-col px-20">
    <!-- -->
    <div class="w-80 my-12">
      <nav class="w-full flex justify-start items-center" aria-label="Breadcrumb">
        <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <nuxt-link to="/" class="inline-flex items-center font-medium">
              <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
              <p>Home</p>
            </nuxt-link>
          </li>
          <li>
            <div class="flex items-center">
              <div class="vl mx-1 bg-quaternary"></div>
              <p class="font-medium md:ml-2">Blogs</p>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <div class="vl mx-1 bg-quaternary"></div>
              <p class="font-medium md:ml-2">Details</p>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <!-- -->
    <div class="w-full flex justify-center items-center">
      <!-- Details -->
      <div class="w-1/2">
        <p class="my-4 text-4xl text-primary">ต้านการอักเสบของสิว</p>
        <p class="pl-2 font-medium text-quaternary border-l-4 border-primary">การทาครีม CBD โดยไม่มีส่วนผสมของ THC
          เป็นทางเลือกที่
          ปลอดภัยและมีประสิทธิภาพ ไม่มีผลข้างเคียง พัฒนาคุณภาพชีวิต
          ของผู้ป่วยที่มีปัญหาผิวพรรณ โดยเฉพาะด้านการอักเสบ เช่น สิว</p>
        <p class="my-4 text-quaternary text-sm">การทา CBD เฉพาะที่อาจมีประโยชน์สำหรับความผิดปรกติทางผิวหนังหลายอาการ
          ซึ่งรวมถึง
          สิวอักเสบ ภูมิแพ้ผิวหนัง เส้นขนที่มากผิดปกติและยับยั้งก่อนเกิดเป็นเนื้อร้ายบางชนิด</p>
        <p class="text-quaternary text-sm">
          ประสิทธิผล<br>กระบวนการต้านสิวเกิดขึ้นโดยการปรับการทำงานของเซลล์ซีโบไซต์ภายในต่อมไขมัน
          ด้วยCBD เซลล์ซีโบไซต์จะถูกขัดขวางไม่ให้ส่งสัญญานไปยังต่อมให้ผลิตไขมันผิวหนังมากเกิน
          ไป CBD จะไปหยุดการเพิ่มจำนวนของเซลล์ซีโบไซต๊ แต่ไม่ทำให้เซลล์ตาย และจะให้ฤทธิ์ต้าน
          การอักเสบที่มีศักยภาพแม้ในบริเวณที่มีสารก่อการอักเสบรุนแรงที่ทำให้เกิดสิว ดังนั้น CBD
          จึงเป็นความหวังสำหรับการรักษาสิวที่ไม่ระคายเคือง</p>
      </div>
      <!-- Picture -->
      <div class="w-1/2 flex justify-center">
        <div class="w-96 h-96 relative bg-blue-300 rounded-lg"><img
            src="@/static/images/IMG_03blogs_details/shutterstock.jpg"
            class="w-96 h-96 absolute -left-8 -bottom-8 rounded-lg"></div>

      </div>
    </div>
    <!-- -->
    <div class="w-full flex justify-center items-center my-8">
      <!-- Picture -->
      <div class="w-1/2 flex justify-center">
        <img src="@/static/images/IMG_03blogs_details/cbd.png" class="w-96 h-96">
      </div>
      <!-- Details -->
      <div class="w-1/2">
        <p class="my-4 text-4xl text-primary">กลไกการทำงาน</p>
        <p class="text-quaternary text-sm">ระบบเอ็นแคนนาบินอยด์ในผิวหนังจะควบคุมความผิดปกติทุกด้านที่เกิดขึ้นในสิว
          ในการทดลอง
          สารออกฤทธิ์หลายชนิดที่พบในกัญชา พบหลักฐานว่าลิโมนีนมีผลกระทบต่อกลไกที่เกี่ยวข้องกับ
          สิวและการรักษาสิว CBDและลิโมนีนร่วมกันอาจมีประสิทธิภาพสูงกว่า เนื่องจากสารทั้งสองชนิด
          นี้มีประสิทธิภาพในการต้านการอักเสบ เมื่อใช้เบต้า-แคริโอฟิลลีนร่วมกับCBDก็จะมีฤทธิ์ต้านการ
          อักเสบเช่นกัน</p>
        <p class="my-4 text-quaternary text-sm ">ลักษณะทางเคมีที่บ่งใช้: สายพันธุ์ CBD ที่ผสมและใช้อยู่ในยาเฉพาะที่
          การรักษาส่วนของเทอร์ปีน
          ชนิดลิโมนิ่น แคริโอฟิลลีน หรือไพนิ่นไว้ในสูตรยาอาจมีประโยชน์</p>
      </div>
    </div>
    <!-- Benefis of cbd -->
    <div class="w-full flex flex-col items-center">
      <p class="my-6 text-4xl text-primary">Benefits Of CBD For Acne</p>
      <div class="grid grid-cols-3 gap-4 text-quaternary">
        <div class="flex items-center" v-for="(data, i) in cbd" :key="i">
          <img :src="data.url" class="h-24 w-24">
          <p class="ml-2 font-medium">{{ data.benefits }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cbd: [{
        id: 1,
        url: require('@/static/images/IMG_03blogs_details/reduce.png'),
        benefits: 'Reduce redness & inflammation',
      }, {
        id: 2,
        url: require('@/static/images/IMG_03blogs_details/regulates.png'),
        benefits: 'Regulates oil Production in the skin',
      },
      {
        id: 3,
        url: require('@/static/images/IMG_03blogs_details/sebum.png'),
        benefits: 'Make sebum less-viscous preventing clogging',
      },
      {
        id: 4,
        url: require('@/static/images/IMG_03blogs_details/inhibits.png'),
        benefits: 'Inhibits bacterial Growth in the pores',
      }, {
        id: 5,
        url: require('@/static/images/IMG_03blogs_details/promotes.png'),
        benefits: 'Promotes the regeneration of new skin cells',
      }, {
        id: 6,
        url: require('@/static/images/IMG_03blogs_details/suppressed.png'),
        benefits: 'RSuppressed cell prolifera',
      },]
    }
  },
}
</script>
