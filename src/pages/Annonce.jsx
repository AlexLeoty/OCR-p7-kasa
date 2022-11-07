import Navigation from "../components/Navigation"
import Logo from "../components/Logo"
import Tag from "../components/Tag"
import { useParams } from "react-router-dom"
import annonces from "../Data/annonces.json"
import "../styles/settings.css"


function Annonce() {
const { annonceId } = useParams();
const annonce = annonces.find((annonce) => annonce.id === annonceId);
const { title, description, location, host, cover} = annonce;
    return(
        <>
        <header className="header">
      <Logo/>
      <Navigation />
      </header>
      <img src={cover} style={{width: "80vw"}} alt="" />
      <h1>{title}</h1>
      <h2>{location}</h2>
      <h3>{host.name}</h3>
      <img src={host.picture} alt="" />
      <Tag/>
      <p>{description}</p>
      
      
      </>
    )
}

export default Annonce