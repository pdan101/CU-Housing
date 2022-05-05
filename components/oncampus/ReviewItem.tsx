import { StarIcon } from '@chakra-ui/icons';
import { Review } from '../../types'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button
} from '@chakra-ui/react'


type Props = {
  readonly review: Review
}

const ReviewItem = ({ review }: Props) => {
  const emailHref = `mailto:${review.email}?subject=CU-Housing Connection`

  return (
    <article className="review">
      <div className="header">
        <p>{review.rating}</p>

        {[...Array(review.rating)].map(() => {
          return <StarIcon color="teal" />
        })}
        {review.rating < 5 ?
          [...Array(5 - review.rating)].map(() =>
            <StarIcon color="gray" />) : null}

        <p className='reviewerName'>{review.author}</p>
      </div>
      <p className="rec">Recommened? {review.recommend ? 'Yes' : 'No'}</p>
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
      {review.okToContact && <Popover placement='top-start'>
        <PopoverTrigger>
          <Button>Contact Me</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Contact {review.author}</PopoverHeader>
          <PopoverBody>
            <a style={{ "color": "blue" }} href={emailHref}>{review.email}</a>
          </PopoverBody>
        </PopoverContent>
      </Popover>}
    </article>
  );
}

export default ReviewItem