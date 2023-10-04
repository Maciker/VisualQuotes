import {ChakraProvider, Container, Heading} from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>
        <Container mt={10}>
            <Heading>Visual Quotes</Heading>
        </Container>
    </ChakraProvider>
  )
}

export default App
