<template>
  <div class="searchbar event-search">
    <!-- Keyword -->
    <div class="block-field mb-sm-2">
      <label v-text="$t('management_event.search_by_keyword')" />

      <a-input
        v-model="filter.keyword"
        :placeholder="$t('search')"
        @change="debounceSearch"
        @keydown.enter.prevent="search">
        <template #suffix>
          <a-icon
            v-if="filter.keyword"
            type="close-circle"
            theme="filled"
            class="icon-delete"
            @click.prevent="reset('keyword')" />

          <a-icon
            v-else
            type="search"
            class="cursor-pointer"
            @click.prevent="search" />
        </template>
      </a-input>
    </div>

    <!-- Date of occurrence -->
    <div class="block-field mb-sm-2">
      <label v-text="$t('management_event.date_of_occurrence')" />

      <a-range-picker
        v-model="filter.date_of_occurrence"
        :placeholder="[FORMAT_DATE, FORMAT_DATE]"
        :value-format="FORMAT_DATE"
        separator="⇀"
        :format="FORMAT_DATE"
        @change="search">
        <template #suffixIcon>
          <a-icon type="calendar" />
        </template>
      </a-range-picker>
    </div>

    <!-- Status -->
    <div class="block-field">
      <label v-text="$t('status')" />

      <a-select
        v-model="filter.status"
        :placeholder="$t('status_placeholder')"
        allow-clear
        @change="search">
        <a-select-option
          v-for="item in STATUS"
          :key="item.id"
          :value="item.value">
          {{ $t(`management_event.${item.value}`) }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
// Others
import SearchMixin from '@/shared/mixins/search.mixin'
import { STATUS, FORMAT_DATE } from '@/enums/pages/event.enum'

export default {
  name: 'EventSearch',

  mixins: [SearchMixin],

  data() {
    return {
      filter: {
        keyword: null,
        date_of_occurrence: null,
        status: undefined,
      },
      STATUS,
      FORMAT_DATE,
    }
  },
}
</script>
