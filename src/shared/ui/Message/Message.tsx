
interface IMessage {
  msgType: 'success' | 'error' | 'info';
  children?: React.ReactNode;
  errorType: 'form' | 'normal',
  errorData: any
}

const FormErrorMessage = ({ error }:any) => {
  
  return (
    <>
      {error?.message}
    </>
  )
}

const ErrMsg = ({errorDisp}:any) => {
  return(
    <div>
      {errorDisp}
    </div>
  )
}

const msgClass = {
  'success':'text-green-600',
  'error':'text-red-600',
  'info':'text-blue-600',
}

const Message = ({ msgType, children, errorType,errorData }: IMessage) => {

  const Err = errorType == 'form' ? <FormErrorMessage error={errorData} /> : <ErrMsg  errorDisp = {children}/>
  return (
    <>
      <div className={`${msgClass[msgType!]}`}>
        {Err}
      </div>
    </>
  )
}

export default Message