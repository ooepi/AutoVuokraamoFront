import { useState } from 'react';
import {auth} from './firebase'
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState ("");
    const [loginPassword, setLoginPassword] = useState ("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
  
    const history = useHistory();

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
      } catch (error) {
        setError(error.message);
      }
          console.log("logged in");
          console.log(user)
          history.push('/adminpage');
    };
  
    const logout = async () => {
      await signOut(auth);
    };
  



    return ( 
        <div className="create">
            <input type="email" placeholder="Email"
                onChange={(event) => {
                setLoginEmail(event.target.value);
                }}/>
            <input type="password" placeholder="Password" 
                onChange={(event) => {
                setLoginPassword(event.target.value);
                }}/>
            <button onClick={login}>Login</button>
            {user && <button onClick={logout}>Logout</button>}
            <h2>{error}</h2>
            <h1>{user?.email}</h1>
        </div>
     );
}
 
export default Login;