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
    methods:{
        dataCollector(event) {
            //console.log(event);
            const vm = this;
            for(const key in vm.data){
                if(key === event.type){
                    vm.data[key]=event.data;
                    console.log("key already exist");
                    console.log(vm.data);
                    this.$emit('dataGenerated',vm.data);
                    return;
                }
            }
            vm.data[event.type]=event.data;
            console.log("new key");
            console.log(vm.data);
            this.$emit('dataGenerated',vm.data);
        }
    }

});
new Vue({
    el:"#app",
    render(h) {
        return h(App)
    }
});

