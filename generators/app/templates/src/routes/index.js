import React from 'react'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

// Containers
import Home from 'views/Home';

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" component={Home} />
      </Container>
    </Router>
  )
}

export default Routes
