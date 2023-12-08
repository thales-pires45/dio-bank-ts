import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom"
import CardInfo from "../components/Card/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AppContext } from "../components/AppContext";


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const actualData = new Date()
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)

    //É verdadeiro que meu isLoggedIn e falso, dai volta para pagina inicial
    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    //É verdadeiro meu usário, se não volta para pagina inicial
    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <>
            {userData === undefined || userData === null ?
                (
                    <Center>
                        <Spinner
                            size='xl'
                            color="white"
                        />
                    </Center>
                ) :
                (
                    <>
                        <Center>
                            <SimpleGrid
                                columns={2}
                                spacing={4}
                                padding='1rem'
                                paddingTop={16}
                            >
                                <CardInfo
                                    mainContent={`Bem vindo ${userData?.name}`}
                                    content={`
                                        ${actualData.getDay()}/
                                        ${actualData.getMonth()}/
                                        ${actualData.getFullYear()} 
                                        ${actualData.getHours()}:
                                        ${actualData.getMinutes()}
                                        `}
                                />
                                <CardInfo
                                    mainContent='Saldo'
                                    content={`R$ ${userData?.balance}`}
                                />
                            </SimpleGrid>
                        </Center>
                        <Center>
                            <Link to={`/infoconta/${userData.id}`}>
                                <Button
                                    textAlign='center'
                                    colorScheme='teal'
                                    size='sm'
                                    width='100%'
                                    marginTop='15px'
                                    id='getButton'
                                >
                                    Informações da conta
                                </Button>
                            </Link>
                        </Center>
                    </>
                )
            }

        </>
    )
}

export default Conta;