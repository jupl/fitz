import {withKnobs} from '@storybook/addon-knobs'
import {addDecorator} from '@storybook/react'
import React from 'react'
import {Normalize} from 'styled-normalize'

addDecorator(withKnobs)
addDecorator(storyFn => (
  <>
    <Normalize />
    {storyFn()}
  </>
))
