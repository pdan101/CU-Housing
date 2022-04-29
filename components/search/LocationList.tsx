import { Text, VStack } from "@chakra-ui/react"
import { Location } from "../../types"
import LocationItem from "./LocationItem"

type Props = {
  readonly locations: Location[]
}

const LocationList = ({ locations }: Props) => {
  return (
    <VStack>
      {locations.length ? (
        locations.map((location) => <LocationItem key={location.id} location={location} />)
      ) : (
        <Text>No results matched the search.</Text>
      )}
    </VStack>
  )
}

export default LocationList
