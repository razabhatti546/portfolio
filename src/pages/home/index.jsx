import React, { useCallback, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Alert, Button, Card, Col, Form, Input, Row } from "antd";
import "../../styles/Header.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const { Meta } = Card;
export const Home = () => {
  const [form] = Form.useForm();
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = useCallback((values) => {
    Alert("hello");
  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="dark:bg-slate-900">
        <div id="home">
          <Row
            className="pt-[120px] text-teal-600  font-poppins text-6xl"
            justify={"center"}
          >
            Raza Ali
          </Row>
          <Row
            className="dark:text-white font-poppins text-xl mt-3 mb-5"
            justify={"center"}
          >
            Software Engineer
          </Row>
          <div className="w-full flex justify-center">
            <div className="dark:text-white font-poppins text-2xl sm:w-full md:w-[700px] lg:w-[900px]">
              Hi, I’m Raza Ali, a passionate software engineer specializing in
              front-end web development. With a keen eye for design and a love
              for creating seamless user experiences, I bring ideas to life
              through clean, efficient code.
            </div>
          </div>
        </div>
        <div className="flex justify-center text-5xl text-gray-600 gap-11 py-3">
          <a href="https://github.com/razabhatti546" target="blank">
            <AiFillGithub className="dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/raza-ali-155088206/"
            target="blank"
          >
            <AiFillLinkedin className="dark:text-white" />
          </a>
        </div>
        <div id="services">
          <Row className="w-full text-teal-600 mt-[50px] mb-[50px] flex justify-center mb-5  font-poppins text-4xl underline ">
            Services
          </Row>
          <Row gutter={16} justify={"center"} className="w-full">
            <Col xs={22} md={10} lg={6}>
              <Card
                hoverable
                className="transition ease-in-out delay-150  hover:-translate-y-7 duration-300"
                cover={<img alt="example" src="../../images/frontend.png" />}
              >
                <Meta
                  title="Front End Web Development"
                  description="I work with frontend technologies focusing on React, Next.js, Bootstrap, and Tailwind CSS. My expertise lies in crafting captivating and adaptable user interfaces that ensure an engaging user experience. By utilizing the capabilities of these technologies, I deliver high-performance and visually appealing frontend solutions."
                />
              </Card>
            </Col>
            <Col xs={22} md={10} lg={6}>
              <Card
                hoverable
                className="transition ease-in-out delay-150  hover:-translate-y-7 duration-200"
                cover={<img alt="example" src="../../images/backend.webp" />}
              >
                <Meta
                  title="Back End Development"
                  description="I offer backend services in Node.js, Express, and MongoDB. I specialize in creating efficient and scalable web applications, leveraging the power of these technologies. From designing architecture to implementing APIs and database interactions, I deliver reliable solutions tailored to your specific needs. Let's bring your ideas to life with powerful and efficient backend development."
                />
              </Card>
            </Col>
            <Col xs={22} md={10} lg={6} className="col-alignment">
              <Card
                hoverable
                className="transition ease-in-out delay-150  hover:-translate-y-7 duration-300"
                cover={<img alt="example" src="../../images/mobile.png" />}
              >
                <Meta
                  title="Full Stack Development"
                  description="In fullstack development i work with technologies including Node.js, Express, MongoDB, React, Next.js, Bootstrap, and Tailwind CSS. With expertise in both frontend and backend development, I deliver end-to-end solutions for web applications. From building efficient server-side systems to creating captivating user interfaces"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div id="about">
          <Row className="w-full mt-[50px] mb-[50px] flex justify-center mb-5 text-teal-600 font-poppins text-4xl underline">
            About Me
          </Row>
          <Row justify={"center"}>
            <div className="dark:text-white font-poppins text-2xl sm:w-full md:w-[700px] lg:w-[900px]">
              My journey in web development has equipped me with a diverse skill
              set, including HTML, CSS, JavaScript, and modern frameworks like
              React and Vue.js. I thrive on solving complex problems and enjoy
              collaborating with designers and developers to create innovative
              solutions.
            </div>
          </Row>
        </div>

        <div id="contactus" className="mb-[50px]">
          <Row className="w-full mt-[50px]  mb-[50px] flex justify-center mb-5 text-teal-600 font-poppins text-4xl underline">
            Contact Me
          </Row>
          <div className="w-full flex justify-center">
            <div className="sm:w-[320px] lg:w-[520px] bg-slate-600 dark:bg-abc p-5 rounded-lg">
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: "true",
                      message: "Please enter your name",
                    },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: "true",
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input placeholder="example@email.com" type="email" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    {
                      required: "true",
                      message: "Please enter the message",
                    },
                  ]}
                >
                  <Input.TextArea placeholder="Type message here" />
                </Form.Item>
              </Form>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
