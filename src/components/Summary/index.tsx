import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext/TransactionsContext';


export function Summary () {
 const { transactions } = useContext(TransactionsContext)

 const totalDeposits = transactions.reduce((acc,transaction) => {
     if (transaction.type ==='deposit') {
         return acc + transaction.amount;
     }
     return acc
 },0)

 const totalWithdraw = transactions.reduce((acc,transaction) => {
    if (transaction.type ==='withdraw') {
        return acc + transaction.amount;
    }
    return acc
},0)

const totalBalance = transactions.reduce((acc,transaction) => {
    (transaction.type==='withdraw'? acc= -transaction.amount + acc :acc=transaction.amount + acc)
      
              
        return acc
},0)
   
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src = {incomeImg} alt="Income"/>
                </header>
                <strong> {totalDeposits}</strong>
            </div>
          <div>
              <header>
                  <p>Saída</p>
                  <img src={outcomeImg} alt = "Total"/>

              </header>
              <strong>- {totalWithdraw}</strong>
          </div>

          <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src = {totalImg} alt="Total"/>
                </header>
                <strong> {totalBalance} </strong>
            </div>


        </Container>
    )


}