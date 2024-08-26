import JsVectorMap from 'jsvectormap'
import 'jsvectormap/jsvectormap.css'
import 'jsvectormap-maps/_ug-world.js'

let map = new JsVectorMap({
    selector: document.querySelector('.value--map'),
    map: "ug-world",
    zoomButtons: false,
    zoomMax: 1000,
    backgroundColor: "#b3dff5",
    regionsSelectable: true,
    regionsSelectableOne: true,
    showTooltip: false,
    regionStyle: {
        initial: {
            fill: "#fdfbe5",
            stroke: "#757674",
            strokeWidth: 1
        },
        selected: {
            fill: "#e7f3ea"
        }
    },
})