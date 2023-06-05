import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import img1 from '../../assets/qZone1.png'
import img2 from '../../assets/qZone2.png'
import img3 from '../../assets/qZone3.png'

const RightNav = () => {
  return (
    <div>
      <h2>Login with</h2>
      <div className="d-grid gap-2">
        <Button variant="secondary" size="lg">
          <FaGoogle></FaGoogle>
          Login with google
        </Button>
        <Button variant="secondary" size="lg">
          <FaGithub></FaGithub>
          Login with github
        </Button>
      </div>

      <div>
        <h2>Find us on</h2>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
          
        </ListGroup>
      </div>

      <div>
        <h2>Q-Zone</h2>
        <img src={img1} alt="" srcset="" />
        <img src={img2} alt="" srcset="" />
        <img src={img3} alt="" srcset="" />
      </div>
    </div>
  );
};

export default RightNav;
