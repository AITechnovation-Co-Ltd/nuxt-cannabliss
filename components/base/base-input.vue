<template>
  <div>
    <label class="flex flex-col text-xl">
      <p class="text-2xl text-white">{{ label }}</p>
      <textarea v-if="type == 'textarea'" class="focus:border-primary form-input base-textarea" :class="innerClass"
        v-bind="$attrs" :placeholder="placeholder" v-on="inputListeners" :name="name" :disabled="disabled"
        :rows="rows"></textarea>
      <input v-else class="form-input base-input outline-none" :class="innerClass" v-bind="$attrs" :type="type"
        :placeholder="placeholder" v-on="inputListeners" :name="name" :disabled="disabled" @keypress="isNumber($event)"
        :maxlength="maxLength" />
    </label>
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
    innerClass: {
      type: String,
      default: '',
    },
    placeholder: {
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
          'time'
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
