import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
`;

export const Item = styled.div`
  transition: all .6s ease;
  position: relative;
  padding: 12px;
  width: 100%;
  font-family: sans-serif;
  background: #fff;
  border-bottom: 1px solid #ccc;
  
  &:first-child {
    border-top: 1px solid #ccc;
  }
  
  &:hover {
    background: #97cce5;
  }
  
  > h3 {
    font-size: 16px;  
    font-weight: bold;
    display: block;
    margin-bottom: 7px;
  }
  > span {
    font-size: 12px;
    display: block;
    margin-bottom: 4px;
  }
  > button {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;
