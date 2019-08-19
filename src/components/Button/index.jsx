import styled from 'styled-components';

const Button = styled.button`
  transition: all .3s ease;
  border-radius: 4px;
  border-width: 0;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  padding: 0 12px;
  background: #039be5;
  
  &:hover {
    background: #0367a7;
  }
  &:active {
    background: #033e6c;
  }
`;

export default Button;
