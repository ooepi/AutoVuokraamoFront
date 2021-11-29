import { Link } from "react-router-dom";
const CarList = ({cars, title}) => {

    var carType = "Sedan"
    let image;

    if (carType === "SUV") {
        image = <img src="iconSUV.jpg" className="car-icon" alt="car"/>;
    }
    if (carType === "Sedan") {
        image = "iconSedan.jpg"
    }



    return ( 
        <div className="centered left-text">
            <h2>{title}</h2>
            {cars.map((car) => (
                <div className="car-card" key={car.car_id}>
                        <div className="car-card-left">
                            <h1>{car.make}</h1>
                            <h2>{car.model}</h2>
                            <h3>{car.type}</h3>
                            <h4>{car.seats} Seats</h4>
                        </div>
                        <div className="car-card-secondary">
                            <h2>{car.price} €/day</h2>
                            <img src={image} className="car-icon" alt="car"/>;
                        </div>
                        <div className="car-card-right">
                        <Link to={`/rentacar/${car.car_id}`}>
                            <button className="create button">Rent now!</button>
                        </Link>
                        </div>
                </div>
            ))}
        </div>
     );
}
 
export default CarList;