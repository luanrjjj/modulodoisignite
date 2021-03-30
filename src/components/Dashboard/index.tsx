import { Container } from './styles';

import { Summary } from '../Summary'
import { TransactionsTable } from '../Transactions';

export function Dashboard () {
    return (
       <Container>
         <Summary/>
         <TransactionsTable/>
       </Container>
    )
}