export type LocationWithoutID = {
  name: string
  region: string
  address: string
  img: string
  description: string
  amenities: string[]
  long: number
  lat: number
}

export type Location = LocationWithoutID & {
  id: string
}

export type ReviewWithoutID = {
  date: string
  locationID: string
  author: string
  recommend: boolean
  pros: string[]
  cons: string[]
  rating: number
  text: string
  okToContact: boolean
  email: string
}

export type Review = ReviewWithoutID & {
  id: string
}
