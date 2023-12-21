import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import HomeHeader from "../components/HomeHeader";
import LinkBox from "../components/LinkBox";
import IMAGE from "../images/icon.png";
import LOGO from "../images/lamb_logox192.png";
import PictureText from "../components/PictureText";
import Button from "../components/Button";
import Carousel from "../components/Carousel";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HomeHeader />
      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl grid grid-cols-2 md:grid-cols-4 bg-gray-100 mx-auto gap-4">
        <LinkBox href={"/"} src={IMAGE} alt="Aint nothing but nothing" />
        <LinkBox href={"/"} src={IMAGE} alt="Aint nothing but nothing" />
        <LinkBox href={"/"} src={IMAGE} alt="Aint nothing but nothing" />
        <LinkBox href={"/"} src={IMAGE} alt="Aint nothing but nothing" />
      </div>
      <PictureText
        variant="40_60"
        src={LOGO}
        color="#000"
        alt="Logo"
        heading="TDolore commodo amet aliqua"
        body="Dolore Nostrud aliqua velit labore deserunt enim aliqua est et excepteur nostrud eiusmod nostrud anim reprehenderit. Cupidatat veniam reprehenderit commodo non cupidatat aute fugiat cillum fugiat qui. Est aliquip irure fugiat eu officia amet ea ullamco consequat. commodo amet aliqua dolor eiusmod adipisicing minim ipsum. Irure id irure duis fugiat qui velit consequat anim dolor ipsum ullamco consequat. Laboris nisi ad reprehenderit ipsum nisi in sint tempor proident. Nisi aliqua adipisicing elit pariatur laborum aliquip ullamco."
      >
        <div>
          <Button>Call Me Whenever</Button>
        </div>
      </PictureText>
      <div className="max-w-7xl mx-auto">
        <PictureText
          reverse
          variant="50_50"
          src={LOGO}
          color="#000"
          alt="Logo"
          heading="TDolore commodo amet aliqua"
          body="Dolore Nostrud aliqua velit labore deserunt enim aliqua est et excepteur nostrud eiusmod nostrud anim reprehenderit. Cupidatat veniam reprehenderit commodo non cupidatat aute fugiat cillum fugiat qui. Est aliquip irure fugiat eu officia amet ea ullamco consequat. commodo amet aliqua dolor eiusmod adipisicing minim ipsum. Irure id irure duis fugiat qui velit consequat anim dolor ipsum ullamco consequat. Laboris nisi ad reprehenderit ipsum nisi in sint tempor proident. Nisi aliqua adipisicing elit pariatur laborum aliquip ullamco."
        >
          <div>
            <Button>Call Me Whenever</Button>
          </div>
        </PictureText>
      </div>
      <Carousel />
      <div className="h-[600px] w-full"></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <title>LambHVAC - Reliable Heating & Cooling in South Jersey</title>;
  </>
);
