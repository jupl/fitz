import {number} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import React from 'react'
import url from '~/assets/images/gatsby-astronaut.png'
import {GatsbyImage} from '.'

storiesOf('Gatsby/Image', module)
  .addParameters({component: GatsbyImage})
  .add('plain', () => {
    const data = {url}
    return <GatsbyImage data={data} />
  })
  .add('fixed', () => {
    const width = number('Width', 400, {
      max: 800,
      min: 50,
      range: true,
      step: 50,
    })
    const data = {
      childImageSharp: {
        fixed: {
          height: width,
          src: url,
          srcSet: `${url} ${width}w`,
          width,
        },
      },
      url,
    }
    return <GatsbyImage data={data} />
  })
  .add('fluid', () => {
    const width = number('Width', 400, {
      max: 800,
      min: 50,
      range: true,
      step: 50,
    })
    const data = {
      childImageSharp: {
        fluid: {
          aspectRatio: 1,
          presentationWidth: width,
          sizes: `${width}`,
          src: url,
          srcSet: `${url} ${width}w`,
        },
      },
      url,
    }
    return <GatsbyImage data={data} />
  })
