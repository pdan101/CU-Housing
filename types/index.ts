export type Location = {
  id: string
  name: string
  region: string
  address: string
  img: string
  description: string
  amenities: string[]
}

export type Review = {
  id: string
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
