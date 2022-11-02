import Banner from "../components/Banner";
import CardsList from "../components/CardsList";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function Accueil() {
  return (
    <>
      <header className="header">
      <Logo/>
      <Navigation />
      </header>
      <Banner/>
      <CardsList/>
      <Footer/>
    </>
  );
}

export default Accueil;
