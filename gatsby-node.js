const path = require("path")
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin")

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panin("There was a problem loading your projects.")
    return
  }

  const projects = result.data.allProjectsJson.edges

  projects.forEach(({ node: { slug } }, index) => {
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: `${slug}`,
        relativeDirectory: `images/projects/${slug}`,
        prev:
          index === 0
            ? projects[projects.length - 1].node
            : projects[index - 1].node,
        next:
          index === projects.length - 1
            ? projects[0].node
            : projects[index + 1].node,
      },
    })
  })
}

const pathsToIgnore = ["/tenantu", "/horn"]

exports.onCreatePage = ({ page, actions: { deletePage } }) => {
  if (pathsToIgnore.includes(page.path)) {
    deletePage(page)
  }
}
