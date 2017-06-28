/**
 * Created by shubham on 22/6/17.
 */

window.$ = window.jQuery = require("jquery");
require("materialize-css");
require("materialize-css-file");
require("custom-scss");
require("logo");
require("font-awesome-css");
import Vue from "vue";
import App from "../components/App.vue";

export const dataBus = new Vue({
    data() {
        return{
            data:{}
        }
    },
    method:{
        dataCollector(event) {
            const vm = this;
            for(const key in vm.data){
                if(key === event.type){
                    vm.dataGen[key]=event.data;
                    this.$emit('dataGenerated');
                    return;
                }
            }
            vm.dataGen[event.type]=event.data;
            this.$emit('dataGenerated');
        }
    }

});
new Vue({
    el:"#app",
    render(h) {
        return h(App)
    }
});

