import React from 'react'
import { buttonProps } from "@/interfaces";

const Button:React.FC<buttonProps> = ({ styles} ) => {
  return (
    <button className={styles}>
      Click Me
    </button>
  )
}

export default Button