import { useState } from "react"

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
      setHeadingText("Submitted");
  }

  function handleMouseOver() {
      setMouseOver(true);
  }

  function handleMouseOut() {
      setMouseOver(false);
  }

  return (
      <div className="container">
          <h1>{headingText}</h1>
          <input type="text" placeholder="What's your name?" />
          <button
              style={{ backgroundColor: isMouseOver ? "black" : "white" }}
              onClick={handleClick}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              >Submit
          </button>
      </div>
  );
}

export default App

// ----- di bawah ini code counter app -----
// import { useState } from "react"

// function App() {
//   const [ count, setCount ] = useState(0)

//   function increase() {
//     setCount(count + 1)
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>
//   )
// }

// export default App

// ----- dibawah ini adalah code toko buah -----

// import './App.css';
// import Card from './components/Card';

// function App() {
//   return (
//     <div>
//       <h1 className="heading">Toko Buah</h1>
//       <Card
//         name="Apel"
//         img="https://asset.kompas.com/crops/edXTLdy8MyoWURzug5j6nCVhhxM=/21x0:1476x970/750x500/data/photo/2022/08/30/630d7ae5d041f.jpg"
//         harga="25000"
//         stok="15"
//       />
//       <Card
//         name="Jeruk"
//         img="https://faperta.umsu.ac.id/wp-content/uploads/2023/06/Manfaat-Buah-Jeruk-1140x570.png"
//         harga="20000"
//         stok="10"
//       />
//       <Card
//         name="Mangga"
//         img="https://asset.kompas.com/crops/xHpaaT9LBsjqfk0sOAYNwUNNQ8Q=/0x0:1000x667/750x500/data/photo/2023/09/22/650cf91bdc362.jpg"
//         harga="30000"
//         stok="30"
//       />
//     </div>
//   );
// }

// export default App