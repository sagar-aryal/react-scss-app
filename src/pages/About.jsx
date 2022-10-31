import React from "react";

import {
  BsFillLightningChargeFill,
  BsFillFileEarmarkCodeFill,
  BsBrush,
} from "react-icons/bs";

const About = () => {
  const services = [
    {
      id: 1,
      icon: BsFillLightningChargeFill,
      title: "Digital Marketing",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore officia, neque adipisci quidem et fugiat vitae quaerat expedita numquam ullam! Architecto.",
    },
    {
      id: 2,
      icon: BsFillFileEarmarkCodeFill,
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore officia, neque adipisci quidem et fugiat vitae quaerat expedita numquam ullam! Architecto.",
    },
    {
      id: 3,
      icon: BsBrush,
      title: "Graphic Design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore officia, neque adipisci quidem et fugiat vitae quaerat expedita numquam ullam! Architecto.",
    },
  ];
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
          {services.map((service) => (
            <div className="col-4" key={service.id}>
              <div className="col-4__icon">
                <service.icon />
              </div>
              <div className="col-4__title">{service.title}</div>
              <div className="col_4__content">{service.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
