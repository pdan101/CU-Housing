import { StarIcon } from "@chakra-ui/icons";
import { Location, Review } from "../../types";

type Props = {
    readonly dorm: Location
    readonly reviews: Review[]
}

const InfoHeader = ({dorm, reviews} : Props) => {
    const totalRatings = reviews.map( (data) => data.rating)
    const avgRating = totalRatings.length > 0 ? Math.round(totalRatings.reduce((sum,curr) => sum + curr) / totalRatings.length) : 0
    return (
      <article className=''>
        <h1 className="headerTitle">{dorm.name}</h1>
        <div className="header">
        <p>{avgRating}</p>
        {[...Array(avgRating)].map(() => {
        return <StarIcon color="teal"/>
        })}
        {avgRating < 5? 
          [...Array(5 - avgRating)].map(() => 
          <StarIcon color="gray"/>) : null}
        <p>{dorm.address}</p>
        </div>
        <img src={dorm.img} alt={dorm.name}/>
      </article>
    );
  }

export default InfoHeader