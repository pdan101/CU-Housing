import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Task, TaskWithId } from "../../types"
import { db } from "../../util/firebase"
import TaskAddControl from "./TaskAddControl"
import TaskList from "./TaskList"

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

const taskQuery = query(collection(db, 'tasks'))

const Search = () => {
  const [tasks, setTasks] = useState<TaskWithId[] | null>(null)

  // Subscribes to `taskQuery`
  // We define a function to run whenever the query result changes
  useEffect(() => {
    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      const taskList : TaskWithId[] = querySnapshot.docs.map(doc => {
        const task : TaskWithId = {...(doc.data() as Task), id: doc.id}
        return task
      })
      setTasks(taskList)
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      <SearchHeading />
      <TaskAddControl />
      {tasks ? <TaskList tasks={tasks} /> : <Spinner />}
    </VStack>
  )
}

export default Search
