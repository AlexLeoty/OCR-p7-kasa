import Banner from "../components/Banner"
import DropDown from "../components/Dropdown"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import  "../styles/settings.css"
import about from "../Data/about.json"
import imageLogo from "../assets/LOGO.svg"
import buttonClosed from "../assets/logoClosed.svg"
import buttonOpen from "../assets/logoOpen.svg"
import logoFooter from "../assets/LOGO(1).svg"



function About() {
return (
<> 
    <header className="header">
      <Logo image={imageLogo}/>
      <Navigation />
      </header>
        <Banner>
        <div className="banner-container-backgroundAbout "></div>
          </Banner>

          {about.map((data) => (
                   <DropDown buttonClosed={buttonClosed} buttonOpen={buttonOpen} title={data.title} description={data.description} />
          ))}
   
      
        <Footer logo={logoFooter}/>
    </>
)
    
}

export default About