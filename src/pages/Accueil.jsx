import Banner from "../components/Banner";
import CardsList from "../components/CardsList";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import  "../styles/settings.css"

function Accueil() {
  return (
    <>
      <header className="header">
      <Logo/>
      <Navigation />
      </header>
      <Banner>
      <div className="banner-container-background">
            </div>
            <h1 className="banner-container-title">Chez vous, partout et ailleurs</h1>
        </Banner>
      <CardsList/>
      <Footer/>
    </>
  );
}

export default Accueil;
