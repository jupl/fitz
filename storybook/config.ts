import {configure} from '@storybook/react'

// Load all stories defined in our codebase
const loadStories = () => {
  const scopedRequire = require.context(
    '../src',
    true,
    /^\/(.+\.)?stor(y|ies)\.tsx$/,
  )
  scopedRequire.keys().forEach(scopedRequire)
}

configure(loadStories, module)
