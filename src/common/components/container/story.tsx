import {text} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import React from 'react'
import {Container} from '.'

storiesOf('Common/Container', module)
  .addParameters({component: Container})
  .add('default', () => {
    const content = text('Content', 'Content')
    return <Container>{content}</Container>
  })
