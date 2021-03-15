import React from 'react';
import Zoom from "react-reveal/Zoom";
import MyButton from '../Utils/myButton';

const Pricing = () => {
  const data = [
    {
      prices: 10,
      positions: "Минимальный",
      desc:
        "На отпуск",
      linkto: "https://twitter.com/TalanovArseniy",
      delay: 500
    },
    {
      prices: 15,
      positions: "Средний",
      desc:
        "На новую квартиру",
      linkto:
        "https://www.facebook.com/aleksandr.rodionov.10",
      delay: 0
    },
    {
      prices: 25,
      positions: "Большой",
      desc:
        "На новый автомобиль",
      linkto:
        "https://vk.com/arseniy_talanov",
      delay: 500
    }
  ];

    const showBoxes = () =>
      data.map((item, i) => (
        <Zoom delay={item.delay} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${item.prices}</span>
                <span>{item.positions}</span>
              </div>
              <div className="pricing_description">
                {item.desc}
              </div>
              <div className="pricing_buttons">
                <MyButton
                  text="Подробнее"
                  bck="00a86b"
                  color="#ffffff"
                  link={item.linkto}
                />
              </div>
            </div>
          </div>
        </Zoom>
      ));
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Принимаю донаты!</h2>

        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;