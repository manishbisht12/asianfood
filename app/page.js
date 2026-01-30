import Navbar from "@/components/Navbar";
import  Hero from "@/components/Hero";
import  Order from "@/components/Order";
import  Food from "@/components/Food";
import  Offer from "@/components/Offer";
import  Restro from "@/components/Restro";
import  Feedback from "@/components/Feedback";
import  Login from "@/components/Login";
import  Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Order/>
      <Food/>
      <Offer/>
      <Restro/>
      <Feedback/>
      <Login/>
      <Footer/>
    </>
  );
}
