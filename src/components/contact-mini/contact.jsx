export const Contact = ({ cIco, cTitle, cDesc }) => {
  return (
    <div className="contact">
      <div className="icon">
        <img src={cIco} alt={cTitle} />
      </div>
      <div className="desc">
        <h4>{cTitle}</h4>
        <p>{cDesc}</p>
      </div>
    </div>
  );
};
