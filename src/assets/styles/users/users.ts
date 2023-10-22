import styled from 'styled-components'

export const ButtonUsers = styled.button`
  width: 100%;
  height: 30%;
  text-align: left;
  padding-left: 2%;
  margin: 2% 2% 2% 0;
  border-radius: 16px;
  border: none;
  color: black;
  // background-color: #046639;
  font-family: 'Poppins', sans-serif;
  padding: 1.5%;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  background-color: ${props => (props.active ? '#046639' : '#EEEEEE')};
  //background: #EEEEEE;
`

export const BigBox = styled.div`
  display: flex;
  margin: 2%;
  width: 100vh;
  //justify-content: flex-start;
`

export const DivForComponent = styled.div`
  width: 60vh;
  margin-left: 8%;
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vh;
  padding: 1%;
`

export const InputDados = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 30%;
  padding-right: 3%;
  input {
    border-radius: 16px;
    border: 2px solid #e0e0e0;
    padding: 4%;
  }
  label {
    padding-bottom: 2%;
    color: #757575;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
  }
`
export const TitleForDadosUser = styled.p`
  width: 100%;
  color: #212121;
  font-family: 'Sora', sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  margin: 2%;
  padding-bottom: 3%;
`

export const DataBoxUsers = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1.5px solid #bdbdbd;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 2%;
`

export const PForFirstData = styled.p`
  width: 33%;
  text-align: left;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  margin-right: 18%;
`

export const PForSecondtData = styled.p`
  text-align: left;
  width: 33%;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  margin-right: 18%;
  color: #616161;
`

export const BoxForForm = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  padding: 1%;
`
export const BodyForForm = styled.div`
  flex: 1;
  border-radius: 24px;
  box-shadow: 0px 0px 25px 0px #a3a3a333;
  margin: 2%;
  padding: 1%;
`
export const BackButton = styled.button`
  border-radius: 50%;
  border: none;
  margin-right: 1%;
`
export const TitleEditCreate = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0;
  color: #212121;
`
export const DivForTitle = styled.div`
  height: 10vh;
  margin: 1%;
  padding: 1%;
  display: flex;
`
export const EditButtonUser = styled.button`
  width: 33%;
  background-color: white;
  border-radius: 10px;
  border-color: #e0e0e0;
  border-width: 1.3px;
  border-style: solid;
  padding: 2%;
  //margin-left: 2%;
  //margin-top: 5%;

  margin-bottom: 5%;
  box-shadow: 2px 2px 10px 0px #bbc0cd99;

  img {
    width: 70%;
    height: 90%;
  }
`
export const EditButtonUser1 = styled.button`
  //width: 33%;
  background-color: white;
  border-radius: 10px;
  border-color: #e0e0e0;
  border-width: 1.3px;
  border-style: solid;
  padding: 2%;
  //margin-left: 2%;
  //margin-top: 5%;

  margin-bottom: 5%;
  box-shadow: 2px 2px 10px 0px #bbc0cd99;

  img {
    width: 70%;
    height: 90%;
  }
`

export const GreenButtonForUser = styled.button`
  width: 60%;
  //height: 100%;
  padding: 4%;
  border-radius: 16px;
  background: #00c247;
  color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  margin-right: 2%;
  padding: 0.8%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
  img {
    width: 8%;
    height: 35%;
    margin-right: 2%;
  }
`
