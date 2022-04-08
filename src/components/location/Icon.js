import L from "leaflet";
import icon from "../../images/icon-location.svg";

const iconMarker = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: null,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(66, 88),
  className: "leaflet-div-icon",
});

export { iconMarker };
