import React from "react"

interface ILayout{
    children : React.ReactNode
}

const Layout = ({children}:ILayout) => {
  return (
    <div  className="container mx-auto my-5 h-screen flex justify-center w-[500px] items-center">
        {children}
    </div>
  )
}

export default Layout