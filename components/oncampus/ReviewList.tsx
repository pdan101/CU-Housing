import { Location, Review } from "../../types";
import About from "./About";
import Amenities from "./Amenities";
import InfoHeader from "./InfoHeader";
import ReviewItem from "./ReviewItem"
import WrappedMap from "./WrappedMap";
import ReviewDrawer from "../review/reviewDrawer";

type Props = {
    readonly dorm: Location
    readonly reviews: Review[]
}

function ReviewsList({dorm, reviews} : Props) {
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