import { Box, Text } from "@chakra-ui/react";

interface IcardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({ mainContent, content }: IcardInfo) => {
    return (
        <>
            <Box
                backgroundColor='white'
                minHeight='120px'
                padding='0.5rem'
                borderRadius="25px"
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    {mainContent}
                </Text>
                <Text
                    fontSize='xl'
                >
                    {content}
                </Text>
            </Box>
        </>
    )
}

export default CardInfo;