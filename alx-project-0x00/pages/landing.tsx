import Button from "@/components/Button"
import Card from "@/components/Card"
import React from "react"

const landing:React.FC = () => {
  return (
    <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button
          styles="bg-red-500 text-white px-4 py-2 rounded-sm rounded-lg"
        />
    </div>
  )
}

export default landing