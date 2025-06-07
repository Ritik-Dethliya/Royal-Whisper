import { Link } from 'react-router-dom';
import '../Styles/login.css'
function LoginPage() {
    return (  
        <div className="logi-page-body">
            <div className="welcome-image">
            </div>
            <div className="login-form">
                <h3 
                    style={{width:"100%",textAlign:"center"}}
                > User Form</h3>
                <form action="" className='form'>
                    
                    
                    <input className='inpute' type="email" name="email" required placeholder="Enter Your email"/>
                    <input className='inpute' type="password" name="password" placeholder='Enter Password' />
                    <div className="rember-container">
                        <div className='checkbox'>
                            <input type="checkbox" name="" id="" className='checkbox'/>
                            rember me
                        </div>
                        <p>forget password</p>
                    </div>
                    <div className="btn-container">
                         <button className='login-btn'>Login</button>
                    </div>
                   <p className='create-account'>
                       
                       <Link to='/signin'
                            style={{
                                textDecoration:"none",
                                color:"white"
                            }}
                        > Don`t have Account
                        </Link>
                   </p>
                </form>    
            </div>
        </div>
    );
}

export default LoginPage;