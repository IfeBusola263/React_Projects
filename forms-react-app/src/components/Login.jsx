import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValue] = useState({
    email: '',
    password: ''
  })
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  })

  function handleInputValidation(field){
    setIsFocused(prevFocusState => ({
      ...prevFocusState,
      [field]: true
    }))
  }

  const emailIsValid = isFocused.email && !enteredValues.email.includes('@')

  function handleInput(field, value){
    setEnteredValue(prevEnteredValue => ({
      ...prevEnteredValue,
      [field]: value
    }))

    setIsFocused(prevFocusState => ({
      ...prevFocusState,
      [field]: false
    }))
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInput('email', event.target.value)} onBlur={() => handleInputValidation('email')} value={enteredValues.email} />
          {emailIsValid && <p>Please Enter a valid email</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInput('password', event.target.value)} onBlur={() => handleInputValidation('password')} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
