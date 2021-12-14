import { Route, Switch } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { Offers } from "./Offers";
import { Header } from "../Components/jsx/Header";
import { Footer } from "../Components/jsx/Footer";
import Home from "../Components/jsx/home";
import Train from "../Components/jsx/Train";
import Bus from "../Components/jsx/Bus.jsx";
import Navbar from "../Components/jsx/Link";
import Hotel from "../Components/jsx/Hotels";
import Rental from "../Components/jsx/Rental";
import {Payment} from "../Components/jsx/Payment"
import { HotelList } from "../Components/jsx/HotelList";
import Pay from "../Components/jsx/payment_successful"
export const Router = () => {
  let location = useLocation();
  var t = "block";
  if (location.pathname === "/Hotel") {
    t = "none";
  }

  var p=location.pathname.split("/")
 for(var i=0; i<p.length; i++){
   if(p[i]==="Payment"){
    t = "none";
   }
 }
  return (
    <>
      <Header />
      <Navbar value={t} />
      <Switch>
        <Route exact path="/">
          <Bus />
        </Route>
        <Route path="/Trains">
          <Train />
        </Route>
        <Route path="/Hotels">
          <Hotel />
        </Route>
        <Route path="/Rentals">
          <Rental />{" "}
        </Route>
        <Route path="/offers">
          {" "}
          <Offers></Offers>
        </Route>
        {/* <Route exact path="/users"></Route>

        <Route path="/users/:id"></Route>
        <Route path="/others">This is others page</Route> */}
        <Route path="/Hotel">
          {" "}
          <HotelList></HotelList>
        </Route>
        <Route path="/Payment">
          {" "}
          <Payment/>
        </Route>
        <Route path="/paymentSuccessful">
          {" "}
          <Pay/>
        </Route>
       
        <Route>404 page not found</Route>
      </Switch>
      <Footer />
      {/* <Switch>
        <Route path='/' exact> <Home></Home> </Route>
        <Route>Page not found</Route>
    </Switch> */}
    </>
  );
};

// import Train from "../jsx/Train";
// import Bus from "../jsx/Bus";
// import Hotel from "../jsx/Hotels";
// import { Route, Switch } from "react-router-dom";
// import Navbar from "../jsx/Link";
// import { Header } from "./Header";
// import {Footer} from "./Footer"

// import App from "./firebase"
//
// export default function Home() {
//   return (
//     <>
//       {" "}
//       <div >
//       <Header />
//       <Navbar />
//       <Switch>

//         <Route exact path="/"><Bus/></Route>
//         <Route path="/Trains">
//         <Train />
//         </Route>
//         <Route path="/Hotels"><Hotel/></Route>
//         <Route path="/Rentals"> </Route>

//         {/* <Route exact path="/users"></Route>

//         <Route path="/users/:id"></Route>
//         <Route path="/others">This is others page</Route> */}
//         <Route>404 page not found</Route>
//       </Switch>
//       <Footer/>
//       </div>
//     </>
//   );
// }
