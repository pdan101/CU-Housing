import { Heading, HStack, Spinner, StackDivider, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../util/firebase"
import locationList from "../../locationList"
import DormList from "./DormList"

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
  const dorms = locationList.filter((x) => {
    return ['North Campus', 'West Campus', 'Collegetown'].includes(x.region)
  })
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
        <DormList dorms={dorms} /> 
      </HStack>
    </VStack>
  )
}

export default OnCampus
