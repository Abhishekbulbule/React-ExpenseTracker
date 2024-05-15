import React, { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import secureLocalStorage from "react-secure-storage";
import { useGetTransactions } from "../../hooks/useGetTransactions";
const Expense = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const onAdd = async (e) => {
    e.preventDefault();
    addTransaction({ description, transactionAmount, transactionType });
    console.log(
      "Adding: ",
      description,
      "  ",
      transactionAmount,
      "  ",
      transactionType
    );
  };

  function convertFirestoreTimestamp(timestampArray) {
    // Extract seconds and nanoseconds from the array
    if(timestampArray.seconds!=null){
      
      const second = timestampArray.seconds;
      const nanoseconds = timestampArray.nanoseconds;
  
      // Convert to milliseconds and create a Date object
      const date = new Date(second * 1000 + nanoseconds / 1000000);
  
      // Format the date and time
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based in JavaScript
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
  
      // Return formatted date and time
      return `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
    }
}

  return (
    <>
      <section className="bg-gray-900 text-white ">
        <div className="mx-auto  px-4 py-5 justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-3xl text-transparent sm:text-5xl ">
              Expense Tracker
            </h1>
            <h1 className="bg-gradient-to-r from-green-400  to-purple-600 bg-clip-text  font-extrabold text-1xl text-transparent sm:text-3xl py-5 ">
              Income
              <span className="sm:block"> 19.00 </span>
            </h1>
            <h1 className="bg-gradient-to-r from-green-500  to-purple-600 bg-clip-text  font-extrabold text-1xl text-transparent sm:text-3xl ">
              Expenses
              <span className="sm:block"> 19.00 </span>
            </h1>

            <form className="mt-5" onSubmit={onAdd}>
              <div className="py-2">
                <label
                  htmlFor="UserEmail"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <input
                    type="text"
                    id="UserEmail"
                    placeholder="Enter Expense"
                    className="peer h-8 w-full border-none bg-transparent p-1 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-400">
                    Description
                  </span>
                </label>
              </div>
              <div>
                <label
                  htmlFor="userAmount"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <input
                    type="number"
                    id="userAmount"
                    placeholder="Enter Amount"
                    className="peer h-8 w-full border-none bg-transparent p-1 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                    onChange={(e) => setTransactionAmount(e.target.value)}
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-400">
                    Amount
                  </span>
                </label>
              </div>
              <div className="mt-3">
                <fieldset className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="DeliveryStandard"
                      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                    >
                      <div>
                        <p className="text-gray-700 dark:text-gray-200">
                          Income
                        </p>
                      </div>

                      <input
                        type="radio"
                        name="DeliveryOption"
                        value="Income"
                        id="DeliveryStandard"
                        className="sr-only"
                        onChange={(e) => setTransactionType(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="DeliveryPriority"
                      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                    >
                      <div>
                        <p className="text-gray-700 dark:text-gray-200">
                          Expense
                        </p>
                      </div>

                      <input
                        type="radio"
                        name="DeliveryOption"
                        value="Expense"
                        id="DeliveryPriority"
                        className="sr-only"
                        onChange={(e) => setTransactionType(e.target.value)}
                      />
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-4">
                <button
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  type="submit"
                >
                  Add Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>

        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900 py-3">
            <thead className="text-center">
              <tr className="whitespace-nowrap px-4 py-2 text-3xl text-gray-900 dark:text-white">
                Transactions
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Description
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Amount
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Type
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Created At
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((transaction,i) => {
                const {
                  createdAT,
                  description,
                  transactionAmount,
                  transactionType, uid
                } = transaction;
                // console.log(createdAT)
                return (
                  
                  <tr key={i} className="odd:bg-gray-50 text-center dark:odd:bg-gray-800/50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      {description}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                      {transactionAmount}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                      {transactionType}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                      {convertFirestoreTimestamp(createdAT)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Expense;
