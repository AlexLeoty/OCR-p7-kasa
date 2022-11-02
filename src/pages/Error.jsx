import { NavLink } from "react-router-dom"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function Error() {
    return(<>
        <div className="header">
      <Logo/>
      <Navigation />
      </div>
        <div className="error-container">
            <img src="./images/404.svg" alt="Erreur page inexistante"/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <NavLink className="error-container-navlink" to="/">Retourner sur la page d'accueil</NavLink>
        <Footer/>
        </>
        
    )
}

export default Error