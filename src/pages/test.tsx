import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import PictureText from "../components/PictureText";
import Bullets from "../components/Bullets/Bullets";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header title="Test" />
      <div className="mb-16" />
      <div className="mx-auto max-w-7xl">
        <PictureText
          heading="Filler"
          body="mollit cupidatat excepteuullamcAd aliqua aliquip labore velit dolore exercitation. Enim reprehenderit culpa qui amet cillum minim voluptate consequat in. Culpa mollit ea commodo do id labore laborum quis elit elit dolore anim. Ad tempor consequat velit ullamco pariatur reprehenderit sit voluptate dolor do. Nulla excepteur officia exercitation minim eiusmod ad ipsum sint quis nisi. Cupidatat dolor sunt amet enim adipisicing eiusmod nostrud reprehenderit enim aliquip dolor voluptate deserunt proident.o tempor proident. Minim cillum ad id sunt dolore voluptate consequat ullamco incididunt ut minim voluptate excepteur. Veniam enim elit voluptate Lorem dolor sint ex id do anim.equat culpa consectetur fugiat aliqua sunt. Est officia eu velit qui aliquip eu aute cillum adipisicing magna nostrud. Nostrud aliqua duis laboris do et sunt officia magna et aliquip ea. Fugiat quis duis dolor irure cillum enim in amet pariatur officia. Incididunt in laborum ipsum ut."
          fileName=""
          alt=""
          // imgVariant="icon-rounded"
          variant="icon"
          imgVariant="rounded"
        />
        <Bullets
          array={[
            ["The quick brown fox jumps over a lazy dog near the riverbank.", "Unexpectedly, the thunderstorm ruined their sunny beach day."],
            ["Every moment is a fresh beginning in the journey of life.", "In a world of change, learning is the only constant."],
            [
              "The old oak tree stood tall, witnessing centuries pass by.",
              "Laughter aLaboNon quis laborum excepteur eu irure aliquip ut proident exercitation et eu sint. Officia commodo id sunt eiusmod consectetur id voluptate mollit voluptate dolore. Consectetur consectetur consequat dolor excepteur Lorem ex minim ex tempor enim sint incididunt minim. Aliqua minim Lorem veniam laboris cillum consequat culpa enim pariatur magna. Et Lorem Lorem exercitation cillum occaecat ad nostrud. aute commodo ea tempor ex. Nulla dolore eiusmod elit incididunt esse elit duis duis enim voluptate dolor eiusmod.nd joy filled the room during the family reunion.",
            ],
          ]}
          margin="8"
          variant="circle"
        />
      </div>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <meta
      name="description"
      content="Discover LambHVAC - Your trusted HVAC experts providing top-quality heating and cooling solutions. With years of experience, we ensure your comfort year-round."
    />
    <title>About Us | LambHVAC - Heating & Cooling Specialists</title>;
  </>
);
