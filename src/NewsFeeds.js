import React from "react";
import LineGraph from "./LineGraph";

const NewsFeeds = () => {
     return (
          <div className="col-span-8 p-4 border-2 mr-2 rounded-md border-border ">
               <div>
                    <h1 className="text-xl font-bold"> $ 114,655</h1>
                    <p> $ 142.63 (+0.04%) Today</p>
               </div>
               <div>
                    <LineGraph />
               </div>
          </div>
     );
};

export default NewsFeeds;
