import AdminCarList from './AdminCarList';
import Create from './Create';
import useFetch from './useFetch';

const AdminPage = () => {

    const{data: cars} = useFetch('http://localhost:8080/cars');
    return ( 
        <div className="adminpage">
            <Create/>
            <h1>Car list</h1>
            {cars && <AdminCarList cars={cars} title=""/>}
        </div>
     );
}
 
export default AdminPage;