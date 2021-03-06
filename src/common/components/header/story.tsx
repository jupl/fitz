import {text} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import React from 'react'
import {Header} from '.'

storiesOf('Common/Header', module)
  .addParameters({component: Header})
  .add('default', () => {
    const title = text('Title', 'Title')
    return <Header title={title} />
  })
