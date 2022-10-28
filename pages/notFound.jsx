import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
const notFound = () => {
  return (
    <div className="container h-screen w-screen flex justify-center items-center">
        <h1>Workign on it!</h1>
      <Player
                src="https://assets1.lottiefiles.com/packages/lf20_p5bw8zmp.json"
                loop
                className="ml-5 p-3"
                autoplay
              />
    </div>
  )
}

export default notFound 
