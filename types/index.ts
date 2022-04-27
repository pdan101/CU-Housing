export type Task = {
  text: string
  checked: boolean
}

export type TaskWithId = Task & {
  id: string
}
