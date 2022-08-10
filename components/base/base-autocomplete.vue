<template>
    <label class="block text-sm relative">
        <span class="">{{ label }}</span><span v-if="required" class="text-red-500">*</span>
        <input class="py-2 w-full rounded-xl border-primary focus:ring-0 focus:border-primary focus:border-2"
            type="search" :placeholder="placeholder" :disabled="disabled" @focus="onChange" @input="onChange"
            v-model="search" @keyup.enter="onEnter" />
        <ul id="autocomplete-results" v-show="isOpen" class="bg-white rounded-md shadow-lg overflow-y-auto absolute"
            style="max-height: 400px">
            <li class="loading" v-if="isLoading">Loading results...</li>
            <li v-else v-for="(result, i) in results" :key="i" @click="setResult(result)"
                class="px-4 py-2 text-sm bg-white hover:bg-primary hover:bg-opacity-20 cursor-pointer"
                :class="{ 'bg-primary text-white': i === arrowCounter }">
                {{ result.name }}
            </li>
        </ul>
    </label>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    props: {
        items: {
            type: Array,
            required: false,
            default: () => [],
        },
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        isAsync: {
            type: Boolean,
            required: false,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            defualt: false,
        },
    },

    data() {
        return {
            isOpen: false,
            results: [],
            search: '',
            isLoading: false,
            arrowCounter: 0,
        }
    },

    methods: {
        onChange() {
            // Let's warn the parent that a change was made
            this.$emit('input', this.search)

            // Is the data given by an outside ajax request?
            if (this.isAsync) {
                this.isLoading = true
            } else {
                // Let's search our flat array
                this.filterResults()
                this.isOpen = true
            }
        },
        filterResults() {
            // first uncapitalize all the things
            this.results = this.items.filter((e) => {
                return e.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        },
        setResult(result) {
            this.search = result.name
            this.isOpen = false
        },
        // onArrowDown(evt) {
        //     if (this.arrowCounter < this.results.length) {
        //         this.arrowCounter = this.arrowCounter + 1
        //     }
        // },
        // onArrowUp() {
        //     if (this.arrowCounter > 0) {
        //         this.arrowCounter = this.arrowCounter - 1
        //     }
        // },
        async onEnter() {
            // this.search = this.arrowCounter
            //     ? this.results[this.arrowCounter].name
            //     : ''
            // this.isOpen = false
            // this.arrowCounter = -1
            if (this.search != '') {
                await this.$store.dispatch('me/setProductName', this.search)
                this.$router.push(`/product/details/${this.search}`)
            }

        },
        handleClickOutside(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpen = false
                this.arrowCounter = -1
            }
        },
    },
    watch: {
        items: function (val, oldValue) {
            if (val.length !== oldValue.length) {
                this.results = val
                this.isLoading = false
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickOutside)
    },
}
</script>
