import {ChakraProvider, Heading} from "@chakra-ui/react";

const App = () => {
    return (
        <ChakraProvider>
            <Heading as={h1}>Visual Quotes</Heading>
        </ChakraProvider>
    )
}