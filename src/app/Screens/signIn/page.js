import Image from 'next/image';
import logo2 from '../assets/logo2.png';
import Link from 'next/link';


export default function signIn() {
    return (
        <main className="form-container">
            <section className='secondary-container'>
                <nav>
                    <Image
                        src={logo2}
                        alt="App Logo"
                        width={50}
                        height={50}
                        style={{ margin: "20px" }}
                    />
                </nav>


                <form>
                    <h1>Sign In</h1>
                    <h2>Or <Link href="/Screens/signUp" style={{ color: '#3B82F6' }}>Sign Up</Link></h2>
                    <section className='input-section'>
                        <input placeholder='Email' type='email' required />
                        <input placeholder='Password' type='password' required />
                        <Link href="#">Forgot Password?</Link>
                        <button className='main-button'>Sign In</button>
                    </section>
                </form>
            </section>
        </main>
    )
}