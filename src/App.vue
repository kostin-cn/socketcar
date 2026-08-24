<template>
  <div>
    <div class="container">
      <site-header/>
      <RouterView />
      <site-footer/>
    </div>
    <p class="info">© {{ new Date().getFullYear() }} Socket Car. All rights reserved</p>
  </div>
</template>

<script lang="ts">
import SiteHeader from "./components/Header.vue"
import SiteFooter from "./components/Footer.vue"

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>