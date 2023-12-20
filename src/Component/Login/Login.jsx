import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] =useState('')
    const [success,setSuccess] = useState('');

    const handleForgetPass=e=>{
        sendPasswordResetEmail
    }

  const  handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError('');
    setSuccess('');

    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        setSuccess('Log in Successful')
    })
    .catch(error=>{
        console.log(error.message);
        setError('Invalid email or Password')
    })
    }


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label flex flex-col items-start">
            <a href="#" onClick={handleForgetPass} className="label-text-alt link link-hover">Forgot password?</a>
            <p className="text-xs ">Don&apos;t Have an Account? <Link className="underline text-blue-500" to='/register'>Register Here</Link> </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    
      {success && <p className="text-green-500 mb-5 text-lg font-bold text-center" >{success}</p>}
      {error && <p className="text-red-500 mb-5 text-lg font-bold text-center">{error}</p>}
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;