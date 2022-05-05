import { Button, Heading, HStack, Input, Spinner, VStack } from "@chakra-ui/react"
import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { Dispatch, FormEventHandler, SetStateAction, useEffect, useState } from "react"
import { Location, LocationWithoutID } from "../../types"
import { db } from "../../util/firebase"
import LocationList from "./LocationList"



const SearchHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    Housing Search
  </Heading>
)

const Search = () => {
  const [input, setInput] = useState("")
  const [locations, setLocations] = useState<Location[] | null>(null)

  const searchLocation = (e: { target: { value: string } }) => {
    setInput(e.target.value)
    retrieveLocations()
  }
  async function retrieveLocations() {
    const locationQuery = query(collection(db, 'locations'))
    const querySnapshot = await getDocs(locationQuery)
    const locationList : Location[] = querySnapshot.docs.map(doc => {
      const location: Location = {...(doc.data() as LocationWithoutID), id: doc.id}
      return location
    }) 
    console.log(locationList)
    setLocations(locationList.filter(x => input.length && (x.name.toLowerCase().includes(input.toLowerCase()) || x.region.toLowerCase().includes(input.toLowerCase()))))
  } 

  useEffect(() => {
    retrieveLocations()
  }, [])

  return (
    <VStack spacing={4}>
      <SearchHeading />
      <Input
        value={input}
        type="text"
        placeholder="Toni Morrison Hall..."
        onChange={searchLocation}
      />
      {locations ? <LocationList locations={locations} /> : <Spinner />}
    </VStack>
      
  )
}

export default Search
