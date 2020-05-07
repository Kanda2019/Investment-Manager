import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import './home.css';
import Overview from './Components/Overview'
import Asset from './Components/Asset'
import Investment from './Components/Investment'
import Goal from './Components/Goal'
import Income from './Components/Income'
import Insurance from './Components/Insurance'
import Cashflow from './Components/Cashflow'
import FinancialPlan from './Components/FinancialPlan'

export default class HomePage extends Component {
  state = { activeItem: 'menu1'}
  
  handleItemClick = (e, { name }) => 
  {
    console.log("handleItemClick:",name);
    this.setState({ activeItem: name })
 }
 
  render() {
    const { activeItem} = this.state
    return (
      <div>
      <div style = {{width: '100%',height:'2%'}}>  
         <Image style = {{width: '100%',height:'0.1%'}} src={require('./images/Investment_Logo.png')}/>
      </div>
    	<div style = {{width: '100%',align:'center'}}>
        <Menu pointing secondary color = 'green' size ='massive' >
           <Menu.Item
            name='menu1'
            content='Overview '
            active={activeItem === 'menu1'}
            href="/home"
            onClick={this.handleItemClick}
           
          />
          <Menu.Item
            name='menu2'
            content='Assets'
            active={activeItem === 'menu2'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='menu3'
            content='Cashflow'
            active={activeItem === 'menu3'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='menu4'
            content='Income'
            active={activeItem === 'menu4'}
            onClick={this.handleItemClick}
          />
         <Menu.Item
         	name='menu5'
           content='Investment'
	        active={activeItem === 'menu5'}
	        onClick={this.handleItemClick}
          />
         <Menu.Item
         	name='menu6'
           content='Insurance'
	        active={activeItem === 'menu6'}
	        onClick={this.handleItemClick}
          />
         <Menu.Item
         	name='menu7'
           content='Financial Plan'
	        active={activeItem === 'menu7'}
	        onClick={this.handleItemClick}
          />
         <Menu.Item
         	name='menu8'
           content='Financial Goal'
	        active={activeItem === 'menu8'}
	        onClick={this.handleItemClick}
          />
        </Menu>
        <Segment>
            <RenderedContent tabName={activeItem} />
        </Segment>
        </div>
      </div>
    )
  }
}

const RenderedContent = ({ tabName }) => {
   if (tabName === 'menu1') {
       return <Home />
   }
   if (tabName === 'menu2') {
       return <Menu2 />
   }
   if (tabName === 'menu3') {
      return <Menu3 />
  }
  if (tabName === 'menu4') {
     return <Menu4 />
  }
  if (tabName === 'menu5') {
     return <Menu5 />
 }
 if (tabName === 'menu6') {
    return <Menu6 />
 }
 if (tabName === 'menu7') {
   return <Menu7 />
 }
 if (tabName === 'menu8') {
   return <Menu8 />
 }
}

const Home = () => (
  <Overview/>
)
const Menu2 = () => (
   <Asset/>
)
const Menu3 = () => (
   <Cashflow/>
)
const Menu4 = () => (
   <Income/>
)
const Menu5 = () => (
   <Investment/>
)
const Menu6 = () => (
   <Insurance/>
)
const Menu7 = () => (
   <FinancialPlan/>
)
const Menu8 = () => (
   <Goal/>
)