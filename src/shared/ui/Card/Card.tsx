interface ICard{
    children : React.ReactNode
}

const Card = ({children}:ICard) => {
  return (
    <div className="border-2 bg-white px-8 py-4 shadow-md rounded-md w-full">
        {children}
    </div>
  )
}

export default Card