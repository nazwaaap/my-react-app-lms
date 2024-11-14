import React from 'react';
import ReactDOM from 'react-dom/client'
import './styles.css'
// import App from './App/jsx'
// import './index.css'

function Card(props) {
  return (
    <div className='my-style'>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt='fruit_img'
        style={{width: '150px', height: '150px'}}
      />
      <p>Harga: {props.harga}</p>
      <p>Stok: {props.stok}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>Toko Buah</h1>
      <Card
        name="Apel"
        img="https://asset.kompas.com/crops/edXTLdy8MyoWURzug5j6nCVhhxM=/21x0:1476x970/750x500/data/photo/2022/08/30/630d7ae5d041f.jpg"
        harga="25000"
        stok="15"
      />
      <Card
        name="Jeruk"
        img="https://faperta.umsu.ac.id/wp-content/uploads/2023/06/Manfaat-Buah-Jeruk-1140x570.png"
        harga="20000"
        stok="10"
      />
      <Card
        name="Mangga"
        img="https://asset.kompas.com/crops/xHpaaT9LBsjqfk0sOAYNwUNNQ8Q=/0x0:1000x667/750x500/data/photo/2023/09/22/650cf91bdc362.jpg"
        harga="30000"
        stok="30"
      />
    </div>
  </React.StrictMode>
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// // import './index.css'
// // import './styles.css'
// import Heading from './components/Heading'
// import List from './components/List'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div>
//       <Heading />
//       <List />
//     </div>
//   </React.StrictMode>,
// )

// const myName = "Nazwa Praditta"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div>
//       <h1 className="heading">{myName} My Favorite Foods</h1>
//       <ul>
//         <li>Burger</li>
//         <li>Noodles</li>
//         <li>Martabak</li>
//       </ul>
//     </div>
//   </React.StrictMode>,
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <h1>Hello World</h1>
// )

// var h1 = document.createElement('h1')
// h1.innerHTML = "Hello World"
// document.getElementById('root').appendChild(h1)