import { NavLink } from "react-router-dom"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import imageLogo from "../assets/LOGO.svg"
import logoFooter from "../assets/LOGO(1).svg"

function Error() {
    return(
    <>
    <div className="page-container">
    <div className="content-wrap">
        <div className="header">
      <Logo image={imageLogo}/>
      <Navigation />
      </div>
        <div className="error-container">
            <img src="./images/404.svg" alt="Erreur page inexistante"/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        
    <NavLink className="error-container-navlink" to="/">Retourner sur la page d'accueil</NavLink>
    </div>
        <Footer logo={logoFooter}/>
        </div>
        </>
        
    )
}

export default Error