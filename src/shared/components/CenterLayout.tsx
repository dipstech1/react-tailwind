import React from "react"

interface ICenterLayout{
    children : React.ReactNode
}

const CenterLayout = ({children}:ICenterLayout) => {
  return (
    <div  className="container mx-auto h-screen flex justify-center w-[500px] items-center">
        {children}
    </div>
  )
}

export default CenterLayout