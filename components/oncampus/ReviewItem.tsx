import { StarIcon } from '@chakra-ui/icons';
import { Review } from '../../types'

type Props = {
    readonly review: Review
}

const ReviewItem = ({review}: Props) => {
    return (
      <article className="review">
      <div className="header">
      <p>{review.rating}</p>
  
      {[...Array(review.rating)].map(() => {
        return <StarIcon color="teal"/>
      })}
      {review.rating < 5? 
      [...Array(5 - review.rating)].map(() => 
      <StarIcon color="gray"/>) : null}
  
      <p className='reviewerName'>{review.author}</p>
      </div>
      <p className="rec">Recommened? {review.recommend? 'Yes':'No'}</p>
      <p>Pros:</p>
      <ul>
          {review.pros.map(item => {
              return <li>{item}</li>
          })}
      </ul>
      <p>Cons:</p>
      <ul>
          {review.cons.map(item => {
              return <li>{item}</li>
          })}
      </ul>
      <p>{review.text}</p>
      <p>{review.date}</p>
    </article>
    );
  }

export default ReviewItem