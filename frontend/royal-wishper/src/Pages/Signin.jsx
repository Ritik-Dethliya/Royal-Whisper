import { Link } from 'react-router-dom';
import '../Styles/login.css'
import { useRef } from 'react';
function SignInPage() {
    const nameref=useRef('')
    const emailref=useRef('')
    const mobileref=useRef('')
    const passwordref=useRef('')
    const handelSignin=()=>{

    }
    return (  
        <div className="logi-page-body">
            <div className="login-form">
                <h3 
                    style={{width:"100%",textAlign:"center"}}
                > User Sign-in</h3>
                <form action="" className='form'>
                    <input className='inpute' type="text" name="username" placeholder='Enter username' />
                    <input className='inpute' type="email" name="email" required placeholder="Enter Your email"/>
                    <input className='inpute' type="number" maxLength={10} placeholder='Enter mobile no.' />
                    <input className='inpute' type="password" name="password" placeholder='Enter Password' />
                    <div className="btn-container">
                         <button className='signin-btn'
                            onClick={handelSignin}
                         >Sign-in</button>
                    </div>
                   <p className='create-account'>
                        <Link to='/login'
                            style={{
                                textDecoration:"none",
                                color:"white"
                            }}
                        >Already have Account</Link>
                   </p>
                </form>    
            </div>
        </div>
    );
}

export default SignInPage;