// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document schemas
import companyInfo from './documents/companyInfo'
import homepage from './documents/homepage'
import page from './documents/page'
import route from './documents/route'
import siteSettings from './documents/siteSettings'

// Object schemas
import blockContent from './objects/blockContent'
import blockText from './objects/blockText'
import cta from './objects/cta'
import mainImage from './objects/mainImage'
import openGraph from './objects/openGraph'
import slideshow from './objects/slideshow'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    blockContent,
    blockText,
    companyInfo,
    cta,
    homepage,
    mainImage,
    openGraph,
    page,
    route,
    siteSettings,
    slideshow
  ])
  .concat(allPlugs),
})
