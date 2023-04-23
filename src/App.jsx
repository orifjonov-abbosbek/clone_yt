import React from 'react'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import HomeScreen from './pages/homescreen/HomeScreen'
import { Container } from 'react-bootstrap'
import './App.scss'
const App = () => {
  return (
    <>
    <Header />

    <div className="app__container border border-info">
        <Sidebar /> 
        <Container className='app__main border border-warning'>
            <HomeScreen />
        </Container>
    </div>
    
    </>
  ) 
}

export default App