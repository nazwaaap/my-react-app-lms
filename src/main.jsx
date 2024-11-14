import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './styles.css'
import Heading from './components/Heading'
import List from './components/List'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Heading />
      <List />
    </div>
  </React.StrictMode>,
)

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