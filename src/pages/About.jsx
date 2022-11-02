import DropDown from "../components/Dropdown"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"


function About() {
return (
<> 
<div className="header">
      <Logo/>
      <Navigation />
      </div>
        <DropDown/>
        <Footer/>
    </>
)
    
}

export default About