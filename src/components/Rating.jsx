import star from "../assets/orangestar.svg"
import greystar from "../assets/greystar.svg"

function Rating({rating}) {
    const numbers = [1, 2, 3, 4, 5];

    return(
        <>
        {numbers.map((data, index) =>
        rating >= data ? (
            <img key={index} src={star} alt="" />
        ) : (
            <img key={index} src={greystar} alt=""/>
        ))}
        </>
    )
}

export default Rating