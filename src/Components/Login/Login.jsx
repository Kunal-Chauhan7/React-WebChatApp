import { useState } from 'react';
import './Login.css'
const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })
    const handelAvatar = (e)=>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }
    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back,</h2>
                <form>
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2>Create An Account</h2>
                <form>
                    <label htmlFor="file">
                    <img src={avatar.url||"./assets/avatar.png"} alt="" className='userImg' />
                        Upload an Image
                    </label>
                    <input type="file" id="file"  style={{display:'none'}} onChange={handelAvatar}/>
                    <input type="text" placeholder='Username' name='username' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
export default Login;