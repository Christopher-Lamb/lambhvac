import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./contentTemplate.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

export default function PageTemplate({ data }) {
  // console.log(props);
  const page = data.json;

  return (
    <main>
      <Helmet>
        <title>{page.pageDetails.title}</title>
        <meta name="description" content={page.pageDetails.description} />
      </Helmet>
      <Navbar />
      <Header title={page.pageDetails.title} />
      <div>
        {/* <h1>{page.pageDetails.title}</h1>
      <p>{page.pageDetails.description}</p> */}
        {page.components.map((component) => (
          <div key={component.id} className="content-class text max-w-four border" dangerouslySetInnerHTML={{ __html: component.content }} />
        ))}
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    json(pageDetails: { slug: { eq: $slug } }) {
      pageDetails {
        title
        description
        slug
      }
      components {
        id
        type
        content
        src
        alt
        className
      }
    }
  }
`;
