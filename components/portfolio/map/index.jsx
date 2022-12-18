import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// import * as parkData from "./skateboard-parks.json";
import * as bookstoreData from "./bookstore.json";

L.Icon.Default.imagePath = "/leaflet_images/";

const Map = () => {
  const [activePark, setActivePark] = useState(null);

  const newBook = [];
  bookstoreData.map((item, index) => {
    let wtk = item.WKT.split(" ");
    return newBook.push({
      name: item.name,
      description: item.description,
      longtitude: parseFloat(wtk[1].replace("(", "")),
      latitude: parseFloat(wtk[2].replace(")", "")),
    });
  });

  return (
    <MapContainer
      center={[newBook[0].latitude, newBook[0].longtitude]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {newBook.map((bookstore) => (
        <Marker
          key={bookstore.name}
          position={[bookstore.latitude, bookstore.longtitude]}
          eventHandlers={{ click: () => setActivePark(bookstore) }}
        />
      ))}
      {activePark && (
        <Popup
          position={[activePark.latitude, activePark.longtitude]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.name}</h2>
            <p>{activePark.description}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
};

export default Map;
