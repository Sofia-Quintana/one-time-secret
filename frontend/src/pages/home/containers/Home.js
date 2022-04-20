import React, { useState } from 'react';
import { ButtonsContainer, Container, Paragraph, SubmitButton } from '../components/styles/Home.styles';
import axios from 'axios';
import InputSection from '../components/InputSection';

export const Home = () => {
    const [ secret, setSecret ] = useState('');
    const [ url, setUrl ] = useState('');

    const generateSecretLink = async (secret) => {
        const response = await axios.post(`http://localhost:3030/`, { secret: secret });
        return response.data;
    }

    const submit = (e) => {
        e.preventDefault();

    };

    return(
        <Container>
            <form id='form' onSubmit={ submit }>
                <Paragraph>* Indicates required field</Paragraph>
                <InputSection />
                <ButtonsContainer>
                    <SubmitButton type='submit' onClick={ submit }>SUBMIT</SubmitButton>
                </ButtonsContainer>
            </form>
        </Container>
    );
};

export default Home;