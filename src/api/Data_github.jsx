import React, { useEffect, useState } from "react";

export const Data_github = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/Id-Yuu/repos?per_page=6&sort=updated`
      );
      const data = await res.json();
      setItems(data);
    };

    fetchRepos();
  }, []);

  return (
    <>
      <div className="repo">
        {items.map((idx, index) => (
          <div className="github" key={index}>
            <div className="image">
              <img src={idx.owner.avatar_url} alt={idx.name} />
            </div>
            <div className="desc">
              <h4>
                <a href={idx.html_url}>{idx.name}</a>
              </h4>
              <p>{idx.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
