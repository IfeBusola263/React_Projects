import { Form, useSearchParams, Link, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const [linkParams] = useSearchParams();

  // linkParam is an object that allows me access to the link parameters
  const isLogin = linkParams.get('mode') === 'login';
  const authData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        {authData && authData.message && <p>{authData.message}</p>}
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          {authData && authData.errors && <p>{authData.errors.email || ''}</p>}
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
          {authData && authData.errors && <p>{authData.errors.password || ''}</p>}
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin? 'signup': 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...': 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
