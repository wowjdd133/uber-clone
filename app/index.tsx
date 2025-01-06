import React from "react";
import { Redirect } from "expo-router";

const isLogin = true;

const Home = () => {
  return isLogin ? (
    <Redirect href="/(root)/(tabs)/home" />
  ) : (
    <Redirect href="/(auth)/welcome" />
  );
};

export default Home;
