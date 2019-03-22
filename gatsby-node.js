/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/add-aws-auth/)) {
        page.matchPath = "/add-aws-auth/*"
        createPage(page)
    }
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/add-aws-auth-comp/)) {
        page.matchPath = "/add-aws-auth-comp/*"
        createPage(page)
    }
}

