import { useState } from "react"

function DropDown({title, description, buttonClosed, buttonOpen}) {

    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (
        <div className="dropdown-container">
      <div className="dropdown-logo"> 
            <h3 className="dropdown-title">{title}</h3>
            <img onClick={()=>setIsOpen(false)} src={buttonOpen} alt="logo ouverture" />
        </div>    
            <p className="dropdown-text">{description}</p>
        </div>
    ) :(
        <div className="dropdown-container">
        <div className="dropdown-logo"> 
              <h3 className="dropdown-title">{title}</h3>
              <img onClick={()=>setIsOpen(true)} src={buttonClosed} alt="logo ouverture" />
          </div>
          </div>
    )
}

export default DropDown