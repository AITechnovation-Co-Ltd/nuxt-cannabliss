<template>
    <div class="mt-2 flex text-center px-4 text-sm font-light tracking-wide text-blac"
        :class="{ 'border-t py-2': border, 'border-none': !border }">
        <span class="flex items-center mr-1 ml-auto">
            {{ page }} จาก {{ total_pages }} หน้า
        </span>
        <!-- Pagination -->
        <t-pagination :total-items="total_pages" :per-page="size" :limit="limit" @change="pageChange" :value="page" />
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
