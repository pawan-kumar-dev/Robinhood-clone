import React from "react";

const TimeLine = ({ setDates, dates }) => {
     const btnClass =
          "text-base  font-semibold p-2 box-border border-transparent border-b-2 border-t-2 cursor-pointer rounded-md hover:opacity-80 hover:bg-border";
     const activeBtnClass = "text-robin border-b-2 border-robin bg-border";
     return (
          <div className="flex justify-between ">
               <div
                    onClick={() => setDates(10)}
                    className={`${btnClass}  ${
                         dates === 10 && activeBtnClass
                    }   `}
               >
                    LIVE
               </div>
               <div
                    onClick={() => setDates(50)}
                    className={`${btnClass} ${
                         dates === 50 && activeBtnClass
                    }   `}
               >
                    1 DAY
               </div>
               <div
                    onClick={() => setDates(70)}
                    className={`${btnClass} ${
                         dates === 70 && activeBtnClass
                    }   `}
               >
                    1 WEEK
               </div>
               <div
                    onClick={() => setDates(90)}
                    className={`${btnClass} ${
                         dates === 90 && activeBtnClass
                    }   `}
               >
                    3 MONTHS
               </div>
               <div
                    onClick={() => setDates(366)}
                    className={`${btnClass} ${
                         dates === 366 && activeBtnClass
                    }   `}
               >
                    1 YEAR
               </div>
               <div
                    onClick={() => setDates(1000)}
                    className={`${btnClass} ${
                         dates === 1000 && activeBtnClass
                    }   `}
               >
                    ALL
               </div>
          </div>
     );
};

export default TimeLine;
