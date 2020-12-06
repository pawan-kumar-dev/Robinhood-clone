import "./App.css";
import Header from "./Header";
import NewsFeeds from "./NewsFeeds";
import Stats from "./Stats";

function App() {
     return (
          <div className="app w-full h-full min-h-screen bg-black text-white ">
               <Header />
               <div className="grid grid-cols-12 w-full h-96 px-4 max-w-screen-lg mx-auto ">
                    <NewsFeeds />
                    <Stats />
               </div>
          </div>
     );
}

export default App;
