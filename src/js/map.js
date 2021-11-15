// contacts-right-part
mapboxgl.accessToken =
  "pk.eyJ1IjoidmVyYWtvcnp1biIsImEiOiJja3UzMXF6enQybjR2Mm5wODMxN3c4eGg5In0.PZe_xAK_4tEofMlL0VKdPA";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3366, 48.86084],
  zoom: 15.7,
});

const nav = new mapboxgl.NavigationControl({
  showCompass: true,
  showZoom: true,
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({ color: "#000000" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker2 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);

const marker5 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);
