import React,{useContext, useState} from 'react'
import { Text,Flex,Button, Collapse,FormControl,Select,FormLabel,Menu,MenuButton,MenuItem,MenuList,Box,useMediaQuery } from '@chakra-ui/react'
import {ChevronDownIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {HouseContext} from '../HouseContext'

function SearchBar() {
    const [search, setSearch] = useState(false)
    const {smallScreen} = useMediaQuery('{min-width: 600px}')
    const {handleClick ,setPrice, setCountry, countries, properties, setProperty} = useContext(HouseContext)
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
          <Flex justifyContent='space-evenly' pt='20' flexWrap='wrap' flexDirection={smallScreen ? 'column':'row'}>
            
                <Menu>
                  <MenuButton>Location{<ChevronDownIcon />}</MenuButton>
                  <MenuList>
                  {countries.map((country, index) => (
                    <MenuItem  onClick={() => setCountry(country)} value={country} key={index}>{country}</MenuItem>
                    ))}
                    </MenuList>
                </Menu>
             
                <Menu>
                  <MenuButton>price {<ChevronDownIcon />}</MenuButton>
                  <MenuList>
                  {prices.map((price, index) => (
                    <MenuItem onClick={() => setPrice(price.value)} value={price.value} key={index}>{price.value}</MenuItem>
                    ))}
                    </MenuList>
                </Menu>
             
                <Menu>
                  <MenuButton>property type {<ChevronDownIcon />} </MenuButton>
                  <MenuList>
                  {properties.map((property, index) => (
                    <MenuItem onClick={() => setProperty(property)} value={property} key={index}>{property}</MenuItem>
                    ))}
                </MenuList>
                </Menu>
                <Button m='5' color='white' size='large' w='100%' bg='purple.400' onClick={() => handleClick()}>Save</Button>
            </Flex>
        </Collapse>
    </Flex>
    </>
  )
}

export default SearchBar
