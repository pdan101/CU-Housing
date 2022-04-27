import { Button, HStack, Input } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { Task } from "../../types"
import { db } from "../../util/firebase"

const TaskAddControl = () => {
  const [input, setInput] = useState("")

  const addTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (input === "") return

    const task: Task = {
      text: input,
      checked: false,
    }
    const taskRef = collection(db, "tasks")
    addDoc(taskRef, task)

    setInput("")
  }

  return (
    <form onSubmit={addTask}>
      <HStack shouldWrapChildren>
        <Input
          value={input}
          type="text"
          placeholder="Toni Morrison Hall..."
          onChange={(e) => setInput(e.target.value)}
        />
      </HStack>
    </form>
  )
}

export default TaskAddControl
