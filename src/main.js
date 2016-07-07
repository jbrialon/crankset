import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

if (typeof (Storage) !== undefined) {
  // Code for localStorage/sessionStorage.
  console.log('storage')
} else {
  // Sorry! No Web Storage support..
  console.log('nostorage')
}
