import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    alert("Signup successful");
    navigate('/profile');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Create your <br />PopX account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <fieldset className='signup-set'>
            <legend className='signup-label'>
              Full Name<span className="required">*</span>
            </legend>
            <input
              type="text"
              placeholder="Marry Doe"
              className='signup-input'
              {...register("name", { required: "Name is required", maxLength: 80 })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </fieldset>

          {/* Phone Number */}
          <fieldset className='signup-set'>
            <legend className='signup-label'>
              Phone Number<span className="required">*</span>
            </legend>
            <input
              type="tel"
              placeholder="Marry Doe"
              className='signup-input'
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits"
                }
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </fieldset>

          {/* Email */}
          <fieldset className='signup-set'>
            <legend className='signup-label'>
              Email Address<span className="required">*</span>
            </legend>
            <input
              type="email"
              placeholder="Marry Doe"
              className='signup-input'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </fieldset>

          {/* Password */}
          <fieldset className='signup-set'>
            <legend className='signup-label'>
              Password<span className="required">*</span>
            </legend>
            <input
              type="password"
              placeholder="Marry Doe"
              className='signup-input'
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Password must be at least 8 characters and include letters and numbers"
                }
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </fieldset>

          {/* Company Name */}
          <fieldset className='signup-set'>
            <legend className='signup-label'>Company name</legend>
            <input
              type="text"
              placeholder="Marry Doe"
              className='signup-input'
              {...register("company", { maxLength: 80 })}
            />
          </fieldset>

          {/* Radio Group */}
        
            <label className='signup-label'>
              Are you an agency?<span className="required">*</span>
            </label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  value="yes"
                  {...register("agency", { required: "Please select an option" })}
                /> Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  value="no"
                  {...register("agency", { required: "Please select an option" })}
                /> No
              </label>
            </div>
            {errors.agency && <p className="error">{errors.agency.message}</p>}

          {/* Submit Button */}
          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
