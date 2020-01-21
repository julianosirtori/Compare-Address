import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Sidebar = styled.div`
  width: 288px;
  background: #1976D2E6;
  box-shadow: 3px 3px 3px #00000029;
  color: #FFF;
  padding: 16px;

  ul {
    margin-top: 32px;
    list-style: none;

    li{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
    
      span{
        margin-left: 6px;
      }
    } 
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
  
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

export const Filters = styled.div`
  border-top: 2px solid #ffffff;
  padding-top: 8px;
  color: #ffffff;
  margin-top: 64px;

  strong{
    margin: auto;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  ul{
    li{
      font-size: 14px;
      align-items: center;
      margin-bottom: 8px;

      label{
        margin-left: 6px;
        margin-right: 6px;
        color: #ffffff;
        font-size: 14px;
      }

    }
  }

`;
