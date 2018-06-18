import Vue from 'vue';

const thumborServer           =      'http://192.168.0.158:8888/unsafe/';

Vue.prototype.$thumbor = function (width, height) {
    return thumborServer + width + 'x' + height + '/smart/';
};
