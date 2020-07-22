import {text} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import React from 'react'
import {Container} from '.'

storiesOf('Container', module).add('default', () => {
  const content = text('Content', 'Content')
  return <Container>{content}</Container>
})
