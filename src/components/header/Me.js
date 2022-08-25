import React from "react";
import ME from "../../assets/me.png";

const Me = () => {
  return (
    <div className="me">
      <figure>
        <img src={ME} alt="I`ts me" />
        <figcaption>I`ts me</figcaption>
      </figure>
      <address>
        г. Киев, <br />
        Бульвар Леси Украинки, д. 26, <br />
        4й этаж офис 427
      </address>

      <address>
        <a href="mailto:mango@mail.pig">mango@mail.pig</a>
        <a href="tel:+1112223344">(111) 222-33-44</a>
      </address>
    </div>
  );
};

export default Me;
