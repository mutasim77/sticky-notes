"use client"

import ComingSoon from "./components/ComingSoon";
import MainContainer from "./components/MainContainer";
import Header from "./components/UI/Header";
import Link from "next/link";

export default function Home() {
  return (
    <MainContainer keywords="main page, overview, nextapp" title="Overview">
      <Header />
      <h1 className="text-center" style={{ marginTop: '10%' }}>
        Currently, I am working on other pages. For now, you can use <Link href={'/notes'}> <em><b>Notes</b></em> </Link>. Feel free to ask if you have any questions
        <ComingSoon />
      </h1>

    </MainContainer>
  )
}