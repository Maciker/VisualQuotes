import {Box, ChakraProvider, Container, Heading, ListItem, UnorderedList} from "@chakra-ui/react";
import {useState} from "react";
import { Image } from '@chakra-ui/react'

function App() {
    const [quotes, setQuotes] = useState([
        {
            "id": 1,
            "quote": "Knowledge is Power",
            "author": "Francis Bacon",
            "visual": "https://cdn.midjourney.com/6cf63138-02f2-4b6f-b682-38ab2e52dac0/0_2.webp",
            "prompt": "knowledge is power, in minimalist style"
        }
    ])


  return (
    <ChakraProvider>
        <Container mt={10}>
            <Heading>Visual Quotes</Heading>
            <UnorderedList>
                {quotes.map(quote => {
                    return (
                        <Box key={quote.id}>
                            <ListItem key={quote.id}>{quote.quote}</ListItem>
                            <ListItem key={quote.id}>{quote.prompt}</ListItem>
                            <Box boxSize='sm'>
                                <Image src={quote.visual} alt={quote.quote} />
                            </Box>
                        </Box>
                    )}
                )}
            </UnorderedList>
        </Container>
    </ChakraProvider>
  )
}

export default App
