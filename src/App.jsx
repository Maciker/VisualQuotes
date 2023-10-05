import {
    ChakraProvider,
    Container,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Grid,
    Image,
    GridItem
} from "@chakra-ui/react";
import {useState} from "react";

function App() {
    const [quotes, setQuotes] = useState([
        {
            "id": 1,
            "quote": "Knowledge is Power",
            "author": "Francis Bacon",
            "visual": "https://cdn.midjourney.com/6cf63138-02f2-4b6f-b682-38ab2e52dac0/0_2.webp",
            "prompt": "knowledge is power, in minimalist style"
        },
        {
            "id": 2,
            "quote": "Unax talking with the moon",
            "author": "Francis Bacon",
            "visual": "https://cdn.midjourney.com/69bd4e55-6fa9-48e6-81d9-cc1525feada5/0_0.webp",
            "prompt": "a two years blonde kid, with short hair, talking with the moon"
        },
    ])


  return (
    <ChakraProvider>
        <Container mt={10} centerContent>
            <Heading>Visual Quotes</Heading>
        </Container>
            <Grid templateColumns='repeat(3, 1fr)' gap={25}>
                {quotes.map(quote => {
                    return (
                        <GridItem w='100%' h='100%' key={quote.id}>
                            <Card key={quote.id} w='100%' h='100%'>
                                <CardHeader>
                                    <Heading size='md'>{quote.quote}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Image
                                        src={quote.visual}
                                        alt={quote.quote}
                                        borderRadius='lg'
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Heading size='xs'>{quote.prompt}</Heading>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    )}
                )}
            </Grid>
    </ChakraProvider>
  )
}

export default App
