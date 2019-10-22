import React from 'react'
import { SectionHeader, Icon } from '../Styles'
import { createHtml } from '../Utils'
import summary from './summary.md'

const Summary = () => (
  <article className="summary">
    <SectionHeader>
      <Icon className="fa fa-user" />
      Summary
    </SectionHeader>
    <div dangerouslySetInnerHTML={createHtml(summary)} />
  </article>
)

export default Summary
