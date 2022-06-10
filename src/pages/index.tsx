import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import About from "../components/About";
import Feature from "../components/Feature";
import Posts from "../components/Posts";

const Home: React.FC<NextPage> = () => (
  <div className="is-preload">
    <Head>
      <title>Next Base Setup</title>
    </Head>

    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          <Banner />
          <Feature />
          <Posts />
        </div>
      </div>
      <div id="sidebar">
        <div className="inner">
          <Search />
          <Menu />
          <About />
          <Footer />
        </div>
        <a href="#sidebar" className="toggle">
          Toggle
        </a>
      </div>
    </div>
  </div>
);

export default Home;
