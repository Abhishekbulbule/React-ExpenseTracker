import { useGetTransactions } from "./useGetTransactions"


export const useGetAmount = () => {
    const {transactions} = useGetTransactions();
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction)=>{
        const {transactionAmount, transactionType} = transaction;
        if(transactionType=='Income'){
            income+= parseInt(transactionAmount);
        }else{
            expense+= parseInt(transactionAmount);
        }
    })
    let balance = parseInt(income-expense);
  return{income, expense, balance}
}
