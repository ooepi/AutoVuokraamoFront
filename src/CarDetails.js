import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const CarDetails = () => {
    const { car_id } = useParams();
    const {data: car} = useFetch("http://localhost:8080/cars/" + car_id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8080/cars/' + car.car_id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/adminpage');
        })
    }

    return ( 
        <div className="car-details">
            {car && (
                <article>
                    <h1>{car.make}</h1>
                    <h1>Model: {car.model}</h1>
                    <h1>Type: {car.type}</h1>
                    <h1>Seats: {car.seats}</h1>
                    <h1>Price: {car.price}</h1>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default CarDetails;