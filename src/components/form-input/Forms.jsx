import "./form.scss";

export const Forms = () => {
  return (
    <form id="form-field" autoComplete="false">
      <div className="field-group">
        <div className="field-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field-input">
          <label htmlFor="mail">Email</label>
          <input type="email" name="mail" id="mail" />
        </div>
      </div>
      <div className="field-input">
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div className="field-input">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
