import { SectionHeader } from '../Styles'
import { Icon } from '../Icon'
import SummaryMd from './summary.md'

const Summary = () => (
  <article className="summary">
    <SectionHeader>
      <Icon name="user" />
      Summary
    </SectionHeader>
    <div>
      <SummaryMd />
    </div>
  </article>
)

export default Summary
