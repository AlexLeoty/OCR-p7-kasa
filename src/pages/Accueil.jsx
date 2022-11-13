import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import  "../styles/settings.css"
import Card from "../components/Card";
import annonces from "../Data/annonces.json"
import { Link } from "react-router-dom";
import imageLogo from "../assets/LOGO.svg"
import logoFooter from "../assets/LOGO(1).svg"



function Accueil() {
  return (
    <>
    <div>
      <header className="header">
      <Logo image={imageLogo}/>
      <Navigation />
      </header>
      <Banner>
      <div className="banner-container-background">
      
            </div>
            <h1 className="banner-container-title">Chez vous, partout et ailleurs</h1>
        </Banner>
      <section className="background">
        {annonces.map((annonce) => {
          return(
            <Link  key={annonce.id} to={`/annonces/${annonce.id}`}>
          <Card picture={annonce.cover} title={annonce.title}/>
          </Link>
          )
        })}
        
      </section>
      </div>
      <Footer logo={logoFooter}/>
      
    </>
  );
}

export default Accueil;
