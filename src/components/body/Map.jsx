import { IranMap } from 'react-iran-map'
import mapData from '../../data'
import { Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";


function Map() {
  const selectProvinceHandler = (province) => {
    console.log(province)
  }

  return (
    <Container >
      <Row >
        <Col>
      <IranMap
        data={mapData}
        colorRange='30, 70, 181'
        width={500}
        textColor='#000'
        defaultSelectedProvince='tehran'
        deactiveProvinceColor='#eee'
        selectedProvinceColor='#3bcc6d'
        tooltipTitle='شاخصی که شرکت میخواد:'
        selectProvinceHandler={selectProvinceHandler}
      />
      </Col>
      </Row>
    </Container>
  )
}

export default Map;