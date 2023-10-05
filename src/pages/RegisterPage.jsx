
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  const { reset, handleSubmit, register } = useForm()

   const { registerUser } = useAuth()
   
  const submit = data => {
    registerUser(data)
    reset({
        name:'',
        email: '',
        password:''
    })
  }

  return (
    <div>
        <img src="/Images/image-login-woman.png" alt="" />
        <article>
        <form onSubmit={handleSubmit(submit)}>
            <section>
            <div>
                <label htmlFor="">Name</label>
                <input {...register('name')} type="text" id="name" />
            </div>
          <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" />
          </div>
          <button>Submit</button>
        </section>
        <p>Do you already have an account? <Link to="/auth/login">Go to login</Link></p>
            </form>
           </article> 
    </div>
  )
}

export default RegisterPage