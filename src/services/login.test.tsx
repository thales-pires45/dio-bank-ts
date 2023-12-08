import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual( 'react' ),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual( 'react-router-dom' ) as any,
//     useNavigate:() => mockNavigate
// }))

describe('Cliente irá fazer o login utilizando o email e senha', () => {

    // const mockAlert = jest.fn()
    // window.alert = mockAlert

    const mockEmail = 'thales@dio.me'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas ao usuário caso o email seja valído', async() => {
        const response = await login(mockEmail, mockPassword )
        expect(response).toBeTruthy()
        //expect(response).toHaveBeenCalledWith(true)
        //expect(mockAlert).toHaveBeenCalledWith(`Olá! Seja muito bem vindo ${mockEmail}!`)
        //expect(mockNavigate).toHaveBeenCalledWith(`/1`)
    })

    // it('Não deve exibir a a mensagem sem o email', async() => {
    //     await login(mockEmail)
    //     expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
    //     expect(mockAlert).not.toHaveBeenCalledWith('Olá! Seja muito bem vindo!')
    // })

    it('Deve exibir um erro caso o email seja invalido', async() => {
        const response = await login('email@invalido.com', 'senhainvalida1234')
        expect(response).toBeFalsy()
        //expect(mockAlert).toHaveBeenCalledWith('O email digitado não é válido.')
        //expect(mockNavigate).not.toHaveBeenCalled()
    })
})