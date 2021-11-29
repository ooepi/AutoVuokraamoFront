import useFetch from "./useFetch";

const CustomerInfo = ({customer_id}) => {
    const {data: customer} = useFetch("http://localhost:8080/customers/" + customer_id);

    return ( 
        <div>
            {customer && (
                <div>
                    <h2>{customer.name}</h2>
                    <h3>{customer.email}</h3>
                </div>
            )}
        </div>
     );
}
 
export default CustomerInfo;