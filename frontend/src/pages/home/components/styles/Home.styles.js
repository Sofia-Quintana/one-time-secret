import styled from 'styled-components';

const redColor = 'rgb(225 131 149)';
const blueColor = 'rgb(0 117 190 / 45%)';

export const Container = styled.div`
    width: auto;
    height: auto;
    padding: 5rem 2rem;
    margin: 0;
    background: rgb(188, 212, 230);
`;

export const FormContainer = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 33%;
    background: rgb(245 245 245);
    border-radius: 15px 100px / 120px;
    width: 35%;
    padding-bottom: 2%;
    padding-top: 2%;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 4%;
    margin-bottom: 4%;
`;

export const Paragraph = styled.p`
	color: rgb(154 151 151);
`;

export const Input = styled.textarea`
	display: inherit;
	width: 75%;
	padding: 2% 7px;
	margin-top: 3%;
	margin-bottom: 3%;
	border: ${(props) => (props.valid || props.valid === undefined ? blueColor : redColor)} 3.5px solid;
	border-radius: 15px;
	box-shadow: 2px 2px 3px rgb(80 190 188 / 33%);
	background: ${(props) => (props.valid || props.valid === undefined ? 'white' : 'rgb(248 231 231)')};
`;

export const Title = styled.h1`
`;

export const ButtonsContainer = styled.div`
	margin-top: 10%;
	display: flex;
	justify-content: flex-start;
	align-content: stretch;
	flex-wrap: wrap;
	align-items: baseline;
`;

export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 25px;
  background: rgb(58 0 61);
  color: rgb(255 255 255);
  font-size: 1.1em;
  padding: 9px 60px;
  margin-right: 50px;
  margin-bottom: 20px;
  box-shadow: 3px 2px 5px rgb(0 0 0 / 56%);
`;

export const Label = styled.label`
`;

export const InputLabelWrap = styled.div`
	width: 50%;
`;