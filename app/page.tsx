import Hero from "./components/Hero";
import Features from "./components/Features";
import Disclaimer from "./components/Disclaimer";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Hero />
      <Disclaimer />
      <Features />
    </main>
  );
}
