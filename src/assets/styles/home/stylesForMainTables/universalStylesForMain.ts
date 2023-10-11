import styled from 'styled-components'

export const DivMainTitle = styled.div`
  height: 10%;
  width: 100%;
  padding: 3%;
  margin-bottom: 5%;
`
export const MainTitle = styled.p`
  color: #212121;
  font-family: Sora;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
`
export const HeaderOnTable = styled.div`
  height: 12%;
  margin: 1%;
  padding: 1%;
  display: flex;
`
export const Search = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 2%;

  input {
    padding: 3%;
    position: absolute;
    width: 100%;
    border-radius: 16px;
    border: 1.5px solid #e0e0e0;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #e0e0e0, #e0e0e0);
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: #757575;
  }

  img {
    position: absolute;
    left: 90%;
    height: 60%;
  }
`

export const MenuSelectFilter = styled.select`
  border-radius: 16px;
  border: 1.5px solid #e0e0e0;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #e0e0e0, #e0e0e0);
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #757575;
  width: 10%;
  height: 100%;
  margin-right: 2%;
  padding: 0.8%;
`

export const GreenButtonForAdd = styled.button`
  width: 20%;
  height: 80%;
  border-radius: 16px;
  background: #00c247;
  color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  padding: 0.8%;
  img {
    width: 8%;
    height: 35%;
    margin-right: 2%;
  }
`

export const EditButtonUniversal = styled.button`
  background-color: white;
  border-radius: 10px;
  border-color: #e0e0e0;
  border-width: 1.3px;
  border-style: solid;
  padding: 2%;
  margin-right: 4%;
  box-shadow: 2px 2px 10px 0px #bbc0cd99;

  img {
    width: 70%;
    height: 90%;
  }
`

export const DivForTabs = styled.div`
  height: 5%;
  width: 100%;
  margin-bottom: 0%;
  display: flex;
  margin-left: 2%;
`
export const TabForSearchFilter = styled.button<{ isActive: boolean }>`
  width: 172.32px;
  display: flex;
  height: 64.42px;
  padding: 18px;
  border-radius: 16px, 16px, 0px, 0px;
  gap: 18px;
  background-color: ${props => (props.isActive ? '#ffffff' : '#f5f5f5')};
  box-shadow: 0px 0px 25px 0px #a3a3a333;
  margin-right: 1%;
  p {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    color: #212121;
    padding-left: 13%;
  }
  div {
    width: 51.13px;
    height: 28.18px;
    padding: 4px, 12px, 4px, 12px;
    border-radius: 100px;
    gap: 10px;

    background-color: ${props => (props.isActive ? '#046639' : '#B4E08E')};
    color: ${props => (props.isActive ? '#fffff' : '#212121')};
  }
`
