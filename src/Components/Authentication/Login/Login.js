import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import {GoogleAuthProvider} from 'firebase/auth';
import swal from 'sweetalert';





const Login = () => {
  const [success, setSuccess] = useState(false);
  const {signIn, providerLogin} = useContext(AuthContext);
  const [error, setError] = useState('');



  const googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate();
  const location =  useLocation();
  const from = location.state?.from?.pathname || '/'



  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
    })
    .catch(error => console.error(error))
  }
  
  const handleSubmit = event =>{
    event.preventDefault();
    setSuccess(false);

    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        // alert('successfully login')
        swal("Good job!", "Successfully Login!", "success");
        navigate(from, {replace: true});
    })
    .catch(error => {
      console.error(error)
      setError(error.message);
     
    })
  }


    return (
     <div>
      
         <div className='flex justify-center text-black mb-14 py-28 '>
           <div className="card w-full max-w-lg shadow-2xl bg-green-50">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <h1 className='font-bold text-lime text-3xl text-center my-6'>Login Now</h1>
            
          <label className="label">
            <span className="label-text text-black">Email Address</span>
          </label>
          <input name='email' type="email"  placeholder="email" className="input input-bordered border-zinc-900 bg-white"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered border-zinc-900 bg-white" required />
          <label className="label text-purple-700">
          {success && <p>Successfully login to the account</p>}
          </label>
        </div>
        <div className="form-control mt-4">
        <input type="submit"  className="btn btn-success bg-lime hover:bg-black hover:text-white" value="login"/>
        </div>
        <div className="divider">Or Log in with</div>
      </form>
    
      <div className='mb-4 flex justify-center  mx-8 -mt-6'>
      <button onClick={handleGoogleSignIn} className="btn btn-outline hover:bg-black text-lime hover:text-white text-bold w-full mx-4"><p className='px-2 text-lime '><FaGoogle className='text-lime text-lg'></FaGoogle></p > Login with google</button>
       
        </div>
        <p className='text-red text-center font-semibold'>{error}</p>
       <div className='flex justify-around mb-6 mx-8'>
       <p>Need an account..?</p>
           <p> <Link to='/register' className=" font-semibold hover:link-hover text-blue">Register</Link></p>
       </div>
    </div>
        </div>
     </div>

    );
};

export default Login;
