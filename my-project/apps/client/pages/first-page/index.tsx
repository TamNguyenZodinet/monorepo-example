import { TextArea, TextField } from '@my-project/ui-components';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface FirstPageProps {}

export function FirstPage(props: FirstPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FirstPage!</h1>
      <TextField label="text field" placeholder="text field..."></TextField>
      <TextArea label="text field" placeholder="text field..."></TextArea>
    </div>
  );
}

export default FirstPage;
