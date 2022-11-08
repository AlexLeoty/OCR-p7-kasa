import { useState } from "react"

function DropDownAnnonce({description, buttonClosed, buttonOpen}) {

    const [isOpen, setIsOpen] = useState(true)


    return isOpen ? (
        <div className="dropdown-container">
      <div className="dropdown-logo"> 
            <h3 className="dropdown-title">Description</h3>
            <img onClick={()=>setIsOpen(false)} src={buttonOpen} alt="logo ouverture" />
        </div>    
            <p className="dropdown-text dropdown-text-height">{description}</p>
        </div>
    ) :(
        <div className="dropdown-container">
        <div className="dropdown-logo"> 
              <h3 className="dropdown-title">Description</h3>
              <img onClick={()=>setIsOpen(true)} src={buttonClosed} alt="logo ouverture" />
          </div>
          </div>
    )
}

export default DropDownAnnonce