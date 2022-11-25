import { useState } from "react"
import LeftArrow from "../assets/leftarrow.svg"
import RightArrow from "../assets/rightarrow.svg"

  
 function SlideShow({pictures}) {
  //state
  const [currentPic, setCurrentPic] = useState(0);

  //Comportement
  const Previous = () => {
    const first = currentPic === 0;
    const newPic = first ? pictures.length -1 : currentPic -1;
    setCurrentPic(newPic)
  };
  const Next = () => {
    const last = currentPic === pictures.length -1;
    const newPic = last ? 0 : currentPic +1;
    setCurrentPic(newPic)
  };

  //Affichage
      
  return  currentPic === 0 && 1 === pictures.length  ? (
        <div className="slide-container">
            <div className="backgroundPic" style={{backgroundImage: `url(${pictures[currentPic]})`}} ></div>
        </div>
      ) : (
        <div className="slide-container">
          <div className="backgroundPic"  style={{backgroundImage: `url(${pictures[currentPic]})`}}></div>
              <div className="twoArrows">
                <img src={LeftArrow}  alt="" onClick={Previous} />
                <img src={RightArrow} alt="" onClick={Next} /> 
              </div>
              <p>{currentPic+1}/{pictures.length}</p>   
        </div>
      )
  }



export default SlideShow