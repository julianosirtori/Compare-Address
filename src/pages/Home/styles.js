import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Sidebar = styled.div`
  width: 360px;
  background: #1976D2E6;
  box-shadow: 3px 3px 3px #00000029;
  color: #FFF;
  padding: 16px;

  p{
    margin-top: 8px;
    font-size: 12px;
  }

  h3{
    width: 100%;
    margin-top: 16px;
  }

  ul {
    margin-top: 16px;
    list-style: none;

    li{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
      
      img{
        width: 28px;
        height: 28px;
      }

      span{
        margin-left: 6px;
        flex: 1;
      }

      strong{
        margin-left: 6px;
      }
    } 
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
  justify-content: center;
  
  img{
    width: 21px;
    height: 21px;
    margin-right: 4px;
  }

  strong{
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  position: relative;

`;
