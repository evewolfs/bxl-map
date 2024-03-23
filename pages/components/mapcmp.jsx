import Image from "next/image";
import styles from "../../styles/Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState, useRef, useEffect } from "react";
import datas from "../../datas.json";
import classes from "../../styles/Page.module.css";
import Link from "next/link";

export default function Mapcmp({ activeFilters, resetSelectedMarker }) {
  const [lng, setLng] = useState(4.377298);
  const [lat, setLat] = useState(50.867416);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

  const zoomToSelectedLoc = (e, data, index) => {
    e.stopPropagation();
    setSelectedMarker({ data, index });
    // mapRef.current.flyTo({ center: [data.lon, data.lat], zoom: 14 });
  };

  const closePopup = () => {
    setSelectedMarker(null);
  };

  useEffect(() => {
    if (resetSelectedMarker && selectedMarker) {
      setSelectedMarker(null);
    }
  }, [resetSelectedMarker]);

  useEffect(() => {
    const closePopupOnMapInteraction = () => {
      closePopup();
    };

    if (mapRef.current) {
      mapRef.current.getMap().on("click", closePopupOnMapInteraction);
      mapRef.current.getMap().on("drag", closePopupOnMapInteraction);

      return () => {
        mapRef.current.getMap().off("click", closePopupOnMapInteraction);
        mapRef.current.getMap().off("drag", closePopupOnMapInteraction);
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mapcontainer}>
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          style={{
            width: "calc(100vw - 20px)", // Adjust 20px to match the border width
            maxWidth: "100%",
            height: "70vh",
            borderRadius: "1px",
            border: "2px solid black",
            position: "relative",
            filter: "blur(0.5px)",
          }}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 12,
          }}
          mapStyle="mapbox://styles/evewolfs/ckwe0tsp02h3w15o8wzlcliwl"
        >
          <NavigationControl position="bottom-right" />
          <FullscreenControl />
          <GeolocateControl />
          {datas.map((data, index) => {
            if (
              activeFilters.length === 0 ||
              activeFilters.includes(data.category)
            ) {
              return (
                <Marker key={index} longitude={data.lon} latitude={data.lat}>
                  <button
                    type="button"
                    className={styles.cursorpointer}
                    onClick={(e) => zoomToSelectedLoc(e, data, index)}
                  >
                    <Image
                      src={data.imageUrl}
                      alt={data.name}
                      width={50}
                      height={50}
                    />
                  </button>
                </Marker>
              );
            } else {
              return null; // Don't render marker if it doesn't match active filters
            }
          })}
          {selectedMarker && (
            <div className={classes.popupContainer}>
              <button className={classes.closeButton} onClick={closePopup}>
                X
              </button>
              <div className={classes.popupContent}>
                <h3 className={classes.popupTitle}>
                  {selectedMarker.data.name}
                </h3>
                <div className={classes.popupInfo}>
                  <span>{selectedMarker.data.title}</span>
                  <br />
                  <div className={classes.popupDist}>
                    <span>{selectedMarker.data.distance}</span>
                  </div>
                  <Link
                    href={
                      selectedMarker.data.gmaps === ""
                        ? "#"
                        : selectedMarker.data.gmaps
                    }
                    target={
                      selectedMarker.data.gmaps === "" ? null : "_blank"
                    }
                    className={classes.popupWebUrl}
                  >
                    <span
                      style={{ textDecoration: "none", color: "transparent", textAlign:"right", bottom:"0", display: "block"
                     }}
                    >
                      {selectedMarker.data.gmaps === ""
                        ? "Nil"
                        : selectedMarker.data.gmaps}
                    </span>
                    <span> See on Google Maps</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Map>
      </div>
    </div>
  );
}
