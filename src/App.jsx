import styled, { css } from "styled-components"
import GlabalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Row from "./ui/Row"

function App() {
  const H1 = styled.h1`
  ${props => 
  props.as === 'h1' && css`
    font-size:3rem;
    font-weight: 600;
  `
  }
  ${props => 
  props.as === 'h2' && css`
    font-size:2rem;
    font-weight: 600;
  `
  }
  ${props => 
  props.as === 'h3' && css`
    font-size:2rem;
    font-weight: 500;
  `
  }
  line-height: 1.4;
  `
  const StyledApp = styled.div`
    padding: 20px;
  `
  
  return (
    <>
      <GlabalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <H1 as="h1">The Wild Oasis</H1>
            <div>
            <H1 as="h2">Check in and check out</H1>
            <Button onClick={ () => alert("Check in")}> Check In </Button>
            <Button variation="secondary" size="small" onClick={ () => alert("Check out")}> Check Out </Button>
            </div>
          </Row>
          <Row>
            <H1 as="h3">Inputs</H1>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}

export default App
