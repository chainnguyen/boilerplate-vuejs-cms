<template>
  <div id="not_authenticated">
    <h2 v-text="content" />
  </div>
</template>

<script>
export default {
  name: 'NotAuthenticated',

  data () {
    return {
      content: this.$t('not_authenticated')
    }
  }
}
</script>

<style lang="scss" scoped>
#not_authenticated {

}
</style>
