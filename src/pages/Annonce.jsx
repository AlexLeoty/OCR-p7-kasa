import Navigation from "../components/Navigation"
import Logo from "../components/Logo"
import Tag from "../components/Tag"

function Annonce() {
    return(
        <>
        <header className="header">
      <Logo/>
      <Navigation />
      </header>
      <Tag/>
      </>
    )
}

export default Annonce