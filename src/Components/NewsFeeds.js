import { Avatar, Chip } from "@material-ui/core";
import React, { useState } from "react";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";

const NewsFeeds = () => {
     const popularLists = [
          "Technology",
          "Top Movies",
          "Upcoming Earnings",
          "Crypto",
          "Cannabis",
          "Healthcare Supplier",
          "Index ETF's",
          "China",
          "Pharma",
     ];
     const [dates, setDates] = useState(10);
     return (
          <div className="col-span-8 p-4 md:col-span-12 mr-2 flex flex-col rounded-md ">
               <div>
                    <h1 className="text-xl font-bold"> $ 114,655</h1>
                    <p> $ 142.63 (+0.04%) Today</p>
               </div>
               <LineGraph dates={dates} />
               <TimeLine setDates={setDates} dates={dates} />
               <div className="flex justify-between py-3 border-b-2 border-border ">
                    <h2 className="font-bold">Buying Power</h2>
                    <p> $ 4.11</p>
               </div>
               <div className="flex flex-col py-3 border-b-2 border-border ">
                    <p className=" text-gray-400 font-bold ">Market Closing </p>
                    <h2 className="font-bold text-2xl ">See you soon </h2>
               </div>
               <div>
                    <div className="flex justify-between py-3 border-b-2 w-full border-border ">
                         <h2 className="font-bold">Popular lists</h2>
                         <p> Show more</p>
                    </div>
                    <div className="flex flex-wrap ">
                         {popularLists.map((list) => {
                              return (
                                   <div
                                        key={list}
                                        className="m-2 rounded-full bg-border text-robin "
                                   >
                                        <Chip
                                             avatar={
                                                  <Avatar
                                                       src={`https://avatars.dicebear.com/4.4/api/human/${list}.svg?r=50&b=%233cd76b&mood[]=happy`}
                                                  ></Avatar>
                                             }
                                             label={list}
                                             variant="outlined"
                                             clickable
                                        />
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default NewsFeeds;
