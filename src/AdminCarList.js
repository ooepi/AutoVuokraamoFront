import { Link } from "react-router-dom";

const AdminCarList = ({cars, title}) => {


    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {cars.map((car) => (
                <div className="car-card" key={car.car_id}>
                    <Link to={`/cars/${car.car_id}`}>
                        <div className="car-card-full">
                            <h1>{car.make}</h1>
                            <h2>{car.model}</h2>
                            <h3>{car.type}</h3>
                            <h4>{car.seats} Seats</h4>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default AdminCarList;


/*
    <Link to={`/cars/${car.car_id}`}>

    </Link>
*/