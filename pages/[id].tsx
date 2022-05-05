import Layout from "../components/layout/Layout"
import { Location, LocationWithoutID, Review, ReviewWithoutID } from "../types/index"
import { Checkbox, HStack, IconButton, Link, Text } from "@chakra-ui/react"
import ReviewForm from "../components/review/reviewForm"
import Info from "../components/oncampus/Info"
import { db } from "../util/firebase"
import { collection, FieldPath, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

type Props = {
    locationData: Location
}

export default function Dorm({ locationData } : Props) {
    const [reviews, setReviews] = useState<Review[] | null>(null)
    async function getReviews(){
        const reviewQuery = query(collection(db, 'reviews'), where("locationID", "==", locationData.id))
        const querySnapshot = await getDocs(reviewQuery)
        const relevantReviews : Review[] = querySnapshot.docs.map(doc => {
            const review : Review = {...(doc.data() as ReviewWithoutID), id: doc.id}
            return review
        })
        setReviews(relevantReviews)
    }

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <Layout title={locationData.name}>
            <Info dorm={locationData} reviews={reviews ? reviews : []}></Info>
            <ReviewForm></ReviewForm>
        </Layout>
    )
}

export async function getStaticPaths() {
    const locationQuery = query(collection(db, 'locations'))
    const querySnapshot = await getDocs(locationQuery)
    const paths = querySnapshot.docs.map(doc => {
        return {
            params: {
                id: doc.id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(e: { params: { id: string } }){
    const locationQuery = query(collection(db, 'locations'))
    const querySnapshot = await getDocs(locationQuery)
    const locationData : Location[] = querySnapshot.docs.filter(doc => doc.id === e.params.id).map(doc => {
        const location : Location = {...(doc.data() as LocationWithoutID), id: doc.id}
        return location
    })
    return {
        props: {
            locationData: locationData[0]
        }
    }
}