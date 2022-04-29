import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, VStack, IconButton, Link, Text, Image } from "@chakra-ui/react"
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { Location } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly dorm: Location
}

const DormItem = ({ dorm: { id, name, region, address, img } }: Props) => {
  const link = `/${id}`
  return (
    <VStack w="100%">
      <Text
        fontSize = {'3xl'}
        noOfLines = {1}
        fontStyle = {'italic'}
        color = {'red.400'}
      >
        <Link 
        href={link}>{name + " : " + region} </Link>
      </Text>
      <Link href={link}>
      <Image 
        objectFit = {'cover'}
        borderRadius = {'md'}
        boxSize = {'80'}
        rounded = {'full'}
        src = {img}
      ></Image>
      </Link>
    </VStack>
  )
}

export default DormItem
