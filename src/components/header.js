import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button,Flex,Box, Menu, ButtonGroup, Stack, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <>
      <Flex justifyContent='space-between'>
      <Stack direction='row' spacing='3' mt='4'>
        <Box pl='5' fontSize='xl' fontWeight='bold' >
          Estatery
        </Box>
          <ButtonGroup spacing={4}>
          <Button size='sm' _hover={{bg: 'purple.200', color: 'purple.400'}}>
            Rent
          </Button>
          <Button  size='sm' _hover={{bg: 'purple.200', color: 'purple.400'}} >
            sell
          </Button>
          <Button size='sm' _hover={{bg: 'purple.200', color: 'purple.400'}} >
            Buy
          </Button>
        </ButtonGroup>
          <Menu>
            <MenuButton as={Button} size='sm'>Manage Property {<ChevronDownIcon />}</MenuButton>
            <MenuList>
              <MenuItem>Commercial</MenuItem>
              <MenuItem>Residential</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} size='sm'>Resources{<ChevronDownIcon />}</MenuButton>
            <MenuList>
              <MenuItem>Career</MenuItem>
              <MenuItem>Property Estimate</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Box p='3'>
          <Button size='md' color='purple.400' mr='5'>
            Login
          </Button>
          <Button size='md' color='white' bg='purple.400'>
            Signup
          </Button>
        </Box>
      </Flex>
    </>
  )
}

export default Header