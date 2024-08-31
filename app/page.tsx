import Image from "next/image";
import Navbar from "./components/Navbar";
import StoryCards from "./components/StoryCards";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <AboutUs />
      <StoryCards title="December Outreach" body="" image="" />
    </main>
  );
}
