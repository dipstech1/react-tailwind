import { UseFormRegister } from "react-hook-form";

interface InputProps {
  placeholder: string;
  value?: string;
  disabled?: boolean;
  type?: string;
  register: UseFormRegister<any>;
  name: string
}

const Input = ({ placeholder, value, disabled = false, type = "text", register, name }: InputProps) => {
  return (
    <>
      <input placeholder={placeholder} type={type} value={value} disabled={disabled} {...register(name)} />
    </>
  )
}

export default Input