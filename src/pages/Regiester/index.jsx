export const Regiester = () => {
  return (
    <form autoComplete="false" id="form-register">
      <div className="form-field">
        <label htmlFor="mail">Email</label>
        <input type="email" name="mail" id="mail" />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="form-field">
        <label htmlFor="password2">Re-Type Password</label>
        <input type="password" name="password2" id="password2" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
