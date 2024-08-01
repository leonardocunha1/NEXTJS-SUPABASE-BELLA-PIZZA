"use client";

import "leaflet/dist/leaflet.css";

import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import TitleMini from "../ui/TitleMini";

const myIcon = new Icon({
  iconUrl: "/oleo.png",
  iconSize: [32, 32],
});

const position = [-20.536883622617736, -47.400327257739505];

function Location() {
  return (
    <>
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-1 mt-1 h-2 w-36 bg-orange-500"></div>
        <TitleMini>Venha já nos visitar</TitleMini>
        <div className="mt-1 h-2 w-36 bg-orange-500"></div>
      </div>
      <div className="sm: relative mx-auto mt-4 h-80 w-full max-w-3xl px-8 pb-8">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}>
            <Popup> Rua dos X 654 - Centro</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Location;
