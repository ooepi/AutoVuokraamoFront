import { useParams } from "react-router";
import useFetch from "./useFetch";
import {format} from "date-fns";

const ConfirmPage = () => {
    const {rent_id} = useParams();
    const {data: rent} = useFetch("http://localhost:8080/rents/" + rent_id);
    var car_id = null;
    rent && (car_id = rent.car_id);
    var customer_id = null;
    rent && (customer_id = rent.customer_id);

    const {data: car} = useFetch("http://localhost:8080/cars/" + car_id);
    const {data: customer} = useFetch("http://localhost:8080/customers/" + customer_id);

    var startDate = null;
    var startDateF = null;
    var endDate = null; 
    var endDateF = null;

    if(rent){
        startDate = Date.parse(rent.start_time)
        startDateF = format(startDate, 'dd.MM.yyyy')
        endDate = Date.parse(rent.end_time)
        endDateF = format(endDate, 'dd.MM.yyyy')
    }

    return ( 
        <div>
            <h1>Thank you for your order, {customer && customer.name}</h1>
            <br /><br /><br />
            <h2>Details:</h2><br />
            {car && (<div>
                <h1>{car.make}</h1>
                <h2>{car.model}</h2>
                <h2>{car.seats} Seater</h2><br />
                <h3>Rent time:</h3>
                <h2>{startDateF} - {endDateF}</h2>
                <br /><br />
                <h2>Total Price:</h2>
                <h3>{Math.ceil((endDate - startDate) / (1000 * 3600 * 24)) * car.price}€</h3>
            </div>
            )}
        </div>

     );
}
 
export default ConfirmPage;