import '../styles/Login.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {  Link, useNavigate } from 'react-router-dom';



const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('password is required'),
});
function Login() {
    const navigate =useNavigate()
    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        navigate("/home")
        console.log(data);
        reset();
    }
    

    return (
        <div className="myLoginPage">
            <section className="mainLogin">
            <img className="logo" src="https://s3-alpha-sig.figma.com/img/a7f1/7187/c805adbfbac24bbcb0e7d7ac5b60dba3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO4lQohnI4OqwxLMmz-oq1BT67wvYD8mexUYCC8PkajKtoiSUxmUHw5DzksDtboC7OejbuBFO5GA68pTbUlLLcugNo2qjkmNqdNmmS0hGunznlOhHnTFFPhfwECMJKMXhH8ba8D8KpFrOuCui~SWhiIwykY3i~fDyszl8Y7BLlol35jrUue0Dd1q2de3qnq3cO6RlECGPE7EYh6YvYXuse4fmqRucmU6HDZ5GT8obUE-gAjXvMeZfuoNate9Qnttk7vxYISf35NrP5wxvRqb1NoTlWND22~5h-cqMqTwBs4mhVn2RhxX~c41MbBY09xUSUFiMaji1TqYhj1iEzt75Q__" alt="" />
                    <section className='welcome'>
                        <p className='greeting'>Welcome Back!</p>
                        <p className='about'>Sign in to continue to yourDigital Library</p>
                    </section>
                    <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
                        <section>
                        <label htmlFor="">Email</label><br />
                        <input className='loginFormInput' type="email" placeholder="username@collegename.ac.in" {...register('email')}/><br />
                        <p className='errorMessage'>{errors.email?.message}</p>
                        </section>
                        <section>
                        <label htmlFor="">Password</label><br />
                        <input className='loginFormInput' type="password" placeholder="Password" {...register('password')}/>
                        <p className='errorMessage'>{errors.password?.message}</p>
                        </section>
                        <section className='flexRow'> <p className='checkboxContent'><input type="checkbox" name="Remember me" id="" /> <label htmlFor="">Remember me</label></p>  <a href="">Forgot Password?</a></section>
                        <input className='loginButton' type="submit"  value="Login" />
                    </form>
                        <section className='flexRow others'><p>New User? <Link to='/register'>Register Here</Link></p> <p>Use as Guest</p></section>
            </section>
        </div>
    );
}

export default Login;