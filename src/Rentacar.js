import { useParams } from "react-router";
import useFetch from "./useFetch";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import { useState } from "react";
import CreateCustomer from "./CreateCustomer";
import { isWithinInterval } from "date-fns";


const RentaCar = () => {
    const { car_id } = useParams();
    const {data: car} = useFetch("http://localhost:8080/cars/" + car_id);
    const {data: rents} = useFetch("http://localhost:8080/rentscar/" + car_id);

    const [dates, onChange] = useState([new Date().getTime(), new Date().getTime()]);
    var days = Math.ceil((dates[1] - dates[0]) / (1000 * 3600 * 24));
    var totalPrice = ('');
    car && (totalPrice = days * car.price);

    /*Check The rented days, and disable rental for those days*/
    var disabledRanges = []

    if(rents){
        disabledRanges[0] = [new Date("Jan 01 1970"), new Date(new Date() - 86400000)] //disable history
        for (let i = 1; i < rents.length; i++) {
            disabledRanges[i] = [new Date(rents[i].start_time), new Date(rents[i].end_time)]
        }   
    }

    function isWithinRange(date, range) {
        return isWithinInterval(date, { start: range[0], end: range[1] });
      }
      
      function isWithinRanges(date, ranges) {
        return ranges.some(range => isWithinRange(date, range));
      }

    function tileDisabled({ date, view }) {
        if (view === 'month') {
          return isWithinRanges(date, disabledRanges);
        }
      }


    const start_time = dates[0];
    const end_time = dates[1];

    return ( 
        <div className="car-rental">
            <div>
                {car && (
                    <article>
                        <h1>{car.make}</h1>
                        <h2>{car.model}</h2>
                        <h3>{car.type}</h3>
                        <h3>{car.seats} Seats</h3>
                        <h2>{car.price}€/day</h2>
                        <br />
                        <h3>Total price for {days} days: {totalPrice}€</h3>
                    </article>
                )}
            </div>
            <br /><br /><br />
            <div className="centered">
                <h3>Choose the dates</h3>
                <br />
                <DateRangePicker className="DateRangePicker"
                    onChange={onChange}
                    value={dates}
                    tileDisabled={tileDisabled}
                />
            </div>
            <br /><br />
            <br /><br /><br />
            {dates && <CreateCustomer start_time={start_time} end_time={end_time} />}
        </div>
     );
}

export default RentaCar;