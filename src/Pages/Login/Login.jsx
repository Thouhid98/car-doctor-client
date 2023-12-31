
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {
    const { signinUser } = useContext(AuthContext);

    const handleLogin = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);


        // user SignIn firebase 
        signinUser(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email}
            // Using Axios for post Request 
            axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
            .then(res =>{
                console.log(res.data);
            })
        })
        .then()
       

    }


    return (
        <div>
            <div className="flex ml-52 gap-8 mb-20">
                <div className="">
                    <img className="w-[400px] h-[350px] my-16" src="/public/assets/images/login/login.svg" alt="" />
                </div>
                <div className="border lg:w-[500px] rounded-lg p-12 h-[500px]">
                    <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">Login</h2>
                    <div>
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Email </span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>

                            {/* <Link to='/login'> */}
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">LogIn</button>
                            </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-base ml-40 text-center">Or Sign In with</a>
                                </label>
                                    
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;