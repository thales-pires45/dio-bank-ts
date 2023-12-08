import { Button, Center, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../services/api";
import CardInfo from "../components/Card/CardInfo";

interface UserData {
    email: string
    password: string
    name: string
    id: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()
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
                            <CardInfo
                                mainContent={`Nome: ${userData?.name}`}
                                content={`Email: ${userData?.email}`}
                            />
                        </Center>
                        <Center>
                            <Link to='/conta/1'>
                                <Button
                                    textAlign='center'
                                    // onClick={() => login(email)}
                                    colorScheme='teal'
                                    size='sm'
                                    width='100%'
                                    marginTop='15px'
                                    id='getButton'
                                >
                                    Conta
                                </Button>
                            </Link>
                        </Center>
                    </>
                )
            }
        </>
    )
}

export default ContaInfo;