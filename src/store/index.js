import Vue from "vue";
import Vuex from "vuex";
import Sheets from './modules/googleSheets.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    Sheets
    }
});