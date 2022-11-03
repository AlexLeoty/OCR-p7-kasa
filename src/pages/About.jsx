import Banner from "../components/Banner"
import DropDown from "../components/Dropdown"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import  "../styles/settings.css"


function About() {
return (
<> 
<div className="header">
      <Logo/>
      <Navigation />
      </div>
        <Banner>
        <div className="banner-container-backgroundAbout "></div>
          </Banner>
        <DropDown/>
        <DropDown/>
        <DropDown/>
        <DropDown/>
        <Footer/>
    </>
)
    
}

export default About