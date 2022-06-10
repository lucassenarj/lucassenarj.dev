import Head from "next/head";
import React from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Post from "../../components/Post";
import Search from "../../components/Search";

function Posts() {
  return (
    <div className="is-preload">
      <Head>
        <title>Next Base Setup</title>
      </Head>

      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Header />
            <Post />
          </div>
        </div>
        <div id="sidebar">
          <div className="inner">
            <Search />
            <Menu />
            <About />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
