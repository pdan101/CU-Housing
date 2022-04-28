import { Button, Heading, HStack, Input, Spinner, VStack } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { Location } from "../../types"
import { db } from "../../util/firebase"
import LocationList from "./LocationList"

const locationList : Location[] = [
  {
    id: "1",
    name: "Toni Morrison Hall",
    region: "North Campus",
    address: "Cornell University, 18 Sisson Pl, Ithaca, NY 14850"
  }
]

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

  const searchLocation = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const locations = locationList.filter(x => input.length && (x.name.toLowerCase().includes(input.toLowerCase()) || x.region.toLowerCase().includes(input.toLowerCase())))

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
