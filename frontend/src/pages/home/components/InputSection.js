import React from 'react';
import Body from './Body';
import { Input, InputLabelWrap, Label } from './styles/Home.styles';

const InputSection = (props) => {


    return(
        <Body>
            <InputLabelWrap>
                <Label>SECRET MESSAGE*</Label>
                <Input 
                    placeholder='Type your secret message...'

                />
            </InputLabelWrap>
        </Body>
    );
}

export default InputSection;