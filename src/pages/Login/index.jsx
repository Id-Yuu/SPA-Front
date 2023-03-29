export const Login = () => {
  return (
    <form autoComplete="false" id="form-login">
      <div className="form-field">
        <label htmlFor="mail">Email</label>
        <input type="email" name="mail" id="mail" />
      </div>
      <div className="form-field">
        <div className="label-fiels">
          <label htmlFor="password">Password</label>
          <a href="">Forgot Password</a>
        </div>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Sign-in</button>
    </form>
  );
};
