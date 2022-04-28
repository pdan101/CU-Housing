import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Task, TaskWithId } from "../../types"
import { db } from "../../util/firebase"
import Dorms from "./Dorms"

const OnCampusHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    On-Campus Options
  </Heading>
)

const taskQuery = query(collection(db, 'tasks'))

const OnCampus = () => {
  // const [tasks, setTasks] = useState<TaskWithId[] | null>(null)

  // // Subscribes to `taskQuery`
  // // We define a function to run whenever the query result changes
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
  //     const taskList: TaskWithId[] = querySnapshot.docs.map(doc => {
  //       const task: TaskWithId = { ...(doc.data() as Task), id: doc.id }
  //       return task
  //     })
  //     setTasks(taskList)
  //   })
  //   return unsubscribe
  // }, [])

  return (
    <VStack spacing={4}>
      <OnCampusHeading />
    </VStack>
  )
}

export default OnCampus
