import React from "react";

import johndoe from "../images/johndoe.jpg";
import antonysmith from "../images/antonysmith.jpg";
import noralath from "../images/noralath.jpg";

const Portfolio = () => {
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
              <div className="col-4">
                <div className="portfolio__card">
                  <img
                    src={johndoe}
                    alt="johndoe"
                    className="portfolio__card--img"
                  />
                  <h5 className="portfolio__card--name">John Doe</h5>
                  <p className="portfolio__card--role">CEO Founder</p>
                </div>
              </div>
              <div className="col-4">
                <div className="portfolio__card">
                  <img
                    src={antonysmith}
                    alt="antonysmith"
                    className="portfolio__card--img"
                  />
                  <h5 className="portfolio__card--name">Antony Smith</h5>
                  <p className="portfolio__card--role">Lead Developer</p>
                </div>
              </div>
              <div className="col-4">
                <div className="portfolio__card">
                  <img
                    src={noralath}
                    alt="noralath"
                    className="portfolio__card--img"
                  />
                  <h5 className="portfolio__card--name">Nora Lath</h5>
                  <p className="portfolio__card--role">Lead Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
