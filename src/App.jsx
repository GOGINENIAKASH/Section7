import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1 from './Components/Lab1'
import Lab2 from './Components/Lab2'
import Lab3 from './Components/Lab3'
import Lab4 from './Components/Lab4'
import Lab5 from './Components/Lab5'
import Lab6 from './Components/Lab6'
import Lab7 from './Components/Lab7'
import Lab8 from './Components/Lab8'
import {Link} from 'react-router-dom'
import Lab9 from './Components/Lab9'
import MyApiCRUD from './Components/MyApiCRUD'
import Lab10 from './Components/Lab10'
import Userdashboard from './Components/Userdashboard'
import Admindashboard from './Components/Admindashboard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <table  border="2" width="100%">
      <tr className="tblHeader">
        <td> S.No </td>
        <td> Lab </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 1 </td>
        <td> <Link to ="/lab1">Lab1</Link> </td>
        <td> Alignment and css </td>
      </tr>
      <tr>
        <td> 2 </td>
        <td> <Link to ="/lab2">Lab2</Link> </td>
        <td> DOM-Tree,media class,flex </td>
      </tr>
      <tr>
        <td> 3 </td>
        <td> <Link to ="/lab3">Lab3</Link> </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 4 </td>
        <td> <Link to ="/lab4">Lab4</Link> </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 5 </td>
        <td> <Link to ="/lab5">Lab5</Link> </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 6 </td>
        <td> <Link to ="/lab6">Lab6</Link> </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 7 </td>
        <td> <Link to ="/lab7">Lab7</Link> </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 8 </td>
        <td> <Link to ="/lab8">Lab8</Link> </td>
        <td> Spring Boot with Rest API and CRUD Operations </td>
      </tr>
      <tr>
        <td> 9 </td>
        <td> <Link to ="/lab9">Lab9</Link> </td>
        <td> SNumberListComponents </td>
      </tr>
      <tr>
        <td>  </td>
        <td> <Link to ="/myapiCRUD">MyApiCRUD</Link> </td>
        <td> myapicrud operations </td>
      </tr>
      <tr>
                <td>10</td>
                <td>
                  <Link to="/lab10">Lab10</Link>
                </td>
                <td>
                  Role based navigation
                </td>
              </tr>
    </table>
    
    </>
  )
}

export default App
