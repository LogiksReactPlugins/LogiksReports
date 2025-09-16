import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// helper component for dynamic recenter
const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], map.getZoom());
    }
  }, [lat, lng, map]);
  return null;
};

const GmapView = ({ reportConfig, data }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  console.log({reportConfig,data})
console.log(reportConfig.gmap.colmap)
  const colMap = {
    title: "title",
    descs: "descs",
    geolocation: "geolocation",
    avatar: "avatar",
    icon: "icon",
    ...(reportConfig?.gmap?.colmap || {}),
  };

  const zoom = reportConfig?.gmap?.zoom || 2;
  const template =
    reportConfig?.gmap?.template ||
    `<div><h1>$title</h1><p>$descs</p></div>`;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCurrentLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }, []);

  // replace template placeholders
  const renderTemplate = (record) => {
    let tpl = template;
    Object.keys(colMap).forEach((key) => {
      const val = record[colMap[key]] || "";
      tpl = tpl.replaceAll(`$${key}`, val);
    });
    return tpl;
  };

  const defaultCenter = [17.7199121, 75.8663931];

  return (
    <div className="h-[100vh] w-full">
      <MapContainer
        center={defaultCenter}
        zoom={zoom} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {currentLocation && (
          <Marker position={[currentLocation.lat, currentLocation.lng]}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {data?.map((record, idx) => {
          const geo = record[colMap.geolocation];
          if (!geo) return null;
          const [lat, lng] = geo.split(",").map((x) => parseFloat(x.trim()));
          return (
            <Marker key={idx} position={[lat, lng]}>
              <Popup>
                <div
                  dangerouslySetInnerHTML={{
                    __html: renderTemplate(record),
                  }}
                />
              </Popup>
            </Marker>
          );
        })}

        {currentLocation && (
          <RecenterMap lat={currentLocation.lat} lng={currentLocation.lng} />
        )}
      </MapContainer>
    </div>
  );
};

export default GmapView;
