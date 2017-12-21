import Vue from 'vue'
import Illinois from './Illinois.vue';
import 'lodash';
import 'bootstrap';
import jQuery from 'jquery';


import FusionCharts from 'fusioncharts'
// import VueFusionCharts from 'vue-fusioncharts';

// import Charts from 'fusioncharts/fusioncharts.charts'
// import Maps from 'fusioncharts/fusioncharts.maps'
import IllinoisMap from '../static/vendor/fusioncharts/maps/fusioncharts.illinois.js';
// Charts(FusionCharts);
// Maps(FusionCharts);
IllinoisMap(FusionCharts);
// Vue.use(VueFusionCharts,VueFusionCharts);

var APPS = {
    Illinois
};
import '../scss/base.scss'

Vue.config.productionTip = false



function renderAppInElement(el) {
    let App = APPS[el.id];
    if (!App) return;

    // Props as data attributes:
    // <div class="__vue-root" data-message="Hello" id="Greet"></div>
    //var props = Object.assign({}, el.dataset);
    console.log('Load component: ', el.id)
    new Vue({
        el,
        render(createElem) {
            return createElem(App, {
                // attrs: props
            });
        }
    })
}





document.addEventListener("DOMContentLoaded", function(event) {

    var roots = document.querySelectorAll('.__vue-root'),
        i;

    for (i = 0; i < roots.length; ++i) {
        renderAppInElement(roots[i])
    }

});