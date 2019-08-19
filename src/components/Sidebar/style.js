import styled from 'styled-components';
import PropTypes from 'prop-types';

const SIDEBAR_WIDTH = 250;

const Sidebar = styled.div`
  transition: all .8s ease-out;
  position: fixed;
  padding-top: 30px;
  width: ${SIDEBAR_WIDTH}px;
  top: 0;
  bottom: 0;
  right: ${p => p.show ? 0 : -SIDEBAR_WIDTH}px;
  z-index: 999;
  overflow-x: auto;
  
  background: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, .4) ;
  
  > button {
    position: absolute;
    right: 12px;
    top: 4px;
    border-radius: 3px;
    border: none;
    background: #ccc;
    color: #fff;
    padding: 4px;
  }
  
  > h3 {
    font-family: sans-serif;
    font-size: 20px;
    text-align: right;
    display: block;
    padding: 12px;
  }
  
  > .backdrop {
    display: ${p => p.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: ${SIDEBAR_WIDTH}px;
    cursor: pointer;
  }
`;

Sidebar.propTypes = {
  show: PropTypes.bool,
};

Sidebar.defaultProps = {
  show: false
};

export default Sidebar
