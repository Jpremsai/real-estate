import React, { useContext } from 'react'
import {HouseContext} from '../HouseContext'
import {SpinnerIcon} from '@chakra-ui/icons'
import House from './House'
import {Flex,useMediaQuery } from '@chakra-ui/react'

function List() {
 const {houses, loading } = useContext(HouseContext)
 const {smallScreen} = useMediaQuery('{min-width: 600px}')
 if(loading){
    return(
        <SpinnerIcon />
    )
 }
 if(houses.length < 1){
    return(
        <div>
            sorry, No results found
        </div>
    )
 }
  return (
    <>
    <Flex flexDirection={smallScreen ? 'column' : 'row'} flexWrap='wrap'>
        {houses.map((house,index)=>(
           <House house={house} key={index} />
        ))}
        </Flex>
    </>
  )
}

export default List