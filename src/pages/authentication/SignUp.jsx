import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const { createUser,signInWithGoogle } = useContext(AuthContext);
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

    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const singUpUser = result.user;
                upDateUser(singUpUser, name, photo);
                console.log(singUpUser);
                form.reset();
                if (singUpUser) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "SingUp SuccessFully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                navigate(from, { replace: true })
            })
            .catch((error) => {
                form.reset();
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Error...",
                        text: `${error}`,
                    });
                }
            });

        const upDateUser = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => { })
                .catch((error) => {
                    form.reset();
                    if (error) {
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: `${error}`,
                        });
                    }
                });
        };
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
        <div className="md:pt-24">
            <div className="hero min-h-screen md:mb-2">
                <div className="md:w-3/12 w-full">
                    <div className="card  mx-5 md:mx-0 border-[1px] border-slate-300 rounded-none shadow-2xl bg-white">
                        <form onSubmit={handleSingUp}>
                            <div className="card-body w-full">
                                <h1 className="text-3xl mb-3 font-bold">SignUp now!</h1>
                                <div className="form-control">
                                    <input type="text" name="name" required="required" placeholder="Name*" className="input-field" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="photo" required="required" placeholder="Photo URL *" className="input-field" />
                                </div>
                                <div className="form-control">
                                    <input type="email" name="email" required="required" placeholder="Email *" className="input-field" />
                                </div>
                                <div className="form-control">
                                    <input type={passwordType} name="password" required="required" onChange={handlePasswordChang} placeholder="Password *" className="input-field" />
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
                                    <input className="btn-primary" type="submit" value="Sign Up" />
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
                            <p> Have an account ? <Link to="/login">
                                <span className="text-[#832729] font-semibold hover:font-bold"> Login</span>
                            </Link></p>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;