import { useContext } from 'react'
import './Header.css'
import { AppContext } from '../AppContext'
import { Button, Center, Flex, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }
    return (
        <>
                <header className='header'>
                    <h1 id='h1DioBankName'>Dio</h1>
                    <span id='spanDioBankName'>Bank</span>
                     {
                    isLoggedIn && (
                        <>
                        <Spacer />
                            <Button 
                                className='button_header'
                                onClick={() => logout()}
                                colorScheme='teal'
                            >
                                Sair
                            </Button>
                        
                        </>
                    )
                }
                </header>
        </>
    )
}