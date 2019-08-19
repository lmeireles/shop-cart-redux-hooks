import styled from 'styled-components';

export const List = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
`;

export const Product = styled.div`
  transition: all .6s ease;
  position: relative;
  padding: 12px;
  margin: 22px;
  height: 110px;
  width: 180px;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  font-family: sans-serif;
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  
  > h3 {
    font-size: 16px;  
    font-weight: bold;
  }
  > span {
    font-size: 12px;
  }
  > button {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;
