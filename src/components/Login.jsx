import React from "react";

const Login = () => {
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Sign In With Google
              <span className="sm:block"> to Continue--: </span>
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>

       

        <div className="relative h-54 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
