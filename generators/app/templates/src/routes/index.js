import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

// Containers
import Home from 'views/Home'

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
