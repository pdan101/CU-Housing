import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { Location } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly location: Location
}

const LocationItem = ({ location: { id, name, region } }: Props) => {

  return (
    <HStack w="100%">
      <Text>
        {name} - {region}
      </Text>
    </HStack>
  )
}

export default LocationItem
