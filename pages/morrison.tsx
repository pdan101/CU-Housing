import { dataAttr } from '@chakra-ui/utils'
import {StarIcon} from '@chakra-ui/icons'
import React from 'react'
import Layout from '../components/layout/Layout'

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

function MorrisonPage () {
  return (
    <Layout title="Home">
      <ReviewsList></ReviewsList>
    </Layout>
  );
}

function ReviewsList() {
    return (
    <section className=''>
      <Header></Header>
      <div className="AboutMap">
        <article className="left">
        <About></About>
        <Amenities></Amenities>
        </article>
        <Map></Map>
      </div>
      <h1 className="headerTitle">Reviews</h1>
      {reviews.map(data => {
        return <Review key={data.id} {...data}></Review>
      })}
    </section>
  );
}
const Review = ({name, date, rating, recommend, pros, cons, comment}: Props) => {
  return (
    <article className="review">
    <div className="header">
    <p>{rating}</p>

    {[...Array(rating)].map(() => {
      return <StarIcon color="teal"/>
    })}
    {rating < 5? 
    [...Array(5 - rating)].map(() => 
    <StarIcon color="gray"/>) : null}

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

const Header = () => {
  const totalRatings = reviews.map( (data) => data.rating)
  const avgRating = Math.round(totalRatings.reduce((sum,curr) => sum + curr) / totalRatings.length)
  return (
    <article className=''>
      <h1 className="headerTitle">Morrison Hall</h1>
      <div className="header">
      <p>3.5</p>
      {[...Array(avgRating)].map(() => {
      return <StarIcon color="teal"/>
      })}
      {avgRating < 5? 
        [...Array(5 - avgRating)].map(() => 
        <StarIcon color="gray"/>) : null}
      <p>121 Triphammer Rd, Ithaca, NY 14850, USA</p>
      </div>
      <img src="https://news.cornell.edu/sites/default/files/styles/full_size/public/2021-09/0922_green2.jpg?itok=xkTfGeUT" alt="Morrison Hall"/>
    </article>
  );
}

const About = () => {
  return (
    <article className="About">
    <h1 className="headerTitle">About</h1>
    <p>Toni Morrison Hall is part of Cornell's Sophomore Village, 
      and will house upperlevel students from the 2022-2023 academic
       year onward.</p>
    <p>Through creative floor plans, Toni Morrison Hall provides living
       spaces with a modern aesthetic that enhances the residential experience
        and encourages interaction and collaboration among students. Toni Morrison
         Hall aims to draw students out of their individual rooms and into ample
          common areas that support group study, social interaction, and programs
           in spacious lounges and nearby cafés.</p>
    </article>
  );
}

const Amenities = () => {
  return (
    <article className='Amenities'>
    <h1 className="headerTitle">Amenities</h1>
      <ul>
        <li>Air Conditioning</li>
        <li>Single and Double Rooms</li>
        <li>Lounges</li>
        <li>Study Spaces</li>
        <li>Wifi Internet Access</li>
        <li>Shared Kitchen Space</li>
        <li>Music Practice Room</li>
        <li>Laundry Facilities</li>
      </ul>
    </article>
  );
}

const Map = () => {
  return (
    <div className='Map'>
      <h1>Map Goes Here</h1>
    </div>
  );
}


export default MorrisonPage
