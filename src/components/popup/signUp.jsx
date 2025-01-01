import Link from 'next/link';
import './page.css';

const SignUp = ({ isActive, onCloseClick, onSignInClick }) => {
    const activeClass = isActive ? 'active' : '';

    return (
        <div className={`popup ${activeClass}`}>
            <div className="signup_popup style_popup">
                <div className="close_popup" onClick={onCloseClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <h2>Sign up</h2>
                <p>Create an account with Bobby</p>
                <div className="popup_container">
                <form action="">
                    <div className="inputText">
                        <input type="text" name="email" id="email" placeholder="email" />
                    </div>
                    <div className="inputPassword inputText">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />
                    </div>
                    <div className="check">
                        <div className="container_check">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>
                            </label>
                        </div>
                        <span>
                            I agree with Bobby s{" "}
                            <Link href="">Terms and Conditions</Link> and that my
                            personal data will be processed pursuant to the{" "}
                            <Link href="">Privacy Policy</Link>.
                        </span>
                    </div>
                    <input type="submit" defaultValue="Sign up" name="signup" />
                </form>
                <div className="or" />
                <div className="connectWallet">
                    <span>Connect</span>
                    <img src="./images/asset/hashpack.webp" alt="" />
                </div>
                <div className="link">
                    <span>Do you have an account?</span>
                    <Link href="" onClick={onSignInClick} className="login">
                    Log in
                    </Link>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default SignUp;