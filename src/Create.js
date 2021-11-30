import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const[make, setMake] = useState('');
    const[model, setModel] = useState('');
    const[type, setType] = useState('SUV');
    const[seats, setSeats] = useState('');
    const[price, setPrice] = useState('');
    const[isPending, setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const car = {make, model, type, seats, price};

        setIspending(true);

        fetch('http://localhost:8080/cars/', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(car)
        }).then(() => {
            console.log('new car added' + JSON.stringify(car))
            setIspending(false);
            history.push('/adminpage');
        })
    }

    return ( 

        <div className="create">
            
            <h1>Add a new Car</h1>
            <br /><br /><br />
            <form onSubmit={handleSubmit}>
                <label> Car Make:</label>
                <input 
                    type="text"
                    required 
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                />
                <label> Car Model:</label>
                <input 
                    type="text"
                    required 
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
                <label> Car Type:</label>
                <select
                    value={type}
                    onChange={(e)=> setType(e.target.value)}
                >
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
                <label> Seats:</label>
                <input 
                    type="number"
                    required 
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                />
                <label> Price:</label>
                <input 
                    type="number"
                    required 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {!isPending && <button>Add Car</button>}
                {isPending && <button>Adding Car...</button>}
            </form>
            <br /><br /><br /><br />
        </div>
     );
}
 
export default Create;