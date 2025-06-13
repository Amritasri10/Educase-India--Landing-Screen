import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert('Login successful');
    console.log(data);
    navigate('/profile');
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2 className='login-heading'>Signin to your <br />PopX account</h2>
        <p className='login-subtext'>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
          <fieldset className='login-set'>
            <legend className='login-label'>Email Address</legend>
            <input
              type='email'
              placeholder='Enter your email address'
              className='login-input'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <span className='error'>{errors.email.message}</span>}
          </fieldset>

          <fieldset className='login-set'>
            <legend className='login-label'>Password</legend>
            <input
              type='password'
              placeholder='Enter your password'
              className='login-input'
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Min 6 characters' }
              })}
            />
            {errors.password && <span className='error'>{errors.password.message}</span>}
          </fieldset>

          <button type='submit' className='login-btn' disabled={!isValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
