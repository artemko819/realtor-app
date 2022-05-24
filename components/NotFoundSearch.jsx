import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
export const NotFoundSearch = (properties) => {
  return (
    <>
    {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} alt="not found" />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </>
  )
}
