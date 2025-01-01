import './page.css';
import Link from 'next/link';
import Image from 'next/image';
const SignIn = ({ isActive, onSignUpClick, onCloseClick }) => {
    const activeClass = isActive ? 'active' : '';
    return (
        <div className={`popup ${activeClass}`}>
            <div className="login_popup style_popup">
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
                <h2>Login</h2>
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
                        <div className="link">
                        <Link href="">Forgot password?</Link>
                        </div>
                        <input type="submit" defaultValue="Login" name="login" />
                    </form>
                    <div className="or" />
                    <div className="connectWallet">
                        <span>Connect</span>
                        <Image width='200' height='200' src="/images/asset/hashpack.webp" alt="" />
                    </div>
                    <div className="link">
                        <span>Dont have an account?</span>
                        <Link href="" onClick={onSignUpClick} id="signup">
                        Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;