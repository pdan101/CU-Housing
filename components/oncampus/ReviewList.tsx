import { Location, Review } from "../../types";
import About from "./About";
import Amenities from "./Amenities";
import InfoHeader from "./InfoHeader";
import Map from "./Map"
import ReviewItem from "./ReviewItem"

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
        <Map></Map>
      </div>
      <h1 className="headerTitle">Reviews</h1>
      {reviews.map(data => {
        return <ReviewItem review={data}></ReviewItem>
      })}
    </section>
  );
}

export default ReviewsList