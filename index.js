window.onload = function () {
  var basemap = new L.StamenTileLayer("terrain");
  var map = new L.map("my-map", {scrollWheelZoom:false}).setView([38.1500, 22.0833],10);
    
  map.addLayer(basemap);
};
