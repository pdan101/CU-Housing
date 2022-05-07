import { Location, Review } from "../../types";
import About from "./About";
import Amenities from "./Amenities";
import InfoHeader from "./InfoHeader";
import ReviewItem from "./ReviewItem"
import ReviewDrawer from "../review/reviewDrawer";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'


type Props = {
    readonly dorm: Location
    readonly reviews: Review[]
}

function ReviewsList({dorm, reviews} : Props) {
  const Map = () => {
    return (
      <div style={{ width: "10vw", height: "10vh" }}>
        <GoogleMap defaultZoom={17}
          defaultCenter={{ lat: Number(dorm.lat), lng: Number(dorm.long) }}>
          <Marker position={{ lat: Number(dorm.lat), lng: Number(dorm.long) }}
          />
        </GoogleMap>
      </div>
    );
  }
  
const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
    <section className=''>
      <InfoHeader dorm={dorm} reviews={reviews}></InfoHeader>
      <div className="AboutMap">
        <article className="left">
        <About description={dorm.description}></About>
        <Amenities amenities={dorm.amenities}></Amenities>
        </article>
        <WrappedMap
          googleMapURL=
          {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBHognjaO3IFJcCGchpEZMDGnnVMuDV_eY'}
          containerElement={<div style={{ height: "300px", width: "50%" }} />}
          mapElement={<div style={{ height: "100%", width: "100%" }} />}
          loadingElement={<div style={{ height: "100%", width: "100%" }} />}></WrappedMap>
      </div>
      <div className="reviewHeader">
      <h1 className="headerTitle">Reviews</h1>
      <ReviewDrawer locationID={dorm.id}></ReviewDrawer>
      </div>
      {reviews.map(data => {
        return <ReviewItem review={data}></ReviewItem>
      })}
    </section>
  );
}

export default ReviewsList