import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddTransaction = () =>{
    const transactionCollectionRef = collection(db, "transactions");
    // const {uid} = useGetUserInfo(); 
    const userData = useSelector((state)=> state);
    const uid = userData.id; 
    
    const addTransaction = async ({description, transactionAmount, transactionType})=>{
        await addDoc(transactionCollectionRef, {
            uid,
            description,
            transactionAmount,
            transactionType,
            createdAT:serverTimestamp()
        });
    };
    return {addTransaction}
}