import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

import { useState } from "react";
import { Link } from "react-router-dom";


const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('')
    const handleRegister =e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError('')

        createUserWithEmailAndPassword(auth,email, password)
        .then(Result=>{
            const User = Result.user;
            console.log(User);
        })
        .catch(error=>{
            console.log(error.message);
            setRegisterError(error.message);
        })
     }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
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
          <label className="label">
          <p className="text-xs">Already Have an Account? <Link className="underline text-blue-600" to='/login'> Log in</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {registerError && 
      <p className="text-red-500 text-lg font-semibold text-center mb-5">{registerError}</p>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default HeroRegister;