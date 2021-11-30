import { useState } from 'react';
import CarList from './CarList';
import useFetch from './useFetch';

const Rent = () => {
    const{data: cars, isPending, error} = useFetch('http://localhost:8080/cars');

    const[type, setType] = useState('All');
    const[seats, setSeats] = useState(5);
    const[lowPrice, setLowPrice] = useState(0);
    const[highPrice, setHighPrice] = useState(5000);

    return ( 
        <div className="Home">
            <div className="filter-labels">
                <label className="label1"> Car Type</label>
                <label className="label2"> Seats </label>
                <label className="label4"> Price From </label>
                <label className="label5"> Price To </label>
            </div>
            <div className="filters">
                <h2>Filters</h2>
            
                <select
                    value={type}
                    onChange={(e)=> setType(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Micro">Micro</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Minivan">Minivan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Supercar">Supercar</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Van">Van</option>
                    <option value="Limousine">Limousine</option>
                </select>
                <input type="number"
                    value={seats}
                    onChange={(e)=> setSeats(e.target.value)}
                />
                <input type="number" 
                    value={lowPrice}
                    onChange={(e)=> setLowPrice(e.target.value)}
                />
                <input type="number" 
                    value={highPrice}
                    onChange={(e)=> setHighPrice(e.target.value)}
                />
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {type == 'All' && cars && <CarList cars={cars} title="All cars"/>}
            {cars && <CarList cars={
                cars.filter((car) => car.type === type)
                .filter((car) => car.seats == seats)
                .filter((car) => (car.price >= lowPrice) && (car.price <= highPrice))
            } title="Filtered"/>}
        </div>
     );
}
 
export default Rent;