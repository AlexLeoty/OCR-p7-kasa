import Banner from "../components/Banner";
import CardsList from "../components/CardsList";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation"

function Accueil() {
  return (
    <>
      <div className="header">
      <Logo/>
      <Navigation />
      </div>
      <Banner/>
      <CardsList/>
    </>
  );
}

export default Accueil;
