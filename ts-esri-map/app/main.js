/// <reference path="arcgis-js-api.d.ts" />
define(["require", "exports", "esri/map"], function (require, exports, Map) {
    var map = new Map("mapDiv", {
        basemap: "topo",
        center: [-122.45, 37.75],
        zoom: 13
    });
});
//# sourceMappingURL=main.js.map