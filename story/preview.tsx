import {addDecorator} from '@storybook/react'
import React from 'react'
import {Normalize} from 'styled-normalize'

addDecorator(storyFn => (
  <>
    <Normalize />
    {storyFn()}
  </>
))
