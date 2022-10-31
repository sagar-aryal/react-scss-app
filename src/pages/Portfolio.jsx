import React from "react";

const Portfolio = () => {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO Founder",
      image: require("../images/johndoe.jpg"),
    },
    {
      id: 2,
      name: "Antony Smith",
      role: "Lead Developer",
      image: require("../images/antonysmith.jpg"),
    },
    {
      id: 3,
      name: "Nora Lath",
      role: "Lead Design",
      image: require("../images/noralath.jpg"),
    },
  ];
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="portfolio__sub-title">Employees</div>
            <div className="portfolio__title">Our Team</div>
          </div>
          <div className="col-8">
            <div className="row">
              {profiles.map((profile) => (
                <div className="col-4" key={profile.id}>
                  <div className="portfolio__card">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="portfolio__card--img"
                    />
                    <h5 className="portfolio__card--name">{profile.name}</h5>
                    <p className="portfolio__card--role">{profile.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
