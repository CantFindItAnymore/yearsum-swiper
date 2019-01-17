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
      'DAY_INFO': '',
      'CITY': '',
      'PHONE': '',
      'TOTAL_PASSENGER': '',
      'TDB_NUMBER': 0,
      'MILEAGE': '',
      'shareUrl': '',
      'ID': 0,
      'MONTH_INFO': '',
      'COMMENT': '',
      'shareImg': '',
      'NAME': ''
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
