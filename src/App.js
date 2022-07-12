import { ChakraProvider,Box } from '@chakra-ui/react'
import Header from './components/header';
import SearchBar from './components/searchBar';
import List from './components/list';
import './App.css'

function App() {
  return (
    <div>
    <ChakraProvider>
      <Header/>
      <Box m='20' mt='3'>
        <SearchBar />
        <List />
      </Box>
    </ChakraProvider>
    </div>
  );
}

export default App;
