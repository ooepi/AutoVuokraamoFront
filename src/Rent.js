import CarList from './CarList';
import useFetch from './useFetch';

const Rent = () => {
    const{data: cars, isPending, error} = useFetch('http://localhost:8080/cars');

    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {cars && <CarList cars={cars} title="All cars!"/>}
        </div>
     );
}
 
export default Rent;