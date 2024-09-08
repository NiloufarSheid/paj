import React from "react";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["red", "blue", "green", "pink", "purple"];

export default function Round() {
  return (
    <Container className="round-container">
      <Row  >
        <Col>
    
      <Box flexGrow={1} height={300}>
        <PieChart
          series={[
            {
              data: [
                { value: 10},
                { value: 15 },
                { value: 20 },
                { value: 27 },
                { value: 15 },
                { value: 35 },
                { value: 15 },
                { value: 15 },
              ],
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 0.2,
              cornerRadius: 1,
              startAngle: -180,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
        />
      </Box>
   </Col>
    
    </Row>
    </Container>
  );
}
