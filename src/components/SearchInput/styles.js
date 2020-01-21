import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFF;
  box-shadow: 0px 3px 3px #00000029;
  border-radius: 4px;
  justify-content: space-between;
  padding: 6px  16px;

  input{
    flex: 1%;
    border: none;
    font-size: 15px;
    color: #333333;
  }

  button{
    border: none;
    background: none;
  }
`;
