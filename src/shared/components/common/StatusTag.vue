<template>
  <span
    class="status"
    :style="{ backgroundColor: statusColor }"
    v-text="name" />
</template>

<script>
export default {
  name: 'StatusTag',

  props: {
    name: { type: String, required: true, default: '' },
    type: { type: String, required: true, default: '' },
  },

  data() {
    return {
      colorControl: [
        {
          acceptable: ['happening', 'applying'],
          color: '#4CAF50',
        },
        {
          acceptable: ['happened', 'not_apply'],
          color: '#717A89',
        },
        {
          acceptable: ['upcoming'],
          color: '#8F0101',
        },
      ],
    }
  },

  computed: {
    statusColor() {
      const result = this.colorControl.find((i) => i.acceptable.includes(this.$props.type))
      return result ? result.color : '#000000'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.status {
  font-size: 10px;
  font-weight: 700;
  color: $white;
  padding: 2px 8px;
  border-radius: 8px;
}
</style>
