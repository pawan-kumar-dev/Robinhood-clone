import Loader from "react-loader-spinner";
import React from "react";
const Loading = () => {
     return (
          <div className="w-full h-screen flex bg-black justify-center items-center ">
               <Loader
                    type="Circles"
                    color="#5ac538"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
               />
          </div>
     );
};

export default Loading;
