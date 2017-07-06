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
        return {
            data: []
        }
    },
    methods:{
        dataCollector(event) {
            //console.log(event);
            const vm = this;
            // for(let i = 0 ;i<vm.data.length;i++){
            //     console.log(vm.data[i].fieldName);
            //     if(vm.data[i].fieldName === event.fieldName){
            //         console.log(event.fieldName);
            //         vm.data[i].data=event.data;
            //         console.log("key already exist");
            //             console.log(vm.data);
            //         this.$emit('dataGenerated',vm.data);
            //         return;
            //     }
            // }
            // console.log("----------------- New Key"+event.fieldName+"----------------------");
            vm.data.push({
                fieldName:event.fieldName,
                data: event.data
            });
           // console.log(event.fieldName);
           // console.log(vm.data);
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

