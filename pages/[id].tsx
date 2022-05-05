import Layout from "../components/layout/Layout"
import locationList from "../locationList"
import reviewList from "../reviewList"
import { Location, Review } from "../types/index"
import { Checkbox, HStack, IconButton, Link, Text } from "@chakra-ui/react"
import ReviewForm from "./reviewForm"
import Info from "../components/oncampus/Info"


type Props = {
    locationData: Location
}

export default function Dorm({ locationData } : Props) {
    const relevantReviews : Review[] = reviewList.filter(x => x.locationID === locationData.id)
    return (
        <Layout title={locationData.name}>
            <Info dorm={locationData} reviews={relevantReviews}></Info>
            <ReviewForm></ReviewForm>
        </Layout>
    )
}

export function getStaticPaths() {
    const paths = locationList.map(x => {
        return {
            params: {
                id: x.id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export function getStaticProps(e: { params: { id: string } }){
    const locationData = locationList.filter(x => x.id === e.params.id)
    return {
        props: {
            locationData: locationData[0]
        }
    }
}