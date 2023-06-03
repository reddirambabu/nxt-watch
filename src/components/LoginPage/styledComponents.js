import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const LoginForm = styled.form`
  background-color: ${props => props.bgColor};
  padding: 15px;
  width: 90%;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  margin: auto;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const Image = styled.img`
  width: 60%;
  height: 35px;
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 140px;
  }
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const Label = styled.label`
  line-height: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const Input = styled.input`
  height:48px ;
  width:100% ;
  padding-left:10px ;
  padding-right:10px ;
  padding-top:5px ;
  padding-bottom:5px ;
  font-size:18px ;
  font-weight:bold ;
  font-family='Roboto' ;
  border-radius:4px ;
  outline:none ;
  color : ${props => (props.isDarkMode === true ? '#ffffff' : '#231f20')} ;
  margin-top:10px;
  border: ${props =>
    props.isDarkMode === true ? 'none' : '1px solid #616e7c'} ; ;
`

export const CheckBoxContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`

export const CheckboxLabel = styled.label`
  line-height: 18px;
  color: ${props => (props.isDarkMode === true ? '#ffffff' : '#231f20')};
`
export const LoginButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  height: 48px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 18px;
  text-align: start;
  align-self: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
`
