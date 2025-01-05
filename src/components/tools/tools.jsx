import React from "react";
import { Container } from "react-bootstrap";
import "./app-shot.css";

import reactIconImage from "../../images/tools-images/react_js.svg";
import typescriptIconImage from "../../images/tools-images/typescript.png";
import nodeIconImage from "../../images/tools-images/nodejs.jpg";
import expressIconImage from "../../images/tools-images/express.jpg";
import chatbotIconImage from "../../images/tools-images/chatbots.jpg";
import RailsIconImage from "../../images/tools-images/ror.png";
import fullStackIconImage from "../../images/tools-images/full-stack.png";

const AppShot = () => {
  const imagesData = [
    { id: 1, src: reactIconImage, alt: "React" },
    { id: 2, src: typescriptIconImage, alt: "TypeScript" },
    { id: 3, src: nodeIconImage, alt: "Node.js" },
    { id: 4, src: expressIconImage, alt: "Express.js" },
    { id: 5, src: chatbotIconImage, alt: "Chatbots" },
    { id: 6, src: RailsIconImage, alt: "Rails" },
    { id: 7, src: fullStackIconImage, alt: "Full Stack" },
  ];

  return (
    <section className="app-shot-one" id="screens">
      <Container fluid>
        <div
          className="block-title text-center"
          style={{ marginBottom: "60px" }}
        >
          <h3 className="w-full mt-[50px]  mb-[50px] flex justify-center mb-5 text-teal-600 font-poppins text-4xl underline">
            Tool & Technoligies
          </h3>
        </div>
        <div className="technologies-images-container mt-[150px] mb-[150px]">
          <div className="rotating-menu">
            {imagesData.map((image) => (
              <div key={image.id} className="menu-item">
                <div>
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppShot;
