import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date:null,
    hour:0,
    year:null,
    minutes:0,
    seconds:0,
    month:null,
    day:null,
  },
  mutations: {
    getDate(state){
      Vue.set(state,'date',new Date);
      Vue.set(state,'year',state.date.getFullYear());
      Vue.set(state,'month',state.date.getMonth());
      Vue.set(state,'day',state.date.getDate());

      if(state.date.getHours()>12){
        Vue.set(state,'hour',state.date.getHours() - 12);
      }else if(state.date.getHours()<1){
        Vue.set(state,'hour',12);
      }else{
        Vue.set(state,'hour',state.date.getHours());
      }
      
      Vue.set(state,'seconds',state.date.getSeconds());
      Vue.set(state,'minutes',state.date.getMinutes());
      // console.log("dia :",state.day,"mes:",state.month+1,"año:",state.year,"horas :",state.hour,"minutos :" ,state.minutes,"segundos : ",state.seconds);
      
    },
  },
  actions: {
  },

})
