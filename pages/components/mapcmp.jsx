import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState, useRef } from "react";
import datas from "../../datas.json";
import classes from "../../styles/Page.module.css";
import Link from "next/link";

export default function Mapcmp({ activeFilters }) {
  const [lng, setLng] = useState(4.377298);
  const [lat, setLat] = useState(50.867416);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

  const zoomToSelectedLoc = (e, data, index) => {
    e.stopPropagation();
    setSelectedMarker({ data, index });
    mapRef.current.flyTo({ center: [data.lon, data.lat], zoom: 16 });
  };

  return (
    <div className={styles.container}>
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        style={{
          width: "100vw",
          height: "100vh",
          borderRadius: "1px",
          border: '2px solid black',
          position: 'relative',
          filter: 'blur(0.5px)'
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/evewolfs/ckwe0tsp02h3w15o8wzlcliwl"
      >
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
        {datas.map((data, index) => {
          if (activeFilters.length === 0 || activeFilters.includes(data.category)) {
            return (
              <Marker key={index} longitude={data.lon} latitude={data.lat}>
                <button
                  type="button"
                  className={styles.cursorpointer}
                  onClick={(e) => zoomToSelectedLoc(e, data, index)}
                >
                  <Image src={data.imageUrl} alt={data.name} width={40} height={40} />
                </button>
              </Marker>
            );
          } else {
            return null; // Don't render marker if it doesn't match active filters
          }
        })}

        {selectedMarker && (
          <Popup
            offset={25}
            latitude={selectedMarker.data.lat}
            longitude={selectedMarker.data.lon}
            onClose={() => {
              setSelectedMarker(null);
            }}
            closeButton={false}
          >
            <h3 className={classes.popupTitle}>{selectedMarker.data.name}</h3>
            <div className={classes.popupInfo}>
              <label className={classes.popupLabel}>Name: </label>
              <span>{selectedMarker.data.name}</span>
              <br />
              <label className={classes.popupLabel}>Title: </label>
              <span>{selectedMarker.data.title}</span>
              <br />
              <label className={classes.popupLabel}>Google map: </label>
              <Link
                href={selectedMarker.data.gmaps === "" ? "#" : selectedMarker.data.gmaps}
                target={selectedMarker.data.gmaps === "" ? null : "_blank"}
                className={classes.popupWebUrl}
              >
                {selectedMarker.data.gmaps === "" ? "Nil" : selectedMarker.data.gmaps}
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

