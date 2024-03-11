import { useState } from 'react'
import "./adminpanel.style.scss"
import AdminLogin from './adminlogin/AdminLogin'
import AdminContents from './admincontents/AdminContents'
import {NavLink } from 'react-router-dom'
import axios from 'axios'
import { request , response } from './interceptor.js'

const AdminPanel = () => {
    const [data,setData] = useState({login:"",password:""})
    const [adminPanel,setAdminPanel] = useState(false)
    const [isTrue,setIsTrue] = useState(false)

    function handleChange({value,name}){
        setData({...data,[name]:value})
    }
    
    function handleClick (){
  
        
        axios.post('http://localhost:5005/api/v1/admin/login',{
            email:data.login,
            password:data.password
          })
          .then(({data}) => {
            console.log(data)
            request(data)
            response()
            setAdminPanel(true)
          })
          .catch(function (error) {
            console.log(error)
            setIsTrue(true)
          })
        
    }

    return (
    <div className='admin_panel_container'>
        <div className='admin_panel_logo'>
            <img src="/img/Hetaxuyz LOGO.png" alt="Հետախույզ լրատվական լոգո" />
            <hr/>
        </div>
        {!adminPanel?
        <AdminLogin isTrue={isTrue} handleClick={handleClick} handleChange={handleChange} data={data}/>
        :<AdminContents/>}
    </div>
  )
}

export default AdminPanel