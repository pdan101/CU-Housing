import {FormControl, FormLabel, RadioGroup, HStack, Radio, Button, 
        FormErrorMessage, FormHelperText, Input} from '@chakra-ui/react'
import React, { useState, FormEventHandler } from 'react'
import { Location } from "../../types/index"
import { db } from "../../util/firebase"
import { stringify } from 'querystring'
import { addDoc, collection } from 'firebase/firestore'
import { Rating } from 'react-simple-star-rating'

type Props = {
  locationID: string
}

function ReviewForm({locationID} : Props) {
  const [author, setAuthor] = useState("")
  const [email, setEmail] = useState("")
  const [pros, setPros] = useState("")
  const [cons, setCons] = useState("")
  const [text, setText] = useState("")
  const [rec, setRec] = useState(true)
  const [rating, setRating] = useState(0)
  const [contact, setContact] = useState(false)

  const handleRating = (rate: number) => {
    setRating(rate/100 * 5)
  }

  const saveAnswer:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    //Add the task to Firebase
    const review = {
      author:author,
      email:email,
      cons:cons.split(','),
      pros:pros.split(','),
      text: text,
      recommend:rec,
      rating:rating,
      locationID:locationID,
      okToContact:contact
    }

    const reviewsRef = collection(db, "reviews")
    addDoc(reviewsRef, review)
    
    //Clear current input field
    setAuthor("")
    setEmail("")
    setCons("")
    setPros("")
    setText("")
    setContact(false)
  }

  return (
    <form onSubmit={saveAnswer}>
  <FormControl>
    <FormLabel htmlFor='name'>Name</FormLabel>
    <Input id='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
    <FormLabel htmlFor='email'>Email address</FormLabel>
    <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <FormLabel htmlFor='rating'>Rating</FormLabel>
    <Rating
        className="stars"
        onClick={handleRating}
        ratingValue={rating}
        showTooltip
        tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Perfect']}/>
    <FormLabel htmlFor='pros'>Would you recommend this place?</FormLabel>
    <RadioGroup>
      <HStack spacing='24px'>
        <Radio value="true" onChange={(e) => setRec(true)}>Yes</Radio>
        <Radio value="false" onChange={(e) => setRec(false)}>No</Radio>
      </HStack>
    </RadioGroup>
    <FormLabel htmlFor='pros'>Are you willing to be contacted?</FormLabel>
    <RadioGroup>
      <HStack spacing='24px'>
        <Radio value="true" onChange={(e) => setContact(true)}>Yes</Radio>
        <Radio value="false" onChange={(e) => setContact(false)}>No</Radio>
      </HStack>
    </RadioGroup>
    <FormLabel htmlFor='pros'>Pros (Separate by commas)</FormLabel>
    <Input id='pros' value={pros} onChange={(e) => setPros(e.target.value)}/>
    <FormLabel htmlFor='cons'>Cons (Separate by commas)</FormLabel>
    <Input id='cons' value={cons} onChange={(e) => setCons(e.target.value)}/>
    <FormLabel htmlFor='pros'>Write a Review</FormLabel>
    <Input id='comments' value={text} onChange={(e) => setText(e.target.value)}/>
    <Button mt={4} colorScheme='teal' type='submit'>Submit</Button>
</FormControl>
</form>
  );
}

export default ReviewForm