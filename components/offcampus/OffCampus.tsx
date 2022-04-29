import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
// import { Task, TaskWithId } from "../../types"
import { db } from "../../util/firebase"

const SearchHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    Off-Campus Options
  </Heading>
)

const taskQuery = query(collection(db, 'tasks'))

const OffCampus = () => {

  return (
    <VStack spacing={4}>
      <SearchHeading />
    </VStack>
  )
}

export default OffCampus
