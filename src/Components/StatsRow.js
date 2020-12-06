import React from "react";
import stock from "../assets/stock.svg";
const StatsRow = ({
     name,
     openPrice,
     price,
     myStock,
     setMyStock,
     share,
     buy,
}) => {
     const percent = ((price - openPrice) / openPrice) * 100;

     const buyStock = (name, price, openPrice) => {
          const stocks = myStock.concat();
          let buyed = false;
          stocks.forEach((s) => {
               if (s.name === name) {
                    s.share++;
                    buyed = true;
               }
          });
          if (!buyed) {
               stocks.push({ name, c: price, o: openPrice, share: 1 });
          }
          setMyStock(stocks);
     };

     const sellStock = (name) => {
          const buyed = myStock.find((s) => s.name === name);
          if (buyed) {
               setMyStock(myStock.filter((s) => s.name !== name));
          }
     };
     return (
          <div
               onClick={() =>
                    buy ? buyStock(name, price, openPrice) : sellStock(name)
               }
               className="flex hover:opacity-80 cursor-pointer justify-between box-border bg-border p-2 h-16 "
          >
               <div>
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-xs">{share && `${share + " Shares"}`}</p>
               </div>
               <img src={stock} alt="stock" className=" w-16 object-contain " />
               <div>
                    <p className="text-sm">$ {price}</p>
                    <p
                         className={`text-sm  ${
                              percent > 0 ? "text-robin" : "text-red-600"
                         } `}
                    >
                         {Number(percent).toFixed(2)} %
                    </p>
               </div>
          </div>
     );
};

export default StatsRow;
