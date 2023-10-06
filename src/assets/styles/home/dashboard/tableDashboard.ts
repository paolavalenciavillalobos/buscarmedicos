import styled from 'styled-components'

export const DivForTable = styled.div`
  border-radius: 24px;
  box-shadow: 0px 0px 25px 0px #a3a3a333;
  margin: 2%;
  padding: 1%;
  //width: 100%;
`
export const DivForTitleOnTable = styled.div`
  //height: 12%;
  margin: 1%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
`

export const TitleForTableDashboard = styled.p`
  font-family: 'Sora';
  color: #212121;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`

export const Table = styled.table`
  width: 100%;
  //height: 60vh;
  padding: 1%;
  margin: 1%;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0px 5px;
  text-align: left;

  th:first-child {
    border-radius: 16px 0px 0px 0px;
  }

  th:last-child {
    border-radius: 0px 16px 0px 0px;
  }

  th,
  td {
    border: none;
    //padding-left: 4%;
    padding: 1.5%;
  }

  td {
    color: #212121;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }

  th {
    background: #046639;
    color: #ffff;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #e0e0e0;
  }

  tr:nth-child(odd) {
    background-color: #fafafa;
  }
`
