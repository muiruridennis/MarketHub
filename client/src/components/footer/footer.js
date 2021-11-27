import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"

function footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; 2021 Sales Maker
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default footer
