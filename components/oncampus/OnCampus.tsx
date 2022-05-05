import { Heading, HStack, Spinner, StackDivider, VStack } from "@chakra-ui/react"
import { collection, getDocs, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../util/firebase"
import locationList from "../../locationList"
import DormList from "./DormList"
import { getHeapCodeStatistics } from "v8"
import { LocationWithoutID, Location } from "../../types"

const OnCampusHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={2}
  >
    On-Campus Options
  </Heading>
)


const OnCampus = () => {
  const [dorms, setDorms] = useState<Location[] | null>(null)
  async function retrieveCampus(){
    const locationQuery = query(collection(db, 'locations'))
    const querySnapshot = await getDocs(locationQuery)

    const dorms2 = querySnapshot.docs.map(doc => {
      const dorm : Location = {...(doc.data() as LocationWithoutID), id: doc.id}
      return dorm
    }).filter((x) => {
      return ['North Campus', 'West Campus', 'Collegetown'].includes(x.region)
    })
    setDorms(dorms2)
  }

  useEffect(() => {
    retrieveCampus()
  }, [])

  return (
    <VStack 
      spacing={4}
      align = {'center'}
      justify = {'space-around'}
      >
      <OnCampusHeading />
      <HStack
        justify = {'space-around'}
        align = {'center'}
        >
        <DormList dorms={dorms ? dorms : []} /> 
      </HStack>
    </VStack>
  )
}

export default OnCampus
