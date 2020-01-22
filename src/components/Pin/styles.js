import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-bottom: 6px;

`;

export const Content = styled.div`
  position: absolute;
  top: 10%;
  left: 30%;
  width: 100%;
  height: 100%;
`;


export const PinIcon = styled.div`
  width: 16px;
  height: 16px;
  background: ${(props) => (props.color ? props.color : '#FFFFFF')};
  border-radius: 100%;
  
  ::after{
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    bottom: -13px;
    left: 0px;
    border: 8px solid transparent;
    border-top: 12px solid ${(props) => (props.color ? props.color : '#FFFFFF')};
    /* border-top: 16px solid #FFFFFF; */
  }

`;
