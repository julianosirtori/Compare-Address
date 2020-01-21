import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin-bottom: 6px;

`;

export const Content = styled.div`
  position: absolute;
  top: 15%;
  left: 32%;
  width: 100%;
  height: 100%;
`;


export const PinIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.color ? props.color : '#FFFFFF')};
  border-radius: 100%;
  
  ::after{
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    bottom: -24px;
    left: 0px;
    border: 12px solid transparent;
    border-top: 24px solid ${(props) => (props.color ? props.color : '#FFFFFF')};
  }

`;
