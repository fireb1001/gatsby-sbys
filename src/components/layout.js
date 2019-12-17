import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Link to={`/`}>
      <h3
        css={css`
          display: inline-block;
          font-style: normal;
        `}
      >
        Pandas Eating Lots
      </h3>
    </Link>
    {children}
  </div>
)