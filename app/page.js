import Image from "next/image";
import Layer1 from "./components/layer1";
import Layer2 from "./components/layer2";
import Layer3 from "./components/layer3";
import Layer4 from "./components/layer4";
import Layer5 from "./components/layer5";
import Layer6 from "./components/layer6";
import Layer7 from "./components/layer7";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-screen font-lato text-[#2B2B23]">
      <header>
        <Header />
      </header>
      <main className="w-full mt-[84px] px-20">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

        <Layer1 />
        <Layer2 />
        <Layer3 />
        <Layer4 />
        <Layer5 />
        <Layer6 />
        <Layer7 />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
