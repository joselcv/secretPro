<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout row wrap  >
    <toolbarResponsive style="margin-top:4%; margin-bottom:4%"/>
    <v-layout id="container" class="flex-column">
      <h2>{{paragraphs.every_day_is_an_opportunity_to_take_care_of_your_skin}}.</h2>
      <v-flex xs12 style="padding-left: 10%;">
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
            width="300"
            height="300"
            v-for="(item,index) in items"
            :key="index"
          >
            <img width="300" height="300" :src="item.img" alt="Esta imagen esta rota" />
            <p align="right" id="pCard">{{item.title}}</p>
          </v-card>
        </v-layout>
      </VuePerfectScrollbar>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-img
          width="850px"
          height="700px"
          src="../../../public/img/webp/image_faceAcademy@2x.webp"
        />
      </v-flex>
      <v-flex xs12 md6 layout justify-center>
        <v-flex xs12 md12 flex-column justify-center>
          <v-flex style="display:flex; margin-top:10%" layout justify-center>
            <p id="face">FACE</p>
            <p id="academy">Academy</p>
          </v-flex>
          <p align="center" id="paragraphFaceAcademy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur maximus blandit tellus, a imperdiet est eleifend
            eu. Proin quis laoreet lorem, sit amet consectetur augue.
            Aenean tempus dolor in fringilla dapibus.
          </p>
          <v-flex xs12 md12 layout justify-center mt-5>
            <v-flex xs6 flex-column style="padding-left:10%;">
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
                <span class="listFaceAcademy">Huesos</span>
              </div>
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
                <span class="listFaceAcademy">Arterias</span>
              </div>
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
                <span class="listFaceAcademy">Venas</span>
              </div>
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
                <span class="listFaceAcademy">Anatomía</span>
              </div>
            </v-flex>
            <v-flex xs6 flex-column style="padding-left:5%;">
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
                <span class="listFaceAcademy">Estética |</span>
              </div>
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
                <span class="listFaceAcademy">Estética ||</span>
              </div>
              <div style="display:flex">
                <span style="font-size:30px; padding-top:13px;  height:80px">→</span>
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
        <p align="center" id="paragraphBecConference">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus blandit
          tellus, a imperdiet est eleifend eu.
          <strong>September 20th</strong> lorem, sit amet consectetur
          augue. Aenean tempus dolor in
          <strong>Saber más.</strong>
        </p>
      </v-flex>
      <v-layout style=" background-color:#eceeed;" row wrap>
      
        <v-flex xs12 md5 layout justify-end  style="position:relative; padding-left:8%; padding-right:8%;">
         <v-img
            width="100%"
            height="370px"
            src="../../../public/img/webp/BEC_image_1@2x.webp"
          />
          <div style="display:flex">
            <p id="promotionalVideo">PROMOCIONAL VIDEO</p>
            <v-btn
              x-large
              style="color:white; position:absolute;bottom:25px;
              right:10%;"
              icon
            >
              <v-icon dark x-large>fas fa-play-circle</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs12 style="padding-left:8%; padding-right:8%; margin-top:5%;">
          <v-img
            width="100%"
            height="370px"
            src="../../../public/img/webp/BEC_image_2@2x.webp"
            style="margin-bottom:5%"
          />
            <v-flex xs12 style="margin-top:5%;">
              <v-img
                width="100%"
                height="445px"
                src="../../../public/img/webp/BEC_image_3@2x.webp"
              />
            </v-flex>
            <v-flex xs12 style="margin-top:5%; padding-bottom:10%" flex-column>
              <v-img
                width="100%"
                height="445px"
                src="../../../public/img/webp/BEC_image_4@2x.webp"
              />  
            </v-flex>
         
        </v-flex>
      </v-layout>
      <v-flex xs12 layout justify-center style="background-color:#eceeed; margin-top:-2%">
                <p align="center" id="paragraphColage">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Convention Center blandit
                tellus, a imperdiet est eleifend eu.
              </p>
            </v-flex>
      <v-flex xs12 md12 flex-column justify-center style="background-color:#eceeed">
        <v-flex xs12 style="display:flex; padding-top:4%; margin-top:-2%" layout justify-center>
          <v-flex xs3 flex-column>
            <p align="center" class="inscriptionTime">+20</p>
            <p align="center" class="textTimes">Speakers</p>
          </v-flex>
          <v-flex xs3 flex-column>
            <p align="center" class="inscriptionTime">3</p>
            <p align="center" class="textTimes">Workshops</p>
          </v-flex>
          <v-flex xs3 flex-column style="margin-right:1%">
            <p align="center" class="inscriptionTime">30</p>
            <p align="center" class="textTimes">Stands</p>
          </v-flex>
        </v-flex>
          <div style="background-color:black; color:white;  width:80%; height:120px; padding-left:3%; margin:auto">
          <v-flex layout justify-center style="display:flex; height:110px; width:100%;">
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500">179</p>
            <p align="center" style="margin-bottom:-5px; font-size:16px">Días</p>
          </v-flex>
          <p align="center" style="padding-top:23px; font-size:30px; font-weight:500; margin-left:2%">:</p>
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500 ">09</p>
            <p align="center" style="margin-bottom:-5px; font-size:16px">Horas</p>
          </v-flex>
          <p align="center" style="padding-top:23px; font-size:30px; font-weight:500">:</p>
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500 ">40</p>
            <p align="center" style="margin-bottom:-5px; font-size:16px">Min</p>
          </v-flex>
          <p align="center" style="padding-top:23px; font-size:30px; font-weight:500">:</p>
          <v-flex xs2 flex-column layout justify-center>
            <p align="center" style="margin-bottom:-5px; font-size:30px; font-weight:500">00</p>
            <p align="center" style="margin-bottom:-5px; font-size:16px">Seg</p>
          </v-flex>
          </v-flex>
          </div>
        <v-flex xs12 layout justify-center flex-column style="margin-top:3%">
          <p aling="center" id="paragraphTime">
           Preinscríbete ahora y te enviaremos todo lo que necesitas saber.
          </p>
          <p>
            <v-flex xs12 layout justify-center style="margin:auto; margin-top:1.5%">
                <v-flex xs12 flex-column style="margin:0% 10% 0% 10%">
                    <v-btn block outlined="" style=" font-weight:800; border-radius:0; text-transform:none; font-size:16px;margin-top:2%; margin-right:2%">
                      {{labels.enter_your_email}}
                    </v-btn>
                    <v-btn block dark color="black" style=" font-weight:400; border-radius:0; text-transform:none; font-size:16px; margin-top:2%">
                      {{labels.pre_register}}
                    </v-btn>
                </v-flex>
            </v-flex>
          </p>
        </v-flex>
      </v-flex>

       <v-flex xs12 style="background-color:#eceeed; padding-top:5%;  padding-bottom:5%">
          <v-flex style="display:flex;" layout justify-center>
            <p aling="center" style="color:black; font-size:34px; font-weight:300">SPECIAL</p><p align="center" style="color:black;font-size:34px; font-weight:600">SPEAKERS</p>
          </v-flex>
          <v-layout>
          <v-flex xs6>
            <v-card 
            style="background-color:#eceeed;" width="400" height="300" elevation="0"  
            v-for="(item,index) in itemSpeakers"
            :key="index">
              <v-card-title style="margin-right:-8%; justify-content: space-around">
                <v-list-item-avatar width="100" height="100">
                    <v-img :src="item.img" 
                    />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text >
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:black; font-size:18px;font-weight:600; ">{{item.title}}</p>
                    <p align="center" style=" color:black; font-size:18px;font-weight:400; margin-top:-18px">{{item.subtitle}}</p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card 
            style=";background-color:#eceeed;" width="400" height="300" elevation="0"  
            v-for="(item,index) in itemSpeakers2"
            :key="index">
              <v-card-title style="padding-left:15%; justify-content: space-around">
                <v-list-item-avatar width="100" height="100">
                    <v-img :src="item.img" 
                    />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text >
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:black; font-size:18px;font-weight:600; ">{{item.title}}</p>
                    <p align="center" style=" color:black; font-size:18px;font-weight:400; margin-top:-18px">{{item.subtitle}}</p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
         
          </v-layout>
      </v-flex>

      <v-flex xs12 style=" padding-left:2%; padding-top:3%;">
        <p align="left" style="font-size:38px; font-weight:600; color:black">Contactanos</p>
        <v-flex flex-column>
          <v-text-field placeholder="*Nombre" outlined style="margin-right:2%; border-radius:0">

          </v-text-field>
          <v-flex xs12>
            <v-select
            style="padding-right:2%; border-radius:0"
            outlined
            :items="itemsSelect"
            placeholder="*Asunto"
          ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field placeholder="*Correo electrónico" outlined style="margin-right:2%; border-radius:0"></v-text-field>
          </v-flex>
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
     
      <v-flex xs12 style="padding-top:10%">
      <v-flex layout justify-center>
            <v-flex flex-column>
            <p align="center" style="font-size:16px; font-weight:500">{{labels.información}}</p>
            <p align="center" style="font-size:16px; font-weight:500">{{labels.privacy_policies}}</p>
            <p align="center" style="font-size:16px; font-weight:500">Cookies</p>
            <p align="center" style="font-size:16px; font-weight:500">Contáctenos</p>
            </v-flex>
      </v-flex>
      </v-flex>
      <v-flex xs12 style="margin-top:5%" layout justify-center>
        <v-flex style="font-weight:500">
        <p align="center" style="font-size:16px; font-weight:800">Creado por nammu.io .Todos los derechos reservados © 2020</p>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import { labels, paragraphs } from "@/lang/lang.js";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import toolbarResponsive from "@/components/ToolbarResponsive.vue";

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
  }),
  components: {
    VuePerfectScrollbar,
    toolbarResponsive,
  }
};
</script>
<style scoped>
.scroll-area {
  width: 100%;
  padding-bottom: 5%;
  position: relative;
}
#container {
  padding-top: 15%;
  background-image: url(../../../public/img/webp/onne-beauty-XAW6bX5zOI0-unsplash@2x.png);
  background-size: cover;
  width: 100%;
  background-position: absolute;
}
#promotionalVideo {
  font-size: 16px;
  font-weight: 300;
  color: white;
  position: absolute;
  bottom: 20px;
  right: 25%;
}
#imageColage {
  background-image: url("../../../public/img/webp/BEC_image_1@2x.webp");
  background-position: center;
  background-size: cover;
}
#pCard {
  width: 150px;
  margin-top: 100px;
  margin-left: 50%;
  padding-right: 2%;
  margin-top: -28%;
  color: white;
  font-weight: 700;
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
  width: 150px;
  height: 30px;
}
#secretPro {
  padding-top: 2%;
  font-size: 45px;
  font-family: "Roboto" !important;
  margin: auto;
}
#face {
  font-size: 45px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
#academy {
  font-size: 45px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 300;
}
#bec {
  font-size: 35px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
.inscriptionTime {
  font-size: 45px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
.textTimes {
  margin-top: -10%;
  font-size: 20px;
  font-family: "Roboto" !important;
  color: black;
  font-weight: 600;
  line-height: 120%;
}
#horizontallLine {
  font-size: 300px;
  font-weight: 600;
  width: 100%;
  color: black;
  margin-top: 2%;
  margin-bottom: 5%;
}
#conference {
  font-size: 35px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 300;
}
#secretProducts {
  font-size: 28px;
  font-family: "Roboto" !important;
  font-weight: 300;
  margin: auto;
  margin-top: -20px;
}
#secretProductsParagraph {
  font-size: 16px;
  font-family: "Roboto" !important;
  font-weight: 400;
  width: 85%;
  
  margin-top: 1%;
  margin-bottom: 4%;
  line-height: 120%;
}
#paragraphFaceAcademy {
  font-size: 16px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;

  width: 85%;
  line-height: 120%;
}
#paragraphBecConference {
  font-size: 16px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  width: 85%;
  text-align: justify;
  line-height: 120%;
}
#paragraphColage {
  margin-top: -2%;
  font-size: 16px;
  font-family: "Roboto" !important;
  color: black;
  font-weight: 500;
  width: 60%;
  text-align: justify;
  line-height: 120%;
}
.listFaceAcademy {
  font-size: 16px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  line-height: 120%;
}
#paragraphTime{
  font-size: 16px;
  font-family: "Roboto" !important;
  font-weight: 800;
  margin:0% 10% 0% 10%;
  color: black;
  padding:2%;
  text-align: justify;
  line-height: 120%;
}
h2 {
  font-size: 28px;
  font-family: "Roboto", sans-serif !important;
  margin-top: 25px;
  padding-top: 15%;
  padding-left: 10%;
  padding-right: 5%;
}
</style>