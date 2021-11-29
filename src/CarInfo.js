import useFetch from "./useFetch";

const CarInfo = ({carid}) => {
    const {data: car} = useFetch("http://localhost:8080/cars/" + carid);

    return ( 
        <div>
            {car && (
                <div>
                    <h3>{car.make}</h3>
                    <h3>{car.model}</h3>
                    <h3>{car.type}</h3>
                    <h3>Car ID: {car.car_id}</h3>
                    {/* <h2>Seats: {car.seats}</h2> */}
                    {/* <h1>Price: {car.price}</h1> */}
                </div>
            )}
        </div>
     );
}
 
export default CarInfo;