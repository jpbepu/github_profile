import styled from 'styled-components'
import { Props } from '.';



export const P = styled.p<Props>`

    color: ${(props) => (props.type === 'primary' ? '#E6EDF3' : '#949494')};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;

`