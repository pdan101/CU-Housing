import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Link, Text, Image } from "@chakra-ui/react"
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { Location } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly dorm: Location
}

const DormItem = ({ dorm: { id, name, region, address, img } }: Props) => {
  const link = `/${id}`
  console.log(link)
  return (
    <HStack w="100%">
      <Text>
        <Link href={link}>{name} - {region}</Link>
      </Text>
      <Text>
        {address}
      </Text>
      <Link href={link}>
      <Image 
        src={img}
      ></Image>
      </Link>
      
    </HStack>
  )
}

export default DormItem
