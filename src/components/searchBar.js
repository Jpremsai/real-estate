import React,{useContext, useState} from 'react'
import { Text,Flex, Input, Button, Collapse,FormControl,FormLabel,Select,Box,useMediaQuery } from '@chakra-ui/react'
import {ChevronDownIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {HouseContext} from '../HouseContext'

function SearchBar() {
    const [search, setSearch] = useState(false)
    const {smallScreen} = useMediaQuery('{min-width: 600px}')
    const {houses,handleClick ,price,setPrice, country,setCountry, countries, property, properties, setProperty} = useContext(HouseContext)
    const prices = [
      {
        value: 'Price range (any)',
      },
      {
        value: '100000 - 130000',
      },
      {
        value: '130000 - 160000',
      },
      {
        value: '160000 - 190000',
      },
      {
        value: '190000 - 220000',
      },
      {
        value: '20000 - 30000',
      },
      {
        value: '30000 - 40000',
      },
    ];
  return (
    <>
    <Flex flexDirection='column'>
    <Flex flexDirection={smallScreen ? 'column' : 'row'} flexWrap='wrap' justifyContent='space-between'>
      <Box>
        <Text fontSize='4xl' fontWeight='medium'>
            Search Properties to Rent
        </Text>
        </Box>
        <Box w='2xs'>
        <Button w='2xs' onClick={() => setSearch(!search)}>Search with search box {search ? <ChevronDownIcon/> : <ChevronRightIcon />}</Button>
        </Box>
        </Flex>
        <Collapse in={search} >
          <Flex justifyContent='space-evenly' pb='10' flexWrap='wrap' flexDirection={smallScreen ? 'column':'row'}>
              <FormControl>
              <FormLabel fontSize='smaller' color='gray.500'>Location</FormLabel>
                <Select w='3xs'>
                  {countries.map((country, index) => (
                    <option  onClick={() => setCountry(country)} key={index}>{country}</option>
                    ))}
                </Select>
                </FormControl>
            <FormControl>
              <FormLabel fontSize='smaller' color='gray.500'>Price range</FormLabel>
                <Select w='3xs' >
                  {prices.map((price, index) => (
                    <option onClick={() => setPrice(price.value)} key={index}>{price.value}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize='smaller' color='gray.500'>Property Type</FormLabel>
                <Select w='3xs'>
                  {properties.map((property, index) => (
                    <option onClick={() => setProperty(property)} key={index}>{property}</option>
                    ))}
                </Select>
                </FormControl>
            <Button ml='5' color='white' size='large' w='100%' bg='purple.400' onClick={() => handleClick()}>Save</Button>
            </Flex>
        </Collapse>
    </Flex>
    </>
  )
}

export default SearchBar
