/**
 * Created by shubham on 22/6/17.
 */

window.$ = window.jQuery = require("jquery");
require("materialize-css");
require("materialize-css-file");
require("custom-scss");
require("logo");
require("font-awesome-css");
var Vue = require("vue");
var App = require("../components/App.vue");

new Vue({
    el:"#app",
    render: function (h) {
        return h(App)
    }
});


