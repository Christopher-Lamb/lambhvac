// const path = require("path");
// const JSONData = require("./src/data/lambhvac_com-lvcdlfkx-e8nebv.json");

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   const youtTemplateFile = path.resolve(`./src/templates/contentTemplate.js`);

//   JSONData.forEach((item) => {
//     console.log(item);
//     createPage({
//       path: item.pageDetails.slug,
//       slug: item.pageDetails.slug,

//       component: youtTemplateFile,
//       context: {
//         slug: item.pageDetails.slug,
//       },
//     });
//   });
// };

const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allJson {
        nodes{
          pageDetails{
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading JSON", result.errors);
    return;
  }

  result.data.allJson.nodes.forEach((node) => {
    createPage({
      path: node.pageDetails.slug,
      component: path.resolve(`./src/templates/contentTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.pageDetails.slug,
      },
    });
  });
};
