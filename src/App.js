import React from "react";
import './App.css'
import Logo from "./Image/logo.svg"
import Babe from "./Image/img.png"


function App (){
  return(
    <div className="Container">
      <div className="Header">
        <div className="HeaderWrapper">
          <div><img src={Logo} className="Logo" / ></div>
          <div className="Nav">
            
            <p>Products</p>
            <p>Plaform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>

          </div>
        </div>
      </div>


      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
         <h1 className="Heads">Delight made <br/>easy </h1>
         
          <p className="PMan">We make it fast and easy for your business to
            delight customers and employees
          </p>
          <div className="but">
          <button className='but1'>Free Trials</button>
          <button className='but2'>Contact Sales</button>
          </div>

          </div>
          <div>
            <img src={Babe} className="Baby"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App














  // <div className="Main_Container">
    //   <div className="Holder">
    //     <button onClick={Minus}>-</button>
    //     <h2>{add}</h2>
    //     <button onClick={Plus}>+</button>
    //   </div>
    // </div>




  //   const [add, setAdd]= useState(0)

//   function Plus(){
//     setAdd(add +1)
//   }

//   const Minus = () => {
//     setAdd(add -1)
//   }
