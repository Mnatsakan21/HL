import { useRef, useState } from 'react'
import "./adminpanel.style.scss"
import AdminLogin from './adminlogin/AdminLogin'
import AdminContents from './admincontents/AdminContents'
import {NavLink } from 'react-router-dom'

const loginData = {login:"Valod",password:"123456"}

const AdminPanel = () => {
    const [data,setData] = useState({login:"",password:""})
    
    const [adminPanel,setAdminPanel] = useState(true)
    
    
    function handleChange({value,name}){
        setData({...data,[name]:value})
    }
    
    function handleClick (){
        if(loginData.login == data.login && loginData.password == data.password)setAdminPanel(true)
        
        setData({login:"",password:""})
    }


    return (
    <div className='admin_panel_container'>
        <div className='admin_panel_logo'>
            <NavLink to="/"><img src="/img/Hetaxuyz LOGO.png" alt="Հետախույզ լրատվական լոգո" />
            </NavLink>
            <hr/>
        </div>
        {!adminPanel?
        <AdminLogin render={handleClick} handleChange={handleChange} data={data}/>
        :<AdminContents/>}
    </div>
  )
}

export default AdminPanel