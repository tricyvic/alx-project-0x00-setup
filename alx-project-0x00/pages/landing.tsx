import Button from "@/components/Button"
import Card from "@/components/Card"
import React from "react"

const landing:React.FC = () => {
  return (
    <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button
          sizes="text-sm"
          shape="rounded-full"
          color="bg-red-500"
          text="Click Me Now"
        />
    </div>
  )
}

export default landing