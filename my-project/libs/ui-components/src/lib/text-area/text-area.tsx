import styles from './text-area.module.scss';

/* eslint-disable-next-line */
export interface TextAreaProps {
  label?: string;
  placeholder?: string;
}

export function TextArea(props: TextAreaProps) {
  const { label, placeholder } = props;
  return (
    <div>
      <label>{label}</label>
      <br />
      <input placeholder={placeholder}></input>
    </div>
  );
}

export default TextArea;
