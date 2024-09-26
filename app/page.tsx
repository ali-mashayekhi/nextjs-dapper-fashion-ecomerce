import CustomerFeatures from "@/app/_components/CustomerFeatures";
import Features from "@/app/_components/Features";
import Header from "@/app/_components/Header/Header";
import Intro from "@/app/_components/Intro";
import Category from "@/app/_components/Category";
import Collection from "@/app/_components/Collection";
import Deals from "@/app/_components/Deals";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Features />
        <Collection />
        <CustomerFeatures />
        <Category />
        <Deals />
      </main>
    </>
  );
}
