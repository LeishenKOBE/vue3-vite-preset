<template>
  <div class="">1</div>
</template>

<script lang='ts'>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from "vue";

import { getCompanyDetail } from "../../api/index.js";

export default {
  components: {},
  computed: {},
  setup() {
    onMounted(() => {
      getCompanyDetail();
    });
  },
};
</script>
<style scoped>
</style>