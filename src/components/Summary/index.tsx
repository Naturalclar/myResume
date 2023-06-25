import React from 'react'
import { SectionHeader, Icon } from '../Styles'
import SummaryMd from './summary.md'

const Summary = () => (
  <article className="summary">
    <SectionHeader>
      <Icon className="fa fa-user" />
      Summary
    </SectionHeader>
    <div>
      <SummaryMd />
    </div>
  </article>
)

export default Summary
