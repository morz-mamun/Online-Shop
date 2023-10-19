import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/login.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'



const Login = () => {
  const {loginUser} = useContext(AuthContext)
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

  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target 
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);

    // login user 
    loginUser(email, password)
    .then(result => {
      if(result.user){
        Toast.fire({
          icon: 'success',
          title: 'User Signed In successfully'
        })
      }
      form.reset()
    })
    .catch(() => {
      Toast.fire({
        icon: 'error',
        title: 'Checked your email and password.'
      })
    })
    navigate('/')
  }

    return (
     <div>
      <div className="hero md:min-h-screen" style={{backgroundImage: `url(${login})`}}>
  <div className="hero-overlay bg-opacity-80"></div>
   
    <div className="bg-black bg-opacity-70 md:py-20 rounded-lg py-2">
  <div className="hero-content flex-col md:px-20 md:space-y-12">
    <div className="w-80 md:w-[550px] text-left">
   
      <h1 className="text-xl md:text-5xl text-red-600 font-bold">Sign in now!</h1>
    </div>
    <div className="w-full text-white">
      <form onSubmit={handleSignIn} className="">
        <div className="form-control ">
          <label className="label">
            <span className="text-white font-bold">Email</span>
          </label>
          <input type="email"
          name="email"
          placeholder="email" className=" text-black input input-bordered w-full" required />
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="text-white font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="text-black input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <button type='submit' className="btn bg-red-600 w-full">Sign In</button>
        </div>
        <div className='mb-5 text-right form-control mt-6'>
        <p className='text-white '>New in this website?! Please first <Link to="/signup"><span className='text-red-600 font-bold underline'>Sing Up</span></Link> here.</p>
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
  </div>

    );
};

export default Login;