import "./CardSkill.scss";

export const CardSkill = ({ cImg, cTitle, cLevel }) => {
  return (
    <div className="card">
      <div className="left">
        <img src={cImg} alt={cTitle} />
      </div>
      <div className="right">
        <h4>{cTitle}</h4>
        <p>{cLevel}</p>
      </div>
    </div>
  );
};
