<template>
    <div class="relative z-0">
        <input v-if="type == 'textarea'" id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" " v-on="inputListeners" :name="name" :disabled="disabled" :rows="rows" v-bind="$attrs" />
        <input v-else id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" " v-on="inputListeners" :name="name" :disabled="disabled" :rows="rows" v-bind="$attrs"
            :type="type" @keypress="isNumber($event)" :maxlength="maxLength" />
        <label for="floating_standard"
            class="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            {{ label }}</label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    model: {
        event: 'update',
    },
    props: {
        name: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return [
                    'email',
                    'number',
                    'password',
                    'text',
                    'textarea',
                    'date',
                    'search',
                    'phone',
                    'cid',
                ].includes(value)
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        iconPosition: {
            type: String,
            default: 'left',
        },
        rows: {
            type: String,
            default: '5',
        },
        required: {
            type: Boolean,
            defualt: false,
        },
    },
    data() {
        return {}
    },
    computed: {
        inputListeners() {
            const self = this
            return Object.assign({}, this.$listeners, {
                input: function (event) {
                    self.$emit('update', event.target.value.trim())
                },
                change: function (event) {
                    self.$emit('change', event.target.value.trim())
                },
            })
        },
        maxLength() {
            const self = this

            let max = null
            if (self.type === 'phone') max = 10
            else if (self.type === 'cid') max = 13

            return max
        },
    },
    mounted() { },
    methods: {
        isNumber(evt) {
            evt = evt ? evt : window.event
            var charCode = evt.which ? evt.which : evt.keyCode
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46 &&
                this.type == 'phone'
            ) {
                evt.preventDefault()
            } else if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46 &&
                this.type == 'cid'
            ) {
                evt.preventDefault()
            } else {
                return true
            }
        },
    },
}
</script>
