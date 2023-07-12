import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register,handleSubmit,formState: { errors }} = useForm();
    const {loginUser} = useContext(AuthContext);

    const handleLogin = (data) =>{
        loginUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('Login Successfull')
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <div className='shadow-lg p-10 rounded w-[500px]'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-black text-center text-3xl'>Login</h2>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "This field is required"
                        })} name="email" className="input input-bordered w-full" />
                        {errors.email && <p>{errors.email?.message}</p>}
                    </div>


                    <div className='mb-4'>

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "This field is required",
                            minLength: { value: 6, message: 'Password must be 6 character long' }
                        })} name="password" className="input input-bordered w-full" />
                        {errors.password && <p>{errors.password?.message}</p>}

                    </div>

                    <div className='text-red-500'>
                        
                    </div>

                    <button className='btn btn-accent w-full text-white'>Login</button>

                    <h3 className='text-sm mt-4 w-[90%] text-center'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create New Account</Link></h3>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                    </div>


                </form>
                <button  className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;