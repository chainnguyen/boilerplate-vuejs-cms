<template>
  <a-result
    status="403"
    title="403"
    :sub-title="$t('not_authenticated')">
    <template #extra>
      <router-link
        tag="button"
        :to="{ name: 'home' }"
        class="ant-btn ant-btn-primary"
        v-text="$t('back')" />
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'NotAuthenticated',
}
</script>
