import { Button, Input, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerContent, useDisclosure, DrawerCloseButton, DrawerOverlay } from '@chakra-ui/react'
import React from 'react'
import ReviewForm from './reviewForm'


type Props = {
    locationID: string
  }

function ReviewDrawer( {locationID} : Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button className="reviewButton" colorScheme='teal' onClick={onOpen}>
          Write a Review
        </Button>
        <Drawer
          size="sm"
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Write a Review</DrawerHeader>
  
            <DrawerBody>
              <ReviewForm locationID={locationID}></ReviewForm>
            </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default ReviewDrawer