exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null()
          }
        ]
      }
    })
  }
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
    reporter.panin('There was a problem loading your projects.')
    return
  }
  
  const projects = result.data.allProjectsJson.edges;

  projects.forEach(({ node: {slug} }, index) => {
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { 
        slug: `${slug}`,
        relativeDirectory: `images/projects/${slug}`,
        prev: index === 0 ? projects[projects.length - 1].node : projects[index - 1].node,
        next: index === (projects.length - 1) ? projects[0].node : projects[index + 1].node
      }
    })
  })
}

const pathsToIgnore = ['/tenantu']

exports.onCreatePage = ({ page, actions }) => {
  if (pathsToIgnore.includes(page.path)) {
    const { deletePage } = actions
    deletePage(page)
  }
}