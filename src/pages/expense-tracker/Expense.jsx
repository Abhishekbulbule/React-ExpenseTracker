import React from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import secureLocalStorage from "react-secure-storage";
const Expense = () => {
  const {addTransaction} = useAddTransaction();
  const onAdd = async(e)=>{
    e.preventDefault();
    addTransaction ({description:"Haircut", transactionAmount:200, transactionType:"Expense"});
    console.log("Adding: Expense")
  }

console.log(secureLocalStorage.getItem('user'));
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-5 lg:flex  lg:h-screen lg:justify-center">
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
                        <p className="text-gray-700 dark:text-gray-200">Income</p>
                      </div>

                      <input
                        type="radio"
                        name="DeliveryOption"
                        value="DeliveryStandard"
                        id="DeliveryStandard"
                        className="sr-only"
                        
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="DeliveryPriority"
                      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                    >
                      <div>
                        <p className="text-gray-700 dark:text-gray-200">Expense</p>
                      </div>

                      <input
                        type="radio"
                        name="DeliveryOption"
                        value="DeliveryPriority"
                        id="DeliveryPriority"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-4">
                <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" type="submit">
                  Add Transaction
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>
      <section>
        <h1>Transactions</h1>
      </section>

    </>
  );
};

export default Expense;
