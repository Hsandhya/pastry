import Header from "./components/Header/Header"
import Frontpage from "./components/Frontpage/Frontpage";
import Variety from "./components/Variety/Variety";
import Carousel from "./components/carousel/carousel"
import Middle from "./components/Middle/Middle"
import Lastpage from "./components/Lastpage/Lastpage";


function App() {
  return (
   <div>
    <Header />
   <Frontpage />
   <Variety />
   <Carousel />
   <Middle />
   <Lastpage />
   </div>
  );
}

export default App;
