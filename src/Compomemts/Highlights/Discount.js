import React, { useState, useEffect } from "react";
import MyButton from '../Utils/myButton';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";



const Discount =() => {

  const [discountStart, setDiscountStart] = useState(0);
  const discountEnd = 50;


  const porcentage = () => {
    if (discountStart < discountEnd) {
      setDiscountStart(discountStart + 1)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      porcentage();
    }, 30);
  }, [discountStart]);



    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => porcentage()}>
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Продаю домик для кошки</h3>
              <p>
              Лучший кошачий домик на свете со скидкой + игрушка в подарок
              </p>
              <MyButton
                text="Купить кошкин дом"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
}

export default Discount;
