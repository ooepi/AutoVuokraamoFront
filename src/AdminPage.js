import { useState } from 'react';
import AdminCarList from './AdminCarList';
import Create from './Create';
import RentList from './RentList';
import useFetch from './useFetch';

const AdminPage = () => {

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
    const{data: customers} = useFetch('http://localhost:8080/customers');
    return ( 
        <div className="adminpage">
            <div className="tabs">
                {!isCarsChosen && <button onClick={handleCarsClick} className="tab-button">Cars</button>}
                {isCarsChosen && <button onClick={handleCarsClick} className="tab-button-selected">Cars</button>}
                {!isRentsChosen && <button onClick={handleRentsClick} className="tab-button">Rents</button>}
                {isRentsChosen && <button onClick={handleRentsClick} className="tab-button-selected">Rents</button>}
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
            {/* {rents && <RentList rents={rents} cars={cars} customers={customers}/>}
            <Create/>
            <h1 className="centered">Car list</h1>
            {cars && <AdminCarList cars={cars} title=""/>} */}
        </div>
     );
}
 
export default AdminPage;