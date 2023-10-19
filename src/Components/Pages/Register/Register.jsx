import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/login.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import Swal from 'sweetalert2'

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);
    // create user 
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        if(result.user){
          Toast.fire({
            icon: 'success',
            title: 'User Signed Up successfully'
          })
        }
        form.reset()
      })
      .catch(err => {
        console.log(err.message);
      })
      navigate('/signin')
  }
  return (
    <div>
      <div className="hero h-[550px] md:min-h-screen" style={{ backgroundImage: `url(${login})` }}>
        <div className="hero-overlay bg-opacity-80"></div>

        <div className="bg-black bg-opacity-70 md:py-20 rounded-lg py-2 my-5">
          <div className="hero-content flex-col md:px-20 md:space-y-12">
            <div className="w-80 md:w-[550px] text-left">

              <h1 className="text-xl md:text-5xl text-red-600 font-bold">Sign Up now!</h1>
            </div>
            <div className="w-full text-white">
              <form onSubmit={handleSignUp}>
                <div className="form-control ">
                  <label className="label">
                    <span className="text-white font-bold">Name</span>
                  </label>
                  <input type="text"
                    name="name"
                    placeholder="Name" className="input input-bordered w-full text-black" />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="text-white font-bold">Email</span>
                  </label>
                  <input type="email"
                    name="email"
                    placeholder="Email" className="input input-bordered w-full text-black" required />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="text-white font-bold">Password</span>
                  </label>
                  <input type="password"
                    name="password"
                    placeholder="Password" className="input input-bordered text-black" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  
                    <button type='submit' className="btn bg-red-600 w-full">Sign Up</button>
              
                </div>
                <div className='mb-5 text-right form-control mt-6'>
                  <p className='text-white '>Already have an account please <Link to="/signin"><span className='text-red-600 font-bold underline'>Sing in</span></Link> here.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;