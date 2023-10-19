import { Link } from 'react-router-dom';
import login from '../../../assets/login.jpg'

const Register = () => {
    return (
        <div>
        <div className="hero h-[550px] md:min-h-screen" style={{backgroundImage: `url(${login})`}}>
    <div className="hero-overlay bg-opacity-80"></div>
     
      <div className="bg-black bg-opacity-70 md:py-20 rounded-lg py-5">
    <div className="hero-content flex-col md:px-20 md:space-y-12">
      <div className="w-96 md:w-[550px] text-left">
     
        <h1 className="text-5xl text-red-600 font-bold">Sign Up now!</h1>
      </div>
      <div className="w-full text-white">
        <form className="">
          <div className="form-control ">
            <label className="label">
              <span className="text-white font-bold">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered w-full" required />
          </div>
          <div className="form-control mt-5">
            <label className="label">
              <span className="text-white font-bold">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
           <Link to="/"> 
           <button className="btn bg-red-600 w-full">Login</button>
           </Link>
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

export default Register;