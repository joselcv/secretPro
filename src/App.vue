<!-- Desarrollado por: José luis casanova -->
<template>
  <v-app>
          <keep-alive>
						<router-view :key="$route.fullpath" />
					</keep-alive>
    <v-content />
  </v-app>
</template>
<script>
 import {mapMutations} from "vuex";
 export default {
   components: {
    // toolbar,
  },
  data: () => ({
   
  }),
  mounted() {

  },methods: {
  },
}
</script>
<style >
    .row{
      margin-left:0 !important;
      margin-right:0 !important;
      margin-bottom: 0 !important
    }
</style>