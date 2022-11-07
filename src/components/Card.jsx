

function Card({title, picture}) {
    return(
        <div className="card-container">
            <img src={picture} alt="" />
          <h3> {title}</h3> 
        </div>
    )
}

export default Card