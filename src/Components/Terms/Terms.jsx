import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        exercitationem error sunt consequuntur harum a alias commodi modi
        necessitatibus, blanditiis sint quas debitis facilis eveniet.
        Repudiandae at animi cupiditate minus et incidunt dolorum laudantium
        accusantium. Fugit recusandae dolores tenetur dolorum vel, odio magni
        quisquam tempore deserunt temporibus minima illum facilis.
      </p>
      <p>Go back to <Link to='/register'>Register</Link> </p>
    </div>
  );
};

export default Terms;
