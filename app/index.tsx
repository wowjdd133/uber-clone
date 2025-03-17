import React from "react";
import { Redirect } from "expo-router";
// import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  // const { isSignedIn } = useAuth(false);
  const isSignedIn = false;

  return isSignedIn ? (
    <Redirect href="/(root)/(tabs)/home" />
  ) : (
    <Redirect href="/(auth)/welcome" />
  );
};

export default Home;
