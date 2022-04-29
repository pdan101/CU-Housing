import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../util/firebase"

const SearchHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    Available Sublets & Leases
  </Heading>
)

const taskQuery = query(collection(db, 'tasks'))

const SubletsLeases = () => {
  return (
    <VStack spacing={4}>
      <SearchHeading />
    </VStack>
  )
}

export default SubletsLeases
