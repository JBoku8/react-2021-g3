import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { login } from '../../../services';
function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();
  const history = useHistory();

  const onSubmit = async (formData) => {
    const loggedIn = await login(formData);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    history.replace('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          defaultValue="eve.holt@reqres.in"
          id="email"
          {...register('email', {
            required: true,
          })}
        />
        {(touchedFields.email || errors.email) && (
          <span className="text-danger form-text">
            {!errors.email ??
              (errors.email.type === 'required' && 'Email is required')}
            {touchedFields.email && 'Email is required'}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          defaultValue="cityslicka"
          {...register('password', {
            required: true,
          })}
        />
        {(touchedFields.password || errors.password) && (
          <span className="text-danger form-text">
            {!errors.password ??
              (errors.password.type === 'required' && 'Password is required')}
            {touchedFields.password && 'Password is required'}
          </span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
