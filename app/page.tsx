"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { PythonTools } from "@/components/ToolsBreakdown";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <section id = "Hero"><Hero /></section>
        <section id = "Grid"><Grid /></section>
        <section id = "RecentProjects"><RecentProjects /></section>
        <section id = "PythonTools"><PythonTools /></section>
        <section id = "Experience"><Experience /></section>
        <section id = "Approach"><Approach /></section>
        <section id = "Footer"><Footer /></section>
      </div>
    </main>
  );
};

export default Home;
