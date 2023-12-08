import { Box, Button, Center, Input } from '@chakra-ui/react';
import { Card } from '../components/Card/Card';
import { useContext, useState } from 'react';
import { login } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)


        if (!loggedIn) {
            return alert('E-mail ou Senha Inválido!')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }

    return (
        <>
            <Box
                minHeight='35vh'
                backgroundColor='#9413dc'
                padding='25px'
                display='flex'
                justifyContent='center'
                margin='0'
            >
                <Card>
                    <Center padding='10px' margin='0px'>
                        <h1>Faça o login </h1>
                    </Center>
                    <Input placeholder="email" type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Input placeholder="password" type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <Center>
                        <Button
                            textAlign='center'
                            // onClick={() => login(email)}
                            onClick={() => validateUser(email, password)}
                            colorScheme='teal'
                            size='sm'
                            width='100%'
                            marginTop='5px'
                            id='getButton'
                        >
                            Login
                        </Button>
                    </Center>
                </Card>
            </Box>
        </>
    )
}

export default Home;