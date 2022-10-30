import React from "react";

import {
  BsFillLightningChargeFill,
  BsFillFileEarmarkCodeFill,
  BsBrush,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="col-3__heading">Who we are?</h4>
          </div>
          <div className="col-9 ">
            <div className="col-9__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quas, inventore eligendi corrupti fugit voluptate
              neque officiis ad consectetur architecto nobis ratione eaque alias
              aliquam perspiciatis quia omnis quasi cum! Illo, animi possimus.
              Sunt nemo distinctio aut debitis laudantium voluptatem fugiat,
              eligendi consectetur earum ipsam id perspiciatis velit at dolorum
              dolor praesentium exercitationem recusandae voluptas tempora
              sapiente, enim esse maiores repudiandae! At inventore officia,
              neque adipisci quidem et fugiat vitae quaerat expedita numquam
              ullam! Architecto, optio voluptatum veniam omnis mollitia, fuga
              cum libero natus unde ullam, ipsum nulla velit. Minus fuga dolor
              quasi neque temporibus obcaecati officia aspernatur, ducimus
              accusantium.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4 ">
            <div className="col-4__icon">
              <BsFillLightningChargeFill />
            </div>
            <div className="col-4__title">Digital Marketing</div>
            <div className="col_4__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi libero, aliquam unde repudiandae praesentium id tempore
              iusto dolorum beatae?
            </div>
          </div>
          <div className="col-4 ">
            <div className="col-4__icon">
              <BsFillFileEarmarkCodeFill />
            </div>
            <div className="col-4__title">Software Development</div>
            <div className="col_4__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi libero, aliquam unde repudiandae praesentium id tempore
              iusto dolorum beatae?
            </div>
          </div>
          <div className="col-4">
            <div className="col-4__icon">
              <BsBrush />
            </div>
            <div className="col-4__title">Graphic Design</div>
            <div className="col_4__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi libero, aliquam unde repudiandae praesentium id tempore
              iusto dolorum beatae?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
