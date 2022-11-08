import star from "../assets/orangestar.svg"
import greystar from "../assets/greystar.svg"

function Rating({rating}) {
    const numbers = [1, 2, 3, 4, 5];

    return(
        <>
        {numbers.map((data) =>
        rating >= data ? (
            <img src={star} alt="" />
        ) : (
            <img src={greystar} alt=""/>
        ))}
        </>
    )
}

export default Rating