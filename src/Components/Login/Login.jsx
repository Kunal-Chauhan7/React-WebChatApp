import { useState } from 'react';
import './Login.css'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Upload } from '../../lib/upload';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const imgUrl = avatar.file ? await Upload(avatar.file) : '';

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "usersChats", res.user.uid), {
                chats: [],
            });

            toast.success("Account Created! You can Login now");
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }

    const handelAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create An Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./assets/avatar.png"} alt="" className='userImg' />
                        Upload an Image
                    </label>
                    <input type="file" id="file" style={{ display: 'none' }} onChange={handelAvatar} />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
