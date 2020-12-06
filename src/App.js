import { makeStyles, SwipeableDrawer, useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import NewsFeeds from "./Components/NewsFeeds";
import Stats from "./Components/Stats";
import axios from "./DataFetch/fetchdata";
import { key } from "./DataFetch/keys";
const useStyles = makeStyles({
     paper: {
          backgroundColor: "black",
          minWidth: "300px",
     },
});
function App() {
     const classes = useStyles();
     const [stockData, setStockData] = useState([]);
     const [load, setLoad] = useState(true);
     const matches = useMediaQuery("(max-width:767px)");
     const [open, setOpen] = useState(false);
     const getStock = (stock) => {
          return axios
               .get(`/quote?symbol=${stock}&token=${key}`)
               .catch((err) => console.log(err));
     };
     useEffect(() => {
          let tempData = [];
          const stocksList = [
               "AAPL",
               "MSFT",
               "TSLA",
               "FB",
               "BABA",
               "UBER",
               "SBUX",
          ];
          let promises = [];
          stocksList.map((stock) =>
               promises.push(
                    getStock(stock).then((res) =>
                         tempData.push({ name: stock, ...res.data })
                    )
               )
          );

          //  after getting all the stocks data push to the state

          Promise.all(promises).then(() => {
               setStockData(tempData);
               setLoad(false);
          });
     }, []);

     return (
          <>
               {load ? (
                    <Loading />
               ) : (
                    <div className="app w-full h-full min-h-screen bg-black text-white ">
                         <Header onOpen={() => setOpen(true)} />
                         <div className="grid grid-cols-12 w-full px-4 max-w-screen-lg mx-auto ">
                              <NewsFeeds />
                              {matches ? (
                                   <SwipeableDrawer
                                        classes={{ paper: classes.paper }}
                                        anchor="right"
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        onOpen={() => setOpen(true)}
                                   >
                                        <Stats stockData={stockData} />
                                   </SwipeableDrawer>
                              ) : (
                                   <Stats stockData={stockData} />
                              )}
                         </div>
                    </div>
               )}
          </>
     );
}

export default App;
