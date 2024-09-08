import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaRunning } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
import { MdOutlineWifiOff } from "react-icons/md";
import { PiBatteryWarningFill } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default function Progressbar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container className="progress-container">
      <Row className="circular-progress ">
        <Col >
          <CircularProgressbarWithChildren value={66}  styles={{
           
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }} >
            <FaFireAlt style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -2 ,color:"rgb(235, 126, 66)" }}>
              <strong>66</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
        <Col>
          <CircularProgressbarWithChildren value={50} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <FaTools style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -2,color:"rgb(235, 126, 66)"  }}>
              <strong>50</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
        <Col>
          <CircularProgressbarWithChildren value={30} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <FaRunning style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -2 ,color:"rgb(235, 126, 66)" }}>
              <strong>30</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
      </Row>

      <Row className="circular-progress ">
        <Col>
          <CircularProgressbarWithChildren value={55} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <PiSecurityCameraFill
              style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }}
            />
            <div style={{ fontSize: 12, marginTop: -5,color:"rgb(235, 126, 66)"  }}>
              <strong>55</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>

        <Col className="circular-progress ">
          <CircularProgressbarWithChildren value={80} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
          
            <MdOutlineWifiOff style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -5,color:"rgb(235, 126, 66)"  }}>
              <strong>80</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
        <Col>
          <CircularProgressbarWithChildren value={60} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <PiBatteryWarningFill
              style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }}
            />
            <div style={{ fontSize: 12, marginTop: -5,color:"rgb(235, 126, 66)"  }}>
              <strong>60</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
      </Row>

      <Row className="circular-progress ">
        <Col>
          <CircularProgressbarWithChildren value={20} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <FaPowerOff style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -1,color:"rgb(235, 126, 66)"  }}>
              <strong>20</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
        <Col>
          <CircularProgressbarWithChildren value={38} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <FaUnlock style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -1,color:"rgb(235, 126, 66)"  }}>
              <strong>38</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
        <Col>
          <CircularProgressbarWithChildren value={66} styles={{
    path: {
      stroke: "rgb(235, 126, 66)"
    }
  }}>
            <FaLock style={{ color: "rgb(235, 126, 66)", fontSize: "50px" }} />
            <div style={{ fontSize: 12, marginTop: -1,color:"rgb(235, 126, 66)" }}>
              <strong>66</strong>
            </div>
          </CircularProgressbarWithChildren>
        </Col>
      </Row>
    </Container>
  );
}
