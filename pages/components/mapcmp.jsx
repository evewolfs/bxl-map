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
    mapRef.current.flyTo({ center: [data.lon, data.lat], zoom: 14 });
  };

  const closePopup = () => {
    setSelectedMarker(null);
  };


  const scrollToTop = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
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
  // const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXZld29sZnMiLCJhIjoiY2t3ZTBjMW4wMDAzODJxcDJ2ZHNzaGN6dSJ9.TMIw2kv_p_oW2oosW1LY2w';
  if (!datas) {
    return null; // or return a loading indicator, error message, or handle this case accordingly
  }
  return (
    <div className={styles.container}>
      <div className={styles.mapcontainer}>
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          style={{
            // Adjust 20px to match the border width
            maxWidth: "100vw",
            height: "100vh",
            borderRadius: "1px",
            border: "1px solid white",
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
              activeFilters?.length === 0 ||
              activeFilters?.includes(data.category)
            ) {
              return (
                <Marker
                  key={index}
                  longitude={data.lon}
                  latitude={data.lat}

                >
                  <button
                    type="button"
                    className={styles.cursorpointer}
                    onClick={(e) => zoomToSelectedLoc(e, data, index)}
                  >
                    <Image
                      src={`/bxl-map${data.imageUrl}`}
                      alt={data.name}
                      width={50}
                      height={50}
                      className={selectedMarker && selectedMarker.index === index ? styles.selectedMarker : ""}
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 417.726 7.956">
                  <path
                    fill="#fff"
                    strokeWidth="0"
                    d="M1.448 7.955a9744.251 9744.251 0 01414.829-4.399c1.931.021 1.932-2.979 0-3A9743.654 9743.654 0 001.448 4.955c-1.926.061-1.934 3.062 0 3z"
                  ></path>
                </svg>
                <div className={classes.popupInfo}>
                  <span>{selectedMarker.data.title}</span>
                  <br />

                  <div className={classes.popupDist}>
                    <span>{selectedMarker.data.distance}</span>
                  </div>

                  <Link
                    href={selectedMarker.data.gmaps === "" ? "#" : selectedMarker.data.gmaps}
                    target={selectedMarker.data.gmaps === "" ? null : "_blank"}
                    className={classes.popupWebUrl}
                  >
                    {selectedMarker.data.gmaps === "" ? "Nil" : "See on Google Maps"}
                  </Link>

                </div>
              </div>
            </div>
          )}
          <button className={styles.backToTopButton} onClick={scrollToTop}>
            Back to filters
          </button>
        </Map>
      </div>
    </div>
  );
}