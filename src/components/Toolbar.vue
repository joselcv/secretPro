
<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout>
    <v-tabs id="toolbar" right color="black" height="150" width="600">
      <v-flex style="margin-left:4%; padding-top:1.5%">
      <v-img  src="../../public/img/webp/nammu.io.webp" height="80" width="350" />
     </v-flex>
         <v-tab class="btnToolbar">
                {{ labels.products }}
                </v-tab>
                        <v-tab class="btnToolbar">
                {{ labels.education }}
                </v-tab>
                        <v-tab class="btnToolbar">
                {{ labels.events }}
                </v-tab>
                        <v-tab class="btnToolbar">
                {{ labels.contacts }}
                </v-tab>
              </v-tabs>
        </v-layout>
</template>

<script>
import {labels} from '@/lang/lang';
export default {
  data:() =>({
    labels:labels
  })
}
</script>
<style >
  #toolbar{
    margin-bottom:25px; 
    margin-right:20px !important;
    position: fixed;
    z-index: 1;
  }
  .btnToolbar{
    font-size:28px !important;
    text-transform: capitalize !important;
    font-family: 'Roboto' !important;
    font-weight: 600;
  }
</style>