import Vue from 'nativescript-vue';

import containerBars from './components/ContainerBars';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(containerBars)])

}).$start();
