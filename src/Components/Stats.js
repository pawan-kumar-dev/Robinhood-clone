import React, { useEffect, useState } from "react";
import StatsRow from "./StatsRow";
import { data } from "../DataFetch/dummyData";
const Stats = ({ stockData }) => {
     const [myStock, setMyStock] = useState([]);
     useEffect(() => {
          setMyStock(data);
     }, []);
     return (
          <div
               className="col-span-4 flex flex-col border-2 rounded-md border-border "
               style={{ height: "fit-content" }}
          >
               <div className="flex justify-between p-2  border-border border-b-2 ">
                    <p className="text-xl font-bold">stocks</p>
               </div>
               <div className="border-2 border-border">
                    {myStock.map((stock) => {
                         return (
                              <StatsRow
                                   key={stock.name}
                                   name={stock.name}
                                   openPrice={stock.o}
                                   price={stock.c}
                                   share={stock.share}
                                   myStock={myStock}
                                   setMyStock={setMyStock}
                              />
                         );
                    })}
               </div>
               <div className=" p-2 ">
                    <p className="text-lg font-bold">List</p>
               </div>
               <div className="border-2 border-border">
                    {stockData.map((stock) => {
                         return (
                              <StatsRow
                                   key={stock.name}
                                   name={stock.name}
                                   openPrice={stock.o}
                                   share={stock.share}
                                   price={stock.c}
                                   myStock={myStock}
                                   setMyStock={setMyStock}
                                   buy
                              />
                         );
                    })}
               </div>
          </div>
     );
};

export default Stats;
