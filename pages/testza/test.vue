<template>
    <div>
        <p>AutoComplete</p>
        <p>{{ productname }}</p>
        <base-autocomplete v-model="productname" placeholder="Product Name" :items="$model.productname" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            productname: ''
        }
    }
}
</script>

<style>
</style>