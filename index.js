window.onload = function () {
  var basemap = new L.StamenTileLayer("terrain");
  var map = new L.map("my-map", {
    center: new L.LatLng(38.1500, 22.0833),
    zoom: 10
  });
  map.addLayer(basemap);
};
