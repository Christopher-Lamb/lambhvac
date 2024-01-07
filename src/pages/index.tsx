import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import HomeHeader from "../components/HomeHeader";
import LinkBox from "../components/LinkBox";
import IMAGE from "../images/icon.png";
import LOGO from "../images/lamb_logox192.png";
import PictureText from "../components/PictureText";
import Button from "../components/Button";
import Carousel from "../components/Carousel/Carousel";
import { ImageCard, ImageCardContainer } from "../components/ImageCard/ImageCard";
import { Form, Input, TextArea, FieldSet, Select } from "../components/Form";
import Footer from "../components/Footer";

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
        fileName="House.jpg"
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
          fileName="House.jpg"
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
      <Carousel height="400px" variant="reviews" interval={false} />
      <div className="xl:max-w-7xl mx-auto container">
        <PictureText
          variant="40_60"
          fileName="House.jpg"
          color="#000"
          alt="Logo"
          heading="TDolore commodo amet aliqua"
          body="Dolore Nostrud aliqua velit labore deserunt enim aliqua est et excepteur nostrud eiusmod nostrud anim reprehenderit. Cupidatat veniam reprehenderit commodo non cupidatat aute fugiat cillum fugiat qui. Est aliquip irure fugiat eu officia amet ea ullamco consequat. commodo amet aliqua dolor eiusmod adipisicing minim ipsum. Irure id irure duis fugiat qui velit consequat anim dolor ipsum ullamco consequat. Laboris nisi ad reprehenderit ipsum nisi in sint tempor proident. Nisi aliqua adipisicing elit pariatur laborum aliquip ullamco."
        >
          <div className="w-full flex justify-center">
            <Button>Call Me Whenever</Button>
          </div>
        </PictureText>
      </div>
      <div className="grid gap-6 container lg:max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-3 justify-center">
        <ImageCard
          className="border rounded-xl shadow-lg max-w-[21.875rem]"
          src={LOGO}
          alt=""
          title="How to Use a Plumbus"
          body="Velit excepteur duis veniam fugiat fugiat culpa nostrud id in do culpa..."
        />
        <ImageCard
          className="border rounded-xl shadow-lg  max-w-[21.875rem]"
          src={LOGO}
          alt=""
          title="How to Use a Plumbus"
          body="Velit excepteur duis veniam fugiat fugiat culpa nostrud id in do culpa..."
        />
        <ImageCard
          className="border rounded-xl shadow-lg max-w-[21.875rem]"
          src={LOGO}
          alt=""
          title="How to Use a Plumbus"
          body="Velit excepteur duis veniam fugiat fugiat culpa nostrud id in do culpa..."
        />
      </div>
      <Form className="container lg:max-w-4xl mx-auto px-10 py-12 bg-gray-100 border border-gray-300 rounded-lg shadow">
        <h1 className="kanit weight-500 text-5xl">Contact Us</h1>
        <p className="mb-4">
          Please fill out the form below, and a team member will contact you within 24 hours or the next business day to answer any questions you have. For emergencies and immediate assistance, please
          call (856)-217-4920
        </p>
        <FieldSet className="grid md:grid-cols-2 gap-x-4 gap-3">
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Phone" />
          <Select label="Services" options={["Choose One", "Air Conditioning", "Heating"]} />
        </FieldSet>
        <FieldSet>
          <TextArea label="Message" className="h-32 mt-3" />
        </FieldSet>
        <Button type="submit" className="text-xl mt-3 px-12">
          Send
        </Button>
      </Form>

      <Footer />
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
