import React from 'react'
import { buttonProps } from "@/interfaces";

const Button:React.FC<buttonProps> = ({ shape ,sizes,color,text} ) => {
  return (
    <button className={`bg-${color} text-white ${sizes} ${shape} px-4 py-2 rounded`}>
      Click Me
    </button>
  )
}

export default Button