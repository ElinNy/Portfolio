import React from "react";
import { Container, Image } from "react-bootstrap";
import Portrait from "../assets/images/Portrait.jpg";

const Header: React.FC = () => {
  return (
    <Container className="headerContainer mt-3">
      <div className="textWrapper">
        <div className="textContainer">
          <h1 className="headerTitle" style={{ animationDelay: "0s" }}>
            New
          </h1>
          <h1 className="headerTitle" style={{ animationDelay: "1s" }}>
            Exited
          </h1>
          <h1 className="headerTitle" style={{ animationDelay: "2s" }}>
            Passionate
          </h1>
        </div>
        <h2 className="headerSubtitle">Welcome to My Portfolio</h2>
      </div>
      <div className="headerImageWrapper">
        <Image
          src={Portrait}
          className="headerImage"
          width={200}
          alt="Portrait"
          fluid
        />
        <div className="radialOverlay"></div>
      </div>
    </Container>
  );
};

export default Header;
