import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import arrow from './images/Group 1.svg'
import logo from './images/z-logo-default.svg';
import search_icon from './images/ion_search.svg';
import { c1,c2,c3,c4,c5,c6 } from './images';
const Navbar =()=>{
  return (
    <>
    <div className='navbar'>
      <div>Buy</div>
      <div>Rent</div>
      <div>Sell</div>
      <div>Home Loans</div>
      <div>Agent finder</div>
      <div className='logo'><img src={logo}/></div>
      <div>Manage Rentals</div>
      <div>Advertise</div>
      <div>Help</div>
      <div>Sign in</div>
    </div>
    </>
  );

}
const Card = ({image})=>{
  return(
    <>
      <div className='Card'>
        <img src={image} height={'200'} width={'350'}/>
        <h3>$123,456</h3>
        <p>2 bds | 2ba | 1,088 sqft | Active</p>
        <p >9210 B Roosevelt Way NE , Seattle, Wa, 98115</p>
        <span style={{fontSize:'12px'}}>9210 B Roosevelt Way NE , Seattle, Wa, 98115</span>
      </div>
    </>
  );
}
const Cards = ()=>{
  return (
    <>
    <div className='Container'>
      
    <h3>Homes For You</h3>
    <p>Based on homes you recently viewed
    </p>
    <div style={{display:'flex',justifyContent:'flex-end'}}><img src={arrow}/></div>
    <div className='Coursal'>
    <Card image={c1}/>
    <Card image={c2}/>
    <Card image={c3}/>
    <Card image={c4}/>
    <Card image={c5}/>
    <Card image={c6}/>
    </div>
    </div>
    </>
  );
}
const Search =()=>{
  return (
    <>
    <div className='Search'>
      <h1>Agent.Tours.Loans.Homes</h1>
      <div className='bar'>
      <input type='text' placeholder='Enter a address,neighborhood, city or Zip code'/>
      <button className='button'><img src={search_icon}/></button>
      </div>
    </div>
    </>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Search/>
      <Cards/>
    </>
  )
}

export default App
