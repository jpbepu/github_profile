import styled from 'styled-components'
import { Props } from '.';



export const P = styled.p<Props>`

    color: ${(props) => (props.type === 'primary' ? props.theme.corParagrafo : props.theme.corParagrafoSecundaria)};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;

`