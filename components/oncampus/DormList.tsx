import { Text, VStack } from "@chakra-ui/react"
import { Location } from "../../types"
import DormItem from "./DormItem"

type Props = {
  readonly dorms: Location[]
}

const DormList = ({ dorms }: Props) => {
  return (
    <VStack>
      {dorms.length ? (
        dorms.map((dorm) => <DormItem key={dorm.id} dorm={dorm} />)
      ) : (
        <Text>No results matched the search.</Text>
      )}
    </VStack>
  )
}

export default DormList
