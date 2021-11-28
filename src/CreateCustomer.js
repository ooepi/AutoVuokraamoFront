import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CreateCustomer = ({end_time, start_time}) => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[number, setNumber] = useState('');
    const[address, setAddress] = useState('');

    const { car_id } = useParams();
    let customer_id = null;

    const[isPending, setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = {name, email, number, address};
        const rent = {car_id, customer_id, start_time, end_time}

        setIspending(true);

        fetch('http://localhost:8080/customers/', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(customer)
        }).then(response => response.json())
        .then(data => rent.customer_id = data.customer_id)
        .then(() => {
            console.log('new customer added' + JSON.stringify(customer))
            setIspending(false);
            //history.push('/confirmpage');
        }).then(() => {
            fetch('http://localhost:8080/rents/', {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(rent)
            }).then(() => {
                rent.start_time = start_time;
                rent.end_time = end_time;
                console.log('new rental created' + JSON.stringify(rent))
            })
        })
        
    }

    return ( 

        <div className="create">
            <h1>Add your info</h1>
            <br /><br />
            <form onSubmit={handleSubmit}>
                <label> Name:</label>
                <input 
                    type="text"
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label> Email:</label>
                <input 
                    type="email"
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label> number:</label>
                <input 
                    type="number"
                    required 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <label> Address:</label>
                <input 
                    type="text"
                    required 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <br /><br />
                {!isPending && <button className="general-button">Rent now!</button>}
                {isPending && <button className="general-button">Renting...</button>}
            </form>
            <br /><br /><br /><br />
        </div>
     );
}
 
export default CreateCustomer;