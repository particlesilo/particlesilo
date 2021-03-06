import { Row, Col, Button } from "antd";
import { GithubOutlined, TranslationOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
import Background from "../assets/Images Website/Background.png";

export const Home = () => {
  return (
    <Row
      style={{
        // height:"80vh",
        // width:"100%",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
        margin: "10em 3em",
      }}
    >
      <Col
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "200px",
        }}
      >
        <Button
          style={{
            backgroundColor: "#31abc0",
            color: "white",
            border: "0",
            width: "150px",
            height: "auto",
            padding: "10px",
            fontSize: "1.2em",
            marginRight: "1em",
          }}
          icon={<GithubOutlined />}
          onClick={() =>
            window.open(
              "https://github.com/particlesilo/particlesilo",
              "_blank"
            )
          }
        >
          Contribute
        </Button>
        <Button
          style={{
            backgroundColor: "#31abc0",
            color: "white",
            border: "0",
            width: "150px",
            height: "auto",
            padding: "10px",
            fontSize: "1.2em",
          }}
          icon={<TranslationOutlined />}
          onClick={() =>
            window.open(
              "https://github.com/particlesilo/particlesilo/blob/main/README.md",
              "_blank"
            )
          }
        >
          Translate
        </Button>
      </Col>
    </Row>
  );
};
