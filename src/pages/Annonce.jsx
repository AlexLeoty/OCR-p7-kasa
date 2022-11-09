import Navigation from "../components/Navigation"
import Logo from "../components/Logo"
import Tag from "../components/Tag"
import { useParams } from "react-router-dom"
import annonces from "../Data/annonces.json"
import "../styles/settings.css"
import Footer from "../components/Footer"
import DropDownAnnonce from "../components/DropdownAnnonce"
import DropDownEquipments from "../components/DropdownEquipment"
import Rating from "../components/Rating"
import imageLogo from "../assets/LOGO.svg"
import buttonClosed from "../assets/logoClosed.svg"
import buttonOpen from "../assets/logoOpen.svg"
import logoFooter from "../assets/LOGO(1).svg"



function Annonce() {
const { annonceId } = useParams();
const annonce = annonces.find((annonce) => annonce.id === annonceId);
const { title, location, host, cover, description, equipments, rating} = annonce;
    return(
        <>
      <header className="header">
      <Logo image={imageLogo}/>
      <Navigation />
      </header>

      <main>
      <img src={cover} className="annonce-pictures" alt="" />
      
      <div className="annonce-container" >
      <section className="annonce-container-section1">
        <header>  
        <h1>{title}</h1>
        <h3 >{location}</h3>
        </header>

        <article>
          {annonce.tags.map((tag) => (
            <Tag name={tag}/>
          ))}
        </article>
      </section>
      
      

      <section className="annonce-container-section2">
        <article>
        <Rating rating={rating}/>
        </article>
        <div className="annonce-container-section2-profil">
        <h3>{host.name}</h3>
        <img className="annonce-host-pic"  src={host.picture} alt="" />
        </div>
      </section>
      </div>
     
      <section className="dropdown-annonce">
          <DropDownAnnonce buttonClosed={buttonClosed} buttonOpen={buttonOpen} description={description}/>
          <DropDownEquipments buttonClosed={buttonClosed} buttonOpen={buttonOpen} equipments={equipments}/>
      </section>
           
      </main>
      <Footer logo={logoFooter}/>
      
      </>
    )
}

export default Annonce