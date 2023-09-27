import styled from 'styled-components'

export const DivForTable = styled.div`
  border-radius: 24px;
  box-shadow: 0px 0px 25px 0px #a3a3a333;
  margin: 2%;
  padding: 1%;
`
export const DivForTitleOnTable = styled.div`
  height: 10vh;
  margin: 1%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
`
export const Table = styled.table`
  width: 100vh;
  height: 60vh;
  padding: 0%;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0px 5px;
  border-radius: 10px;
  text-align: left;

  th,
  td {
    border: none;
    padding: 0.5%;
    padding-left: 1%;
    padding-right: 1%;
  }

  th {
    background: #046639;
    color: #ffff;
  }

  tr:nth-child(even) {
    background-color: #e0e0e0;
  }

  tr:nth-child(odd) {
    background-color: #fafafa;
  }
`
