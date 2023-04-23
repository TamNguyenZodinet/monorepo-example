/* eslint-disable-next-line */
export interface TextFieldProps {
  label?: string
  placeholder?: string
}

export function TextField(props: TextFieldProps) {
  const { label, placeholder } = props
  return (
    <div>
      <label>{label}</label>
      <br />
      <textarea placeholder={placeholder}></textarea>
    </div>
  )
}

export default TextField
