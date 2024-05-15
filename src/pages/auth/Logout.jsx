import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

export const Logout = () => {
  const navigate = useNavigate();
  secureLocalStorage.clear();
  // const auth = getAuth();
  // signOut(auth).then(()=>{
  //   secureLocalStorage.clear();
  //   // navigate('/')
  // }).catch( (error) =>{
  //   console.log(error);
  // });
}
