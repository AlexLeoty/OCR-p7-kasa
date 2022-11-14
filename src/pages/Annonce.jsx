import Navigation from "../components/Navigation"
import Logo from "../components/Logo"
import Tag from "../components/Tag"
import {  redirect , useParams } from "react-router-dom"
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
import SlideShow from "../components/SlideShow"






function Annonce() {
const { annonceId } = useParams();
const annonce = annonces.find((annonce) => annonce.id === annonceId);

const { title, location, host, description, equipments, rating, pictures} = annonce;


    return annonce ?  (
      <>
      <div className="page-container">
      <div className="content-wrap" >
    <header className="header">
    <Logo image={imageLogo}/>
    <Navigation />
    </header>

    <main>
  
      <SlideShow pictures={pictures}/>
    <div className="annonce-container" >
    <section className="annonce-container-section1">
      <header>  
      <h1>{title}</h1>
      <h3 >{location}</h3>
      </header>

      <article>
        {annonce.tags.map((tag,index) => (
          <Tag key={index} name={tag}/>
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
    </div>
    <Footer logo={logoFooter}/>
    </div>
    </>
  ) : (
    redirect('/404')
  )

  }


export default Annonce