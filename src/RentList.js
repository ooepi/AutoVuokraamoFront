import CarInfo from "./CarInfo";
import CustomerInfo from "./CustomerInfo";
import {format} from "date-fns";


const RentList = ({rents}) => {


    return ( 
        <div className="centered left-text">
            {rents.map((rent) => (
                <div className="rent-card" key={rent.rent_id}>
                    <div className="left-float">
                        <h3 className="color-text">Rent ID: {rent.rent_id}</h3>
                        <CustomerInfo customer_id={rent.customer_id}/>
                        <br />

                        <CarInfo carid={rent.car_id}/>
                        
                    </div>
                    <div className="right-float">
                        <h3>{format(Date.parse(rent.start_time), "dd.MM.yyyy")} - </h3>
                        <h3>{format(Date.parse(rent.end_time), "dd.MM.yyyy")}</h3>
                        <br />
                        
                    </div>
                <div className="car-card-right">

                </div>
                </div>
            ))}
        </div>
     );
}
 
export default RentList;