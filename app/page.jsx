"use client"
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import Section1 from "@/app/components/Section1/Section1";
import Section2 from "@/app/components/Section2/Section2";
import Section3 from "@/app/components/Section3/Section3";
import Section4 from "@/app/components/Section4/Section4";
import Section5 from "@/app/components/Section5/Section5";
import Toggle from "@/app/components/Toggle/Toggle";
import { useState } from "react";

export default function Home() {
  const [isOpen,setIsOpen]=useState(false)
  return (
   <div>
    <Toggle isOpen={isOpen}/>
    <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Footer/>
   </div>
  );
}
