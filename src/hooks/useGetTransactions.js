import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase-config';
import { useGetUserInfo } from './useGetUserInfo';

export const useGetTransactions = () => {
    const {uid} = useGetUserInfo();
    const [transactions, setTransactions] = useState([]);
    const transactionCollectionRef = collection(db,'transactions');

    const getTransactions = async()=>{
        let unSubscribe;
        try {
            const queryTransactions = query(
                transactionCollectionRef, where("uid" ,"==", uid), orderBy("createdAT")
            );
            unSubscribe = onSnapshot(queryTransactions, (snapshot)=>{
                let docs = [];
                snapshot.forEach((doc)=>{
                    const data = doc.data();
                    const id = doc.id;
                    docs.push({ ...data, id})
                });
                setTransactions(docs);
            })
        } catch (error) {
            console.log("Hello====",error);
        }
        return ()=>unSubscribe();
    }

    useEffect(()=>{
        getTransactions();
    },[])
    return {transactions}
}
