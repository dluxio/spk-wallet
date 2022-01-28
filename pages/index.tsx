import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Market } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>3speak wallet</title>
        <meta name="description" content="3Speak wallet web app" />
        <meta name="og:image" content="https://3speak.tv/img/3S_logo.svg" />
        <link rel="icon" href="https://3speak.tv/favicon.png" />
      </Head>
      <Market />
    </div>
  );
};

export default Home;
