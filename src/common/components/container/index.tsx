import styled from 'styled-components'

/**
 * Render container.
 */
export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`
