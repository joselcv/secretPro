<!-- Desarrollado por: José luis casanova -->
<template>
    <v-layout fluid>
      <bodyPage class="hidden-sm-and-down"/>
      <bodyPageResponsive class="hidden-md-and-up" />
    </v-layout>
</template>
<script>
import bodyPage from "@/components/landingPage/bodyPage.vue";
import bodyPageResponsive from "@/components/landingPage/bodyPageResponsive.vue";
import {labels} from "@/lang/lang"
export default {
  components: {
    bodyPage,
    bodyPageResponsive
  },
  data: () => ({
    labels:labels
  }) 
};
</script>
