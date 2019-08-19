import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;

  background-color: #efefef;
  height: 105px;
  position: relative;

  .logo {
    align-self: center;
    max-width: 150px;
    margin-left: 20px;
  }

  .btn-cart {
    position: absolute;

    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export default HeaderStyle;
