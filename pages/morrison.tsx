import { dataAttr } from '@chakra-ui/utils'
import React from 'react'


type Props = {
    id: number
    name: string
    date: string
    location: string
    rating: number
    address: string
    recommend: boolean
    pros: string[]
    cons: string[]
    comment: string
  }


const reviews = [
    {
        id:1,
        name: 'Betty',
        date: 'April 21, 2022',
        location: 'Morrison Hall',
        rating: 2.0,
        address: '121 Triphammer Rd, Ithaca, NY 14850, USA',
        recommend: false,
        pros:['has air conditioning', 'dining hall'],
        cons:['I hate the stench from library', 'loud neigbors'],
        comment: 'We have an arsonist living here... Im scared for my life!'
    },
    {
        id:2,
        name: 'Bob',
        date: 'April 10, 2022',
        location: 'Morrison Hall',
        rating: 5,
        address: '121 Triphammer Rd, Ithaca, NY 14850, USA',
        recommend: true,
        pros:['clean new dorms', 'dining hall nearby'],
        cons:[],
        comment: 'Such a nice place to live, better than West campus!'
    }
]

function ReviewsList() {
    return (
    <section className=''>
      {reviews.map(data => {
        return <Review key={data.id} {...data}></Review>
      })}
    </section>
  );
}

const Review = ({name, date, rating, recommend, pros, cons, comment}: Props) => {
  return (
      
  <article className="review">
    <div className="reviewHeader">
    <p>{rating}</p>
    <p className='reviewerName'>{name}</p>
    </div>
    <p className="rec">Recommened? {recommend? 'Yes':'No'}</p>
    <p>Pros:</p>
    <ul>
        {pros.map(item => {
            return <li>{item}</li>
        })}
    </ul>
    <p>Cons:</p>
    <ul>
        {cons.map(item => {
            return <li>{item}</li>
        })}
    </ul>
    <p>{comment}</p>
    <p>{date}</p>
  </article>
  );
}

export default ReviewsList
