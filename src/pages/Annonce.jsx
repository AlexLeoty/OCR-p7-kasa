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
      <img src={cover} style={{width: "-webkit-fill-available", margin:"auto", height:"400px" , borderRadius:"20px"}} alt="" />
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <header>  
      <h1>{title}</h1>
      <h2>{location}</h2>
      </header>
      <aside style={{display:"flex", alignItems:"center"}}>
      <h3>{host.name}</h3>
      <img  style={{borderRadius:"50%"}} src={host.picture} alt="" />
      </aside>
      </div>
      <article style={{display: "flex", justifyContent:"space-between"}}>
      <section>
        {annonce.tags.map((tag) => (
          <Tag name={tag}/>
        ))}
      </section>
      <section>
        
        <Rating rating={rating}/>
        
        </section>
   
      </article>
      
      <div style={{display:"flex"}}>
          <DropDownAnnonce buttonClosed={buttonClosed} buttonOpen={buttonOpen} description={description}/>
          <DropDownEquipments buttonClosed={buttonClosed} buttonOpen={buttonOpen} equipments={equipments}/>
      </div>
           
      </main>
      <Footer logo={logoFooter}/>
      
      </>
    )
}

export default Annonce