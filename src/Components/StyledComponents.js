import { Table } from 'react-bootstrap';
import styled from 'styled-components'

export const StyledDiv = styled.div`
  margin-left: 50px;
  background-color: white;
  width: 100%;

  @media (min-width: 275px) and (max-width: 380px) {
    margin-left: 35px;
  }

  @media (min-width: 381px) and (max-width: 480px) {
    margin-left: 40px;
  }

  @media (min-width: 765px) {
    margin-left: 60px;
  }

  @media (min-width: 1020px) {
    margin-left: 50px;
  }
`;

export const CustomTable = styled(Table)`
  color: #7200CC;
`;