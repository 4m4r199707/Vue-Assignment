// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: 'AIzaSyAKZpNg0UIl91CXo8jEhssdU685KTdQi3c',
    authDomain: 'vue-react-assignment.firebaseapp.com',
    databaseURL: 'https://vue-react-assignment.firebaseio.com',
    projectId: 'vue-react-assignment',
    storageBucket: '',
    messagingSenderId: '207829953757',
    appId: '1:207829953757:web:85ef11b1cd08911999ff34'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});