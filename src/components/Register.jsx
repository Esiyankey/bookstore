import '../styles/Register.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    studentNumber: yup.string().required("Student number required"),
    collegeEmail: yup.string('email ').email().required('Email is required'),
    password: yup.string().required('password is required'),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null], 'Password must match').required('confirm password'),
});

function Register() {

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    const StudentNum =(value) =>{
        const numericValue = value.replace(/\D/g, '');
        return numericValue;
    }

    return (
        <div className="myRegisterPage">
            <section className="mainRegister">
            <img className="logo" src="https://s3-alpha-sig.figma.com/img/a7f1/7187/c805adbfbac24bbcb0e7d7ac5b60dba3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO4lQohnI4OqwxLMmz-oq1BT67wvYD8mexUYCC8PkajKtoiSUxmUHw5DzksDtboC7OejbuBFO5GA68pTbUlLLcugNo2qjkmNqdNmmS0hGunznlOhHnTFFPhfwECMJKMXhH8ba8D8KpFrOuCui~SWhiIwykY3i~fDyszl8Y7BLlol35jrUue0Dd1q2de3qnq3cO6RlECGPE7EYh6YvYXuse4fmqRucmU6HDZ5GT8obUE-gAjXvMeZfuoNate9Qnttk7vxYISf35NrP5wxvRqb1NoTlWND22~5h-cqMqTwBs4mhVn2RhxX~c41MbBY09xUSUFiMaji1TqYhj1iEzt75Q__" alt="" />
                    <section className='welcome'>
                        <p className='greeting'>Registration</p>
                        <p className='about'></p>
                    </section>



                    <form onSubmit={handleSubmit(onSubmit)} className='RegisterForm'>
                        <section className='fieldSection'>
                            <label htmlFor="">Student Number</label><br />
                            <input className='RegisterFormInput studentNumber' 
                                type="text" placeholder='Student Number ' 
                                {...register("studentNumber")}
                                onChange={(e) => {
                                    e.target.value = StudentNum(e.target.value);
                                }}
                            />
                            <p className='errorMessage'>{errors.studentNumber?.message}</p>
                        </section>
                        <section className='fieldSection'>
                            <label htmlFor="">College Email ID</label><br />
                            <input className='RegisterFormInput' type="email" placeholder="username@collegename.ac.in" {...register("collegeEmail")}/><br />
                            <p className='errorMessage'>{errors.collegeEmail?.message}</p>
                        </section>
                        <section className='fieldSection'>
                            <label htmlFor="">Password</label><br />
                            <input className='RegisterFormInput' type="password" placeholder="Password" {...register("password")}/>
                            <p className='errorMessage'>{errors.password?.message}</p>
                        </section>
                        <section className='fieldSection'>
                            <label htmlFor="">Confirm Password</label><br />
                            <input className='RegisterFormInput' type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
                            <p className='errorMessage'>{errors.confirmPassword?.message}</p>
                        </section>
                        <input className='RegisterButton' type="submit" value="Register" />
                    </form>




                        <section className='flexRow others'><p>Already a User? <a>Login now</a></p> <p>Use as Guest</p></section>
            </section>
        </div>
    );
}

export default Register;