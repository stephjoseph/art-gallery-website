import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { iconMarker } from "./Icon";
import iconArrowLeft from "../../images/icon-arrow-left.svg";

const Header = () => {
  return (
    <header className="relative w-full">
      <Link
        className="group absolute top-0 left-0 z-20 flex self-start md:left-10"
        to="/"
      >
        <div className="flex h-[4.5rem] w-14 items-center justify-center bg-[#D5966C]">
          <img src={iconArrowLeft} alt="" />
        </div>
        <div className="flex h-[4.5rem] w-[12.75rem] items-center justify-center bg-[#151515] font-['Big_Shoulders_Display'] text-[1.25rem] font-extrabold uppercase leading-6 tracking-[3.64px] text-white">
          Back to home
        </div>
      </Link>
      <MapContainer
        center={[41.48140471508845, -71.3103603]}
        zoom={15}
        style={{
          height: "37.5rem",
          width: "100%",
          position: "static",
          zIndex: 10,
        }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.48150471508845, -71.3103603]} icon={iconMarker}>
          <Popup>
            99 King Street, <br />
            Newport <br /> RI 02840 <br /> United States of America
          </Popup>
        </Marker>
      </MapContainer>
    </header>
  );
};

export default Header;
