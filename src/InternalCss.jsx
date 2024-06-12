import React from 'react'

const InternalCss = () => {
    const h1Style ={backgroundColor: "yellow",padding:"30px"};

    const h2Style ={color: "green"};

    const paragraph ={backgroundColor:"pink"}


  return (
    <div>
        <h1 style={h1Style}>Welcome</h1>
        <h2 style={h2Style}>Internal CSS Styling</h2>
        <p style={paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime inventore asperiores molestias, consectetur rem amet deserunt aliquam, dignissimos veritatis et sunt quam laboriosam a voluptatibus sapiente repudiandae dolor voluptatum atque consequatur iure ut totam. Pariatur aspernatur necessitatibus sed quas a assumenda quis, modi recusandae maiores! Doloremque accusantium, sequi ad perspiciatis, quam illo quae officiis tenetur ipsam dolorum quisquam vel nisi? Aliquid illo autem iste iure saepe, minus veniam voluptatibus rerum ad sit, hic voluptatem exercitationem aspernatur sapiente! Veniam nisi consequuntur consectetur error magnam sapiente eum eius quibusdam natus nam optio fugit quas magni, sed quos repudiandae voluptatibus enim, dicta commodi.</p>
    </div>
  )
}

export default InternalCss