import styled from 'styled-components'

export const MomDiv = styled.div`
  height: 35%;
  display: flex;
  margin: 2%;
`

//welcome styles

export const GreenDiv = styled.div`
  background: #046639;
  width: 55%;
  height: 100%;
  border-radius: 10px;
  padding: 2%;
`
export const ElipseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50%;
`

export const DivForImage = styled.div`
  width: 50%;
  position: relative;
  img {
    position: absolute;
    bottom: 2%;
  }
`
export const HeaderCalendarWelcome = styled.div`
  width: 100%;
  color: #ffff;
  margin-top: 1.5%;
`

export const SpanCalendar = styled.span`
  background-color: #0e9658;
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`

export const WelcomeText = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 30px; //36px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0em;
`

export const SubtitleWelcome = styled.p`
  font-family: 'Sora', sans-serif;
  color: #e0e0e0;
  font-size: 16px; //20px;
  font-weight: 400;
  //line-height: 28px;
  letter-spacing: 0.20000000298023224px;
`

//Cards styles

export const CountDashboardFatherDiv = styled.div`
  box-shadow: 0px 7px 30px 0px #bbc0cd66;
  margin-left: 2%;
  border-radius: 20px;
  //width: 100%;
  //height: 100%;
  padding: 1%;
`

export const TitleForCard = styled.p`
  color: #212121;
  font-family: 'Sora';
  font-size: 16px; //20px;
  font-weight: 600;
  //line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  margin-left: 2%;
  margin-top: 1%;
`
export const BoxDashboard = styled.div`
  display: flex;
  padding: 0.5%;
  border-radius: 10px;
  margin: 1%;
`
export const CardDashboard = styled.div`
  display: flex;
  background-color: #f5f5f5;
  margin: 1%;
  width: 100%;
  border-radius: 10px;
  padding: 2%;
`
export const IconeDashboard = styled.div`
  display: flex;
  width: 50%;
  margin-right: 20%;
  align-items: center;
  position: relative;
  img {
    position: absolute;
    padding-right: 30%;
  }
  .circle {
    width: 150%;
  }
  .icon {
    width: 100%;
    margin-left: 25%;
  }
`
export const TotalNumDiv = styled.div`
  width: 100%;
  padding: 1%;
  margin: 0 auto;
  /*display: flex;
  flex-direction: column;
  align-items: center;*/
`
export const TotalTitle = styled.p`
  color: #757575;
  font-family: 'Poppins';
  font-size: 12px; //16px;
  font-weight: 400;
  //line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`
export const NumTitle = styled.p`
  color: #212121;
  font-family: 'Sora';
  font-size: 22px; //32px;
  font-weight: 600;
  //line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
`
