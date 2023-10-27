import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser}= useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // createUser firebase 
        createUser(email, password)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            e.target.reset();
        })

    }


    return (
        <div>
        <div className="flex ml-52 gap-8 mb-20">
            <div className="">
                <img className="w-[400px] h-[350px] my-16" src="/public/assets/images/login/login.svg" alt="" />
            </div>
            <div className="border lg:w-[500px] rounded-lg p-12 h-[500px]">
                <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">SignUp</h2>
                <div>
                    <form onSubmit={handleSignUp}>

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

export default Register;