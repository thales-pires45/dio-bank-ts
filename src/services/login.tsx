// import { useContext } from "react"
// import { AppContext } from "../components/AppContext"
import { api } from "./api"
// import { useNavigate } from "react-router-dom"

export const login = async (email: string, password: string): Promise<boolean> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { setIsLoggedIn } = useContext(AppContext)
    // const navigate = useNavigate()
    const data: any = await api

    if (email !== data.email || password !== data.password) {
        return false
        //return alert(`O email ou senha digitado não é válido.`)
    }
    
    //setIsLoggedIn(true)
    //navigate(`/${data.id}`)
    // function welcomeAlert() {
    //    alert(`Olá! Seja muito bem vindo ${email}!`)
    // }
    // welcomeAlert()
    return true
}