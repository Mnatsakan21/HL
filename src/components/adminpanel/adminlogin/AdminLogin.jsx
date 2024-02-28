import "./adminlogin.style.scss"

const AdminLogin = ({render,handleChange,data}) => {
    
  return (
    <div className='admin_panel_login'>
            <h2>Login</h2>
            <form className='admin_panel_inputs' >
                
                <div>
                    <label>Login</label>
                    <input onChange={({target})=>handleChange(target)} value={data.login}  type="text"  name='login' />
                </div>
                <div>
                    <label>Password</label>
                    <input  autoComplete='on' onChange={({target})=>handleChange(target)} value={data.password} type="password" name='password'/>
                </div>
                <div className='admin_panel_checkbox'>
                    <div>
                    <input type="checkbox" name=""/>
                    <span>Remember me</span>
                    </div>
                    <div>
                        <p>Forgot Password?</p>
                    </div>
                </div>
                <input onClick={()=>render()} type="button" value="Enter"/>
            </form>
        </div>
  )
}

export default AdminLogin