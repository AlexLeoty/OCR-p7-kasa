import { useState } from "react"

function DropDown() {

    const [isOpen, setIsOpen] = useState(true)


    return isOpen ? (
        <div className="dropdown-container">
      <div className="dropdown-logo"> 
            <h2 className="dropdown-title">Titre</h2>
            <img onClick={()=>setIsOpen(false)} src="./images/logoOpen.svg" alt="logo ouverture" />
        </div>    
            <p className="dropdown-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis voluptatum iusto totam omnis sint.
                 Nam tenetur velit sed possimus obcaecati ut eos, doloribus provident dignissimos ipsam tempora suscipit iste!
                 Nam tenetur velit sed possimus obcaecati ut eos, doloribus provident dignissimos ipsam tempora suscipit iste!</p>
        </div>
    ) :(
        <div className="dropdown-container">
        <div className="dropdown-logo"> 
              <h2 className="dropdown-title">Titre</h2>
              <img onClick={()=>setIsOpen(true)} src="./images/logoClosed.svg" alt="logo ouverture" />
          </div>
          </div>
    )
}

export default DropDown