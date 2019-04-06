import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`

`;
const StyledSubTitle = styled.h2`

`;

export const FourOFour: React.FC = props => (
  <main>
    <div className={this.props.classes.heroUnit}>
      <div className={this.props.classes.heroContent}>
        <StyledHeading>404</StyledHeading>
        <StyledSubTitle>Sorry, don't know what you're talking about</StyledSubTitle>
        <div className={this.props.classes.heroButtons}>
          {/* <Button component={Link} to="/" variant="contained" color="primary">Home</Button> */}
        </div>
      </div>
    </div></main>
)