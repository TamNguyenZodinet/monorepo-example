// import styles from './template.module.scss'

import { TextArea, TextField } from '../../../../../my-project/libs/ui-components/src'

/* eslint-disable-next-line */
type Props = {}

export function Template(props: Props) {
  return (
    <div>
      <h1>This is template</h1>
      <hr />
      <div>
        <TextField label="text field" placeholder="text field..."></TextField>
        <TextArea label="text area" placeholder="text area..."></TextArea>
      </div>
    </div>
  )
}

export default Template
