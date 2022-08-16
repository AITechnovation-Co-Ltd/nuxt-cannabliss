<template>
    <div class="mt-2 flex items-center justify-center text-center px-4 text-md text-quaternary font-light tracking-wide">
        <div class="flex items-center sm:mr-1 sm:ml-auto">
            <p class="hidden sm:block"> <span class="font-medium">{{ page + ' ' }}</span>from<span class="font-medium">{{ ' ' + total_pages + ' '
            }} </span>pages</p>
        </div>
        <!-- Pagination -->
        <t-pagination :total-items="total_pages" :per-page="size" :limit="limit" @change="pageChange" :value="page" class="z-20"/>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        page: {
            type: Number,
            default: 1,
        },
        total_pages: {
            type: Number,
            default: 1,
        },
        size: {
            type: Number,
            default: 1,
        },
        total_item: {
            type: Number,
            default: 1,
        },
        border: {
            type: Boolean,
            default: true,
        },
        limit: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {}
    },
    computed: {
        page_list() {
            const self = this
            var pages = []
            for (var i = 1; i <= self.total_pages; i++) pages.push(i)

            return pages
        },
    },
    mounted() { },
    methods: {
        pageChange(page) {
            this.$emit('change', page)
        },
    },
}
</script>
