import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import style from "./MainLayout.module.scss"




export const MainLayout = () => {
    return (
        <main className={style.layout}>
            <h1>Star Wars</h1>
            <Header/>
                <Outlet/>
            <Footer/>
        </main>
    )
}