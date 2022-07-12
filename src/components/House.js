import React from 'react'
import {Box,Badge} from '@chakra-ui/react'

function House({house}) {
  return (
    <Box w='300px' borderWidth='1px' borderRadius='lg' overflow='hidden' m='5'>
      <img src={house.image} alt = 'houseimage' />
      <Box p='6'>
        <Box display='flex' alignItems='baseline' flexDirection='column'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Popular
          </Badge>
          <Box>
          $ {house.price}
          <Box as='span' color='purple.400' fontSize='sm'>
            /month
          </Box>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {house.title}
        </Box>
        <Box>
            {house.address}
        </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {house.bedrooms} beds {house.bathrooms} baths {house.surface}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default House