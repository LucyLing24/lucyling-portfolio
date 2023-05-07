import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girld.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineZhihu,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {SiTencentqq} from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p style={{fontSize: "4em"}}>
              <span className="purple"> ABOUT </span> ME
            </p>
              <p style={{ textAlign: "left" ,color:"rgb(31,31,31)",fontSize:"large",marginLeft:"10vw"}}>
                <p>
                  🪪 MS Student at Tongji University. <b>HCI / Interaction design</b>.
                </p>
                <p>
                  🎓 B.S. in CS at Soochow University. <b>GPA: 3.8/4, rank: top 5%</b>.
                </p>
                <p>
                  🧸 Internship: <b>Microsoft</b> SDE, 2021 / 2022 -> <b>ByteDance</b> FE, 2023
                </p>
                <p>
                  📨 Email me at: <b>lucyling0224@gmail.com</b>
                </p>
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LucyLing24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/LucyLing24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucyling24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.zhihu.com/people/linglong24"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <AiOutlineZhihu />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="tencent://message/?uin=1021314642&Site=&Menu=yes"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <SiTencentqq />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>
              My lover <span style={{color:"#84b1f3",fontWeight:"bold"}}>Yanjie Ze </span> is working on Reinforcement Learning, Robotics, and Computer Vision. Check out <a
                href="https://yanjieze.com/"
                target="_blank"
                rel="noreferrer"
                className="links"
              > <b>his page</b></a>.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
