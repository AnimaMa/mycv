import React from "react"

export interface ContentProps {
  className?: string
}

export const Content = (props: ContentProps) => {
  return (
    <div className="conatiner mx-aut sm:w-3/4 py-10 ">
      <div className="  bg-scroll w-full">
        <h1>Content</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus, magnam maiores, adipisci nam quaerat
        dolorum, distinctio nobis et voluptatibus vel! Omnis id harum accusamus mollitia illo. Eveniet, doloremque
        labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi expedita autem ab debitis? Eum ut ex
        magni ipsa incidunt amet velit voluptatibus dolor aspernatur obcaecati odit blanditiis praesentium, quia
        eveniet!
      </div>
    </div>
  )
}
