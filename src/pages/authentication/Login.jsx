import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { singIn, signInWithGoogle } = useContext(AuthContext)
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const navigate = useNavigate()

    const from = "/"

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    const handlePasswordChang = (event) => {
        setPasswordInput(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const loginUser = result.user;
                form.reset()
                if (loginUser) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                form.reset()
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: `${error}`
                    })
                }
            })

    };
    const handleLoginGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                if (loginUser) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: `${error}`
                    })
                }
            })
    }
    return (
        <div className='md:pt-10'>
            <div className="hero min-h-screen md:mb-2">
                <div className="md:w-3/12 w-full">
                    <div className="card  mx-5 md:mx-0 border-[1px] border-slate-300 rounded-none shadow-2xl bg-white">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body w-full">
                                <h1 className="text-3xl mb-3 font-bold">Login now!</h1>
                                <div className="form-control">
                                    <input type="email" name="email" required="required" placeholder="Email *" className="input-field" />
                                </div>
                                <div className="form-control">
                                    <input type={passwordType} required="required" name="password" onChange={handlePasswordChang} placeholder="Password *" className="input-field" />
                                    <div className="text-end -mt-10 mr-5">
                                        <button onMouseUp={togglePassword}>
                                            {passwordType === "password" ? (
                                                <FaEye></FaEye>
                                            ) : (
                                                <FaEyeSlash></FaEyeSlash>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn-primary">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className="text-center ml-5">
                                    <button onClick={handleLoginGoogle} className="shadow-2xl border-2 mr-5 hover:border-[#953333] rounded-full p-2"><FcGoogle className="text-2xl"></FcGoogle></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card mx-5 md:mx-0 border-[1px] border-slate-300 rounded-none shadow-2xl bg-white my-3">
                        <p className="px-10 py-5">
                            <p> Don't have an account? <Link to="/signUp">
                                <span className="text-[#832729] font-semibold hover:font-bold"> Sign Up</span>
                            </Link></p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

