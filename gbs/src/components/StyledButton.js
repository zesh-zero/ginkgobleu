import React, { Component } from 'react'
import styled from 'styled-components';

export default class StyledButton extends Component {
  render() {
    return (
      styled.button`
        text-transform: capitalize;
        font-size: 1.4rem;
        background: transparent;
        border: 0.05rem solid var(--lightBlue);
        color: var(--lightBlue);
        border-radius: 0.5rem;
      `
    )
  }
}
