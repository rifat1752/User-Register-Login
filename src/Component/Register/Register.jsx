import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import {FaEyeSlash , FaRegEye } from "react-icons/fa";


import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError, setRegisterError]=useState('');
    const [success, setSuccess] = useState('')
    const [hide, setHide] = useState(true)
    const handleRegister =e=> {
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);
       if(password.length<6){
        setRegisterError('Password should be at least 6 characters or longer')
        return;
       }
       else if(!/[A-Z]/.test(password)){
        setRegisterError('one uppercase required')
        return;}

       setRegisterError('');
       setSuccess('');
    //    create user
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const User= result.user;
        console.log(User);
        setSuccess('Account created successfully');
    })
    .catch(error=>{
        console.log(error.message);
        setRegisterError(error.message);
    })
    }
    const typeChange=()=>{
        setHide(!hide)
    }

    return (
        <div className="mt-20">
            <h1 className="text-center mb-5 text-3xl font-semibold">Please Register:</h1>
           
            <form onSubmit={handleRegister} className="border py-5 h-auto rounded shadow-2xl bg-slate-800 w-[400px] mx-auto flex flex-col justify-center items-center" action="">
                <div ><label className="text-white" htmlFor="">Email : </label>
                <input className="pl-2 h-8 outline-none  rounded border-slate-600"  type="email" name="email" id="" /></div>
                <br />
               <div className="flex ml-5"> <label className="text-white" htmlFor="">Pass : </label>
                <div className="flex ml-2 items-center">
                <input className="mx-2 pl-2 h-8 outline-none   rounded border-slate-600 " type={hide?'password':'text'} name="password" id="" /> <span onClick={typeChange} className="text-white ">{hide?<FaEyeSlash />:<FaRegEye />}  </span>
                    </div>
                    </div>
                <br />
                <p className="text-xs text-white mb-5">Already Have an Account? <Link className="underline text-blue-300" to='/login'> Log in</Link></p>
                <input className="w-20 h-8   rounded bg-orange-400 border-slate-600" type="submit" value=" Register" />
                {
            registerError &&  <p className="text-red-500 font-bold text-lg text-center mt-10">{registerError}</p>
           }
           {
            success && <p className="text-green-500 font-bold text-lg text-center mt-10">{success}</p>
           }
            </form>
           
        </div>
    );
};

export default Register;