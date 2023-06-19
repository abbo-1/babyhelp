import Button from '@mui/material/Button';
import Diapers from '../images/diaper2.png';
import Stuff from '../images/feeding-bottle2.png';
import Us from '../images/Attach0_20230516_192701.jpg'
import bee from '../images/bee2.png'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Buttons(){
    const theme = createTheme({
        root: {
            textTransform: "uppercase"
        },
        typography: {
          fontFamily: [
            'Patua One'
          ].join(','),
          textTransform: "uppercase",
        },
      });

  
      return (
        <Container fluid id="center">
   <ThemeProvider theme={theme}>
   <img src={bee} id="bee"></img>
      <Row>
         <Col s={4}>
         <img id="photo" src={Us}></img>
         </Col>
         <Col id="title" s={8}>
         Sara & Kevin's <br/> Baby Registry
         </Col>
      </Row>
      <br/>
      <Row>
      <Col>
         <Button class="Buttons" variant="contained" href="https://www.amazon.com/baby-reg/saraandkevin-abbott-september-2023-spring/5RMI2TFPTQAY" target="_blank"><img class="icons" alt="Stuff Icon" src={Stuff}></img><br/>Help us out with stuff</Button>
         </Col>
      <Col>
         <Button class="Buttons" variant="contained"  href="https://lighthousekidscompany.com/products/all-in-one-cloth-diaper-baby" target="_blank"><img class="icons" alt="Diaper Icon" src={Diapers}></img><br/>Help us out with diapers</Button>
         </Col>
      </Row>
   </ThemeProvider>
</Container>
)
}
  
  
  export default Buttons