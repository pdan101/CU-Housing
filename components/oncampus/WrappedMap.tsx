import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'



const Map = () => {
    return (
      <div style={{ width: "10vw", height: "10vh" }}>
        <GoogleMap defaultZoom={17}
          defaultCenter={{ lat: 42.45581065157475, lng: -76.47894284603065 }}>
          <Marker position={{ lat: 42.45581065157475, lng: -76.47894284603065 }}
          />
        </GoogleMap>
      </div>
    );
  }
  
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap