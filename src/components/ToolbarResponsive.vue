
<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout>
    <v-flex style="padding-left:8%;width:200px; ">
    <img  src="../../public/img/webp/nammu.io.webp" width='200px' height='50px'  />
    </v-flex>
    <v-spacer></v-spacer>
<!--  -->

<v-btn icon x-large style="margin-top:4px; margin-right:8%">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="black"></v-app-bar-nav-icon>
</v-btn>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>{{ labels.products }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ labels.education }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ labels.events }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ labels.contacts }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

<!-- ///////////////////////////////////////////////////////// -->
        </v-layout>
</template>

<script>
import {labels} from '@/lang/lang';
export default {
  data:() =>({
    labels:labels,
    drawer: false,
      group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
<style scoped>
  #toolbar{
    margin-top:20px; 
    margin-bottom:25px; 
    margin-right:20px !important;
  }
  .btnToolbar{
    font-size:18px !important;
    text-transform: capitalize !important;
    font-family: 'Roboto' !important;
    font-weight: 600;
  }
</style>