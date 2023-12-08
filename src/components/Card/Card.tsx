import {
    ChakraProvider,
    Box
} from '@chakra-ui/react'

export const Card = ({ children }: any) => {

    return (
        <ChakraProvider>
            <Box
                backgroundColor='#FFFFFF'
                borderRadius='25px'
                padding='15px'
                width='max-content'
                height='max-content'
            >
                {children}
            </Box>
        </ChakraProvider>
    )
}