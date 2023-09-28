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

  input {
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
    height: 40%;
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
  img {
    width: 8%;
    height: 35%;
  }
`

export const EditButtonUniversal = styled.button`
  background-color: white;
  border-radius: 50%;
  border-color: #e0e0e0;
  border-width: 1.3px;
  border-style: solid;
  padding: 2%;
  img {
    width: 70%;
    height: 70%;
  }
`
