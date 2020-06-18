<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout row wrap>
       <toolbar />
    <v-layout id="container" class="d-flex flex-column" >
      <h2>{{paragraphs.every_day_is_an_opportunity_to_take_care_of_your_skin}}.</h2>
      <v-flex xs12 style="padding-left: 50%;">
        <v-btn color="black" dark id="btnWatch">
          {{labels.watch_video}}
          <v-icon right dark>fas fa-play-circle</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout style="background-color:#eceeed">
      <v-flex xs12 flex-column>
        <strong>
          <p align="center" id="secretPro">SecretPro</p>
        </strong>
        <v-flex xs12 layout justify-center flex-column>
          <p
            id="secretProducts"
          >{{labels.products.toUpperCase()}} & {{labels.services.toUpperCase()}}</p>
          <p align="center" id="secretProductsParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            maximus blandit tellus, a imperdiet est eleifend eu.
          </p>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout style="
    background-color:#eceeed;
    padding-bottom:5%;">
      <VuePerfectScrollbar class="scroll-area" :settings="settings">
        <v-layout>
          <v-card
            style="margin-right:1%; margin-left:1.8%"
            width="350"
            height="350"
            v-for="(item,index) in items"
            :key="index"
          >
            <img width="350" height="350" :src="item.img" alt="Esta imagen esta rota" />
            <p align="right" id="pCard">{{item.title}}</p>
          </v-card>
        </v-layout>
      </VuePerfectScrollbar>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 md6 id="imgFaceAcademy">
        <!-- <v-img
          width="850px"
          height="700px"
          src="../../../public/img/webp/image_faceAcademy@2x.jpg"
        /> -->
      </v-flex>
      <v-flex xs6 md6 layout justify-center>
        <v-flex xs12 md12 flex-column justify-center>
          <v-flex style="display:flex; margin-top:10%" layout justify-center>
            <p id="face">FACE</p>
            <p id="academy">Academy</p>
          </v-flex>
          <p id="paragraphFaceAcademy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur maximus blandit tellus, a imperdiet est eleifend
            eu. Proin quis laoreet lorem, sit amet consectetur augue.
            Aenean tempus dolor in fringilla dapibus.
          </p>
          <v-flex xs12 md12 layout justify-center mt-5>
            <v-flex xs4 flex-column>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Huesos</span>
              </div>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Arterias</span>
              </div>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Venas</span>
              </div>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Anatomía</span>
              </div>
            </v-flex>
            <v-flex xs1
            ></v-flex>
            <v-flex xs4 flex-column>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Estética |</span>
              </div>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Estética ||</span>
              </div>
              <div style="display:flex">
                <span style="font-size:50px; height:80px">→</span>
                <span class="listFaceAcademy">Estética |||</span>
              </div>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-flex>
      <v-flex xs12 md12 flex-column justify-center style="background-color:#eceeed;padding-bottom:5%;">
        <v-flex style="display:flex; margin-top:5%;" layout justify-center>
          <p id="bec">BEC2020</p>
          <p id="conference">Conference</p>
        </v-flex>
        <p id="paragraphBecConference">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus blandit
          tellus, a imperdiet est eleifend eu.
          <strong>September 20th</strong> lorem, sit amet consectetur
          augue. Aenean tempus dolor in
          <strong>Saber más.</strong>
        </p>
      </v-flex>
      <v-layout style=" background-color:#eceeed; padding-left:8%; padding-right:2%">
        <v-flex xs5 md5 layout justify-end id="imageColage" style="position:relative;">
          <div style="display:flex">
            <p id="promotionalVideo">PROMOCIONAL VIDEO</p>
            <v-btn
              x-large
              style="color:white; position:absolute;bottom:25px;
              right:30px;"
              icon
            >
              <v-icon dark x-large>fas fa-play-circle</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs6 style="margin-left:1%;">
          <v-img
            width="100%"
            height="370px"
            src="../../../public/img/webp/BEC_image_2@2x.webp"
          />
          <v-layout>
            <v-flex xs6 style="margin-top:2%;" id="specialImage">
              
            </v-flex>
            <v-flex xs6 style="margin-top:2%;" flex-column>
              <v-img
                width="100%"
                height="300px"
                src="../../../public/img/webp/BEC_image_4@2x.webp"
              />
              <p id="paragraphColage">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Convention Center blandit
                tellus, a imperdiet est eleifend eu.
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-flex xs12 md12 flex-column justify-center style="background-color:#eceeed">
        <v-flex xs12 style="display:flex; margin-top:4%" layout justify-center>
          <v-flex xs1 flex-column>
            <p align="center" class="inscriptionTime">+20</p>
            <p align="center" class="textTimes">Speakers</p>
          </v-flex>
          <v-flex xs1 flex-column>
            <p align="center" class="inscriptionTime">3</p>
            <p align="center" class="textTimes">Workshops</p>
          </v-flex>
          <v-flex xs1 flex-column style="margin-right:1%">
            <p align="center" class="inscriptionTime">30</p>
            <p align="center" class="textTimes">Stands</p>
          </v-flex>
          <p id="verticalLine">|</p>
          <div style="background-color:black; color:white;  width:365px; height:120px; padding-left:3%; margin-left:2%">
          <div style="display:flex; height:110px; width:350px;">
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500">{{day}}</p>
            <p align="center" style="margin-bottom:-5px; font-size:13px">Días</p>
          </v-flex>
          <p align="center" style="padding-top:7%; font-size:30px; font-weight:500; margin-left:2%">:</p>
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500 ">{{hour}}</p>
            <p align="center" style="margin-bottom:-5px; font-size:13px">Horas</p>
          </v-flex>
          <p align="center" style="padding-top:7%; font-size:30px; font-weight:500">:</p>
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500 ">{{minutes}}</p>
            <p align="center" style="margin-bottom:-5px; font-size:13px">Min</p>
          </v-flex>
          <p align="center" style="padding-top:7%; font-size:30px; font-weight:500">:</p>
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500">{{seconds}}</p>
            <p align="center" style="margin-bottom:-5px; font-size:13px">Seg</p>
          </v-flex>
          </div>
          </div>
        </v-flex>
        <v-flex xs12 layout justify-center flex-column style="margin-top:-2%">
          <p aling="center" id="paragraphTime">
           Preinscríbete ahora y te enviaremos todo lo que necesitas saber.
          </p>
          <p>
            <v-flex layout justify-center style="margin:auto; margin-top:1.5%">
                <div style="display:flex">
                    <v-btn x-large  outlined="" style=" font-weight:800; border-radius:0; text-transform:none; font-size:20px;">
                      {{labels.enter_your_email}}
                    </v-btn>
                    <v-btn x-large dark color="black" style=" font-weight:400; border-radius:0; text-transform:none; font-size:20px; margin-left:2%">
                      {{labels.pre_register}}
                    </v-btn>
                </div>
            </v-flex>
          </p>
        </v-flex>
      </v-flex>

      <v-flex xs12 style="background-color:#eceeed; padding-top:5%;  padding-bottom:5%">
          <div style="display:flex; margin-left:10%">
            <p style="color:black; font-size:70px; font-weight:300">SPECIAL</p><p style="color:black;font-size:70px; font-weight:600">SPEAKERS</p>
          </div>
          <v-flex xs12 style=" display:flex;" layout justify-center>
            <v-card 
            style="margin-left:2%;background-color:#eceeed;" width="20%" height="100%" elevation="0"  
            v-for="(item,index) in itemSpeakers"
            :key="index">
              <v-card-title style="justify-content: space-around">
                <v-list-item-avatar width="100%" height="100%">
                  <img :src="item.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:0">
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:black; font-size:40px;font-weight:600;line-height: 110%; ">{{item.title}}</p>
                    <p align="center" style=" color:black; font-size:30px;font-weight:400; margin-top:1%; line-height: 110%;">{{item.subtitle}}</p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex layout justify-center style="display:flex; ">
            <v-card 
            style="margin-left:2%;background-color:#eceeed;" width="20%" height="100%" elevation="0"  
            v-for="(item2,index) in itemSpeakers2"
            :key="index">
              <v-card-title style="justify-content: space-around">
                <v-list-item-avatar width="100%" height="100%">
                  <img :src="item2.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:0">
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:black; font-size:40px;font-weight:600; line-height: 110%;">{{item2.title}}</p>
                    <p align="center" style=" color:black; font-size:30px;font-weight:400; line-height: 110%;">{{item2.subtitle}}</p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
      </v-flex>

      <v-flex xs6 style=" padding-left:4%; padding-right:2%; padding-top:3%;">
        <p align="left" style="font-size:60px; font-weight:600; color:black">Contactanos</p>
        <v-flex flex-column>
          <v-text-field placeholder="*Nombre" outlined style="margin-right:2%; border-radius:0">

          </v-text-field>
          <div style="display:flex">
            <v-text-field placeholder="*Correo electrónico" outlined style="margin-right:2%; border-radius:0"></v-text-field>
            <v-select
            style="width:8%; padding-right:2%; border-radius:0"
            outlined
            :items="itemsSelect"
            placeholder="*Asunto"
          ></v-select>
          </div>
          <v-textarea
          style="margin-right:2%; border-radius:0; font-weight:400; border-weight:200"
          outlined
          placeholder="*Descripción"
          >
          </v-textarea>
          <v-flex flex-column>
            <p style="font-size:25px; font-weight:500">Siguenos en:</p>
            <div style="display:flex; margin-top:-2%; margin-left:-1%">
              <v-btn icon x-large  dark>
                  <v-icon x-large color="black">fab fa-instagram</v-icon>
              </v-btn>
              <v-btn icon  color="black" x-large  dark >
                  <v-icon x-large color="black">fab fa-facebook</v-icon>
              </v-btn>
              <v-btn icon x-large  dark>
                  <v-icon x-large color="black">fab fa-linkedin</v-icon>
              </v-btn>
              <v-btn icon x-large  dark>
                  <v-icon x-large color="black">fab fa-twitter-square</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-flex>
      </v-flex>
      <v-flex xs6>
        <v-img src="../../../public/img/webp/mapa.png" height="700" />
      </v-flex>
      <v-flex xs6 style="margin-top:5%">
        <div style="display:flex; margin-left:5%;">
          <p style="margin-left:2%;font-size:16px; font-weight:500">{{labels.información}}</p>
          <p style="margin-left:2%;font-size:16px; font-weight:500">{{labels.privacy_policies}}</p>
          <p style="margin-left:2%;font-size:16px; font-weight:500">Cookies</p>
          <p style="margin-left:2%;font-size:16px; font-weight:500">Contáctenos</p>
        </div>
      </v-flex>
      <v-flex xs6 style="margin-top:5%" >
        <div style="font-weight:500; padding-right:2%; padding-left:4%">
        <p align="right" style="font-size:16px">Creado por nammu.io . Todos los derechos reservados © 2020</p>
        </div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import { labels, paragraphs } from "@/lang/lang.js";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import toolbar from "@/components/Toolbar.vue";
import {mapState,mapMutations} from 'vuex';

export default {
  data: () => ({
    labels: labels,
    paragraphs: paragraphs,
    settings: {
      suppressScrollY: true,
      maxScrollbarLength: 800
    },
    items: [
      {
        title: "SecretPro Caprus",
        img: "img/webp/image_product_1@2x.webp"
      },
      {
        title: "SecretPro Hones",
        img: "img/webp/image_product_2@2x.webp"
      },
      {
        title: "SecretPro Curology",
        img: "img/webp/image_Product_3@2x.webp"
      },
      {
        title: "SecretPro Fasttan",
        img: "img/webp/image_product_4@2x.webp"
      },
      {
        title: "SecretPro After Swim",
        img: "img/webp/image_product_5@2x.webp"
      }
    ],
    itemsSelect:[
          "Saludo"
    ],
    itemSpeakers: [
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/Speaker_1@2x.webp"
      },
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/speaker_2@2x.webp"
      },
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/speaker_3@2x.webp"
      },
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/speaker_4@2x.webp"
      }
    ],
    itemSpeakers2: [
       {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/speaker_5@2x.webp"
      },
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/speaker_6@2x.webp"
      },
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/speaker_7@2x.webp"
      },
      {
        title: "Speaker Name",
        subtitle:"Company Name",
        img: "img/webp/spearker_8@2x.webp"
      },
    ]
  }),computed:{
    ...mapState(["day","hour","minutes","seconds"])
  },
  components: {
    VuePerfectScrollbar,
     toolbar,
  },methods:{
    ...mapMutations(["getDate"])
  },beforeMount(){
    setInterval(() => {
      this.getDate();
    }, 1000);
  }
};
</script>
<style>
#imgFaceAcademy{
  background-image:url(../../../public/img/webp/image_faceAcademy@2x.webp);
  background-size: cover;
  background-position: absolute;
  height: 20%;
}
.scroll-area {
  width: 100%;
  padding-bottom: 5%;
  position: relative;
}
#container {
  padding-top: 15%;
  background-image: url(../../../public/img/webp/Hero@2x.webp);
  background-size: cover;
  width: 100%;
  background-position: absolute;
}
#promotionalVideo {
  font-size: 25px;
  font-weight: 300;
  color: white;
  position: absolute;
  bottom: 18px;
  right: 90px;
}
#specialImage{
  background-image: url("../../../public/img/webp/BEC_image_3@2x.webp");
  background-position: center;
  background-size: cover;
  margin-right: 2%;
}
#imageColage {
  background-image: url("../../../public/img/webp/BEC_image_1@2x.webp");
  background-position: center;
  background-size: cover;
}
#pCard {
  width: 150px;
  margin-top: 100px;
  margin-left: 55%;
  padding-right: 2%;
  margin-top: -28%;
  color: white;
  font-size: 25px;
  font-family: "Roboto", sans-serif !important;
  z-index: 1;
}
#btnWatch {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 230px;
  border-radius: 0;
  text-transform: none !important;
  width: 200px;
  height: 50px;
}
#secretPro {
  padding-top: 2%;
  font-size: 65px;
  font-family: "Roboto" !important;
  margin: auto;
}
#face {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
#academy {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 300;
}
#bec {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
.inscriptionTime {
  font-size: 55px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
.textTimes {
  margin-top: -10%;
  font-size: 18px;
  font-family: "Roboto" !important;
  color: black;
  font-weight: 600;
  line-height: 120%;
}
#verticalLine {
  font-size: 170px;
  font-weight: 200;
  color: black;
  margin-top: -4.2%;
}
#conference {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 300;
}
#secretProducts {
  font-size: 28px;
  font-family: "Roboto" !important;
  font-weight: 300;
  margin: auto;
  margin-top: -1.5%;
}
#secretProductsParagraph {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  width: 800px;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 4%;
  line-height: 120%;
}
#paragraphFaceAcademy {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  padding-left: 12%;
  padding-right: 12%;
  width: 100%;
  line-height: 120%;
}
#paragraphBecConference {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
  line-height: 120%;
}
#paragraphColage {
  margin-top: 2%;
  font-size: 25px;
  font-family: "Roboto" !important;
  color: black;
  font-weight: 500;
  width: 100%;
  text-align: justify;
  line-height: 120%;
}
.listFaceAcademy {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  line-height: 120%;
}
#paragraphTime{
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 800;
  margin: auto;
  color: black;
  text-align: justify;
  line-height: 120%;
}
h2 {
  font-size: 55px;
  font-family: "Roboto", sans-serif !important;
  margin-top: 25px;
  padding-left: 50%;
}
</style>