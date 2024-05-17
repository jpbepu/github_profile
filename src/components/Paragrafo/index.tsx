import { P } from './styles'


export type Props = {
    children: string | string[];
    type?: 'primary' | 'secondary';
}


const Paragrafo = ({ children, type = 'primary'}: Props) =>(
    <P type={type}>
        {children}
    </P>
)

export default Paragrafo