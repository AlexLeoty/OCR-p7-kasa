import { useState } from "react"


function DropDownEquipments({equipments, buttonClosed, buttonOpen}) {

    const [isOpen, setIsOpen] = useState(true)


    return isOpen ? (
        <div className="dropdown-container">
      <div className="dropdown-logo"> 
            <h3 className="dropdown-title">Equipements</h3>
            <img onClick={()=>setIsOpen(false)} src={buttonOpen} alt="logo ouverture" />
        </div>    
            <ul className="dropdown-text dropdown-text-height">
                {equipments.map((equipment) => (
                    <li>{equipment}</li>
                ))}
                </ul>
        </div>
    ) :(
        <div className="dropdown-container">
        <div className="dropdown-logo"> 
              <h3 className="dropdown-title">Equipements</h3>
              <img onClick={()=>setIsOpen(true)} src={buttonClosed} alt="logo ouverture" />
          </div>
          </div>
    )
}

export default DropDownEquipments