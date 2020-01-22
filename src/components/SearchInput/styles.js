import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background: #FFF;
  box-shadow: 0px 3px 3px #00000029;
  border-radius: 4px;
  justify-content: space-between;
  padding: 6px  16px;

  div{
    width: 100%;
  }

  input{
    flex: 1;
    width: 100%;
    border: none;
    font-size: 15px;
    color: #333333;
  }

`;
