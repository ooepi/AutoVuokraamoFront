import { useState } from 'react';
import AdminCarList from './AdminCarList';
import Create from './Create';
import RentList from './RentList';
import useFetch from './useFetch';
import { Link, useHistory } from 'react-router-dom';
import Login from './Login';
import { auth, db, logout } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from '@firebase/auth';

const AdminPage = () => {

    const [user] = useAuthState(auth);
    const logout = async () => {
        await signOut(auth);
    };

    const history = useHistory();

    const[state, setState] = useState('carsTab');
    const[isCarsChosen, setIsCarsChosen] = useState(false);
    const[isRentsChosen, setIsRentsChosen] = useState(false);

    const handleCarsClick = () => {
        setIsCarsChosen(true);
        setIsRentsChosen(false);
        setState('carsTab');
    }
    const handleRentsClick = () => {
        setIsRentsChosen(true);
        setIsCarsChosen(false);
        setState('rentsTab');
    }

    const{data: cars} = useFetch('http://localhost:8080/cars');
    const{data: rents} = useFetch('http://localhost:8080/rents');
    
    if(user){
    return ( 
        <div className="adminpage">
            <div className="tabs">
                {!isCarsChosen && <button onClick={handleCarsClick} className="tab-button">Cars</button>}
                {isCarsChosen && <button onClick={handleCarsClick} className="tab-button-selected">Cars</button>}
                {!isRentsChosen && <button onClick={handleRentsClick} className="tab-button">Rents</button>}
                {isRentsChosen && <button onClick={handleRentsClick} className="tab-button-selected">Rents</button>}
                <button onClick={logout} className="general-button-small right-float padding-right">Logout</button>
            </div>
            {state === 'carsTab' && (
                cars && (
                    <div>
                        <Create/>
                        <h1 className="centered">Car list</h1>
                        <AdminCarList cars={cars} title=""/>
                    </div>
                )
            )}
            {state === 'rentsTab' && (
                rents && (
                    <RentList rents={rents}/>
                )
            )}
        </div>
     );
    } else {
        return(
            <div className="centered">
                <h1>Authorized access only</h1>
                <h2>If you are admin - login</h2>
                <br />
                <Login/>
            </div>
        );
    }
}
 
export default AdminPage;