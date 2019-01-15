import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultTell = ''
try {
  localStorage.tell && (defaultTell = localStorage.tell)
} catch (err) {}

let defaultAnotherTell = ''
try {
  sessionStorage.getItem('anotherTell') && (defaultAnotherTell = sessionStorage.getItem('anotherTell'))
} catch (err) {}

export default new Vuex.Store({
  state: {
    slideDerection: '',
    tell: defaultTell,
    data: {
      CITY: '',
      COMMENT: '',
      DAY_INFO: '',
      ID: null,
      MILEAGE: '',
      MONTH_INFO: '',
      NAME: '',
      PHONE: '',
      TDB_NUMBER: 0,
      TOTAL_PASSENGER: ''
    },
    anotherTell: defaultAnotherTell
  },
  mutations: {
    changeSlide (state, derection) {
      state.slideDerection = derection
    },
    changeTell (state, tell) {
      state.tell = tell
      try {
        localStorage.tell = tell
      } catch (err) {}
    },
    changeData (state, data) {
      state.data = data
    },
    changeAnotherTell (state, anotherTell) {
      state.anotherTell = anotherTell
      try {
        sessionStorage.setItem('anotherTell', anotherTell)
      } catch (err) {}
    }
  }
})
