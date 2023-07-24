"use client"

import MainContainer from "./components/MainContainer";
import Header from "./components/UI/Header";

export default function Home() {
  return (
    <MainContainer keywords="main page, overview, nextapp" title="Overview">
      <Header />
      <h1 className="text-center">Main Page</h1>
    </MainContainer>
  )
}