import { dataAttr } from '@chakra-ui/utils'
import {StarIcon} from '@chakra-ui/icons'
import React from 'react'
import Layout from '../layout/Layout'
import { Location, Review } from '../../types'
import ReviewsList from './ReviewList'

type Props = {
    readonly dorm: Location
    readonly reviews: Review[]
  }


function MainPage ({dorm, reviews} : Props) {
  return (
      <ReviewsList dorm={dorm} reviews={reviews}></ReviewsList>
  );
}



export default MainPage
