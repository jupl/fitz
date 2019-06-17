import {configure} from '@storybook/react'

// Load all stories defined in our codebase
const loadStories = () => {
  const scopedRequire = require.context('..', true, /^\/(.+\.)?stor(y|ies)$/)
  scopedRequire.keys().forEach(scopedRequire)
}

configure(loadStories, module)
