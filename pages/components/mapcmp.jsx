import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState, useRef } from "react";
import datas from "./../../datas.json";
import classes from "../../styles/Page.module.css";
import Link from "next/link";
import CustomButton from './CustomButton';


export default function Mapcmp() {

  const [lng, setLng] = useState(4.377298);
  const [lat, setLat] = useState(50.867416);
  const [selectedMarker, setSelectedMarker] = useState(null);
	const mapRef = useRef(null);
  const [activeFilters, setActiveFilters] = useState([]);

  const zoomToSelectedLoc = (e, data, index) => {
		// stop event bubble-up which triggers unnecessary events
		e.stopPropagation();
		setSelectedMarker({ data, index });
		mapRef.current.flyTo({ center: [data.lon, data.lat], zoom: 16 });
	};

  // Toggle filter state
  const toggleFilter = filter => {
    setActiveFilters(prevFilters =>
        prevFilters.includes(filter)
            ? prevFilters.filter(item => item !== filter)
            : [...prevFilters, filter]
    );
  };

  return (
    <div className={styles.container}>


        {/* Filter Buttons */}
        <div>
          <CustomButton  name="Belgian Restaurants" imageUrl="/icon-food.png" onClick={() => toggleFilter('belgian-restaurants')}
              style={{
                fontWeight: activeFilters.includes('belgian-restaurants')
                    ? 'bold'
                    : 'normal',
              }} />
      
      
      <CustomButton  name="Beers" imageUrl="/icon-beer.png" onClick={() => toggleFilter('beers')}
              style={{
                fontWeight: activeFilters.includes('beers')
                    ? 'bold'
                    : 'normal',
              }}/>
          <CustomButton  name="Coffees" imageUrl="/icon-coffee.png" onClick={() => toggleFilter('coffees')}
              style={{
                fontWeight: activeFilters.includes('coffees')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Turkish Delights" imageUrl="/icon-turkish.png" onClick={() => toggleFilter('turkish')}
              style={{
                fontWeight: activeFilters.includes('turkish')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Bakery" imageUrl="/icon-bread.png" onClick={() => toggleFilter('bread')}
              style={{
                fontWeight: activeFilters.includes('bread')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Arts & Culture" imageUrl="/icon-art.png" onClick={() => toggleFilter('art')}
              style={{
                fontWeight: activeFilters.includes('art')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Belgian Fries" imageUrl="/icon-fries.png" onClick={() => toggleFilter('fries')}
              style={{
                fontWeight: activeFilters.includes('fries')
                    ? 'bold'
                    : 'normal',
              }}/>
               <CustomButton  name="Green Walks" imageUrl="/icon-leaf.png" onClick={() => toggleFilter('green')}
              style={{
                fontWeight: activeFilters.includes('green')
                    ? 'bold'
                    : 'normal',
              }}/>
          <CustomButton  name="Wine Bar" imageUrl="/icon-wine.png" onClick={() => toggleFilter('wine')}
              style={{
                fontWeight: activeFilters.includes('wine')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Transportation" imageUrl="/icon-transport.png" onClick={() => toggleFilter('transport')}
              style={{
                fontWeight: activeFilters.includes('transport')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Supermarket" imageUrl="/icon-supermarket.png" onClick={() => toggleFilter('supermarket')}
              style={{
                fontWeight: activeFilters.includes('supermarket')
                    ? 'bold'
                    : 'normal',
              }}/>
                 <CustomButton  name="Ethical Shopping" imageUrl="/icon-shopping.png" onClick={() => toggleFilter('shopping')}
              style={{
                fontWeight: activeFilters.includes('shopping')
                    ? 'bold'
                    : 'normal',
              }}/>
        
                 <CustomButton  name="Pizza" imageUrl="/icon-pizza.png" onClick={() => toggleFilter('pizza')}
              style={{
                fontWeight: activeFilters.includes('pizza')
                    ? 'bold'
                    : 'normal',
              }}/>
    
                
        </div>

        <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            style={{
              width:"100vw",
              height:"100vh",
              borderRadius:"1px",
              border:'2px solid black',
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
          {/* <Marker longitude={lng} latitude={lat} /> */}
          <NavigationControl position="bottom-right" />
          <FullscreenControl />
          <GeolocateControl />
          {datas.map((data, index) => {
  // Check if marker's category matches the selected category
  if (activeFilters.length === 0 || activeFilters.includes(data.category)) {
    // Check if this marker's category matches the selected category
    const isSelectedCategory = activeFilters.length === 1 && activeFilters[0] === data.category;

    return (
      <Marker key={index} longitude={data.lon} latitude={data.lat}>
        <button
          type="button"
          className={styles.cursorpointer}
          onClick={(e) => zoomToSelectedLoc(e, data, index)}
        >
          {isSelectedCategory && <Image src={data.imageUrl} alt={data.name} width={30} height={30} />}
        </button>
      </Marker>
    );
  } else {
    return null;  // Don't render marker if it doesn't match active filters
            }
          })}

          {selectedMarker ? (
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
          ) : null}
        </Map>

    </div>
  )
}
