import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"

const IndexPage = () => (
  <Layout title="Home">
    <Heading my="4">
      My Trends A4 Project
    </Heading>
    <Text fontSize="md" my="3">
      CU Housing was created to aid Cornell students in their search for on and off-campus housing.
    </Text>
  </Layout>
)

export default IndexPage
