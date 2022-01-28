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
        <link rel="icon" href="https://3speak.tv/favicon.png" />
      </Head>
      <Market />
    </div>
  );
};

export default Home;
