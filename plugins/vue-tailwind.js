import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import {
  TPagination,
} from 'vue-tailwind/dist/components'

const settings = {
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table text-center',
        element: 'w-8 h-8 text-gray table-cell rounded hover:bg-primary hover:bg-opacity-10 focus:outline-none',
        activeElement: 'w-8 h-8 table-cell rounded bg-primary hover:bg-primary hover:bg-opacity-25 text-black',
        disabledElement: 'w-8 h-8 table-cell',
        ellipsisElement: 'w-8 h-8 hidden md:table-cell',
        activeButton: 'bg-primary w-full h-full rounded text-white hover:bg-primary hover:bg-opacity-10 hover:text-black focus:outline-none',
        disabledButton: 'opacity-25 bg-light w-full h-full cursor-not-allowed',
        button: 'w-full h-full focus:outline-none',
        ellipsis: ''
      },
    }
  }
}

Vue.use(VueTailwind, settings)
