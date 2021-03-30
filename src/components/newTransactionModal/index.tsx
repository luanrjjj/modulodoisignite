import Modal from 'react-modal';
import {Container, RadioBox, TransactionTypeContainer} from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {FormEvent,useState} from 'react';

import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext/TransactionsContext';



interface NewTransactionModalProps {
    isOpen:boolean;
    onRequestClose:() => void;

}



export function NewTransactionModal ({isOpen,onRequestClose}:NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);

    
        const [type,setType] = useState('deposit');
        const [amount,setAmount] = useState(0)
       
        const [title,setTitle] = useState('')
        const [category,setCategory] = useState('');
   
async function handleCreateNewTransaction(event:FormEvent) {
event.preventDefault()



await createTransaction({
    title,
    category,
    amount,
    type
})

setTitle ('');
setAmount(0);
setCategory('');
setType('');
onRequestClose();
}
        
    
    return (
        <Modal 
         isOpen = {isOpen} 
         onRequestClose = {onRequestClose}
         overlayClassName="react-modal-overlay" 
         className = "react-modal-content" 
         >
        
         <button type = "button" onClick = {onRequestClose} className="react-modal-close">

             <img src = {closeImg} alt="FecharModal"/>
         </button>


                <Container onSubmit = {handleCreateNewTransaction}>

                <h2>Cadastrar Transação</h2>
                <input 
                placeholder="Titulo" 
                value = {title}
                onChange = {event => setTitle(event.target.value)}
                
                />
                <input
                 type = "number" 
                 placeholder="Valor"
                 value = {amount}
                 onChange = {event => setAmount(Number(event.target.value))}

                  />



               <TransactionTypeContainer>
              <RadioBox
                 
                type = "button"
                className = {type === 'deposit'? 'active':''} 
                onClick = {()=> {setType('deposit');}}
                isActive = {type === 'deposit'}
                activeColor = 'green'
                >
                  <img src = {incomeImg} alt = "entrada"/>
                  <span>Entrada</span>
                

                </RadioBox>

                
                <RadioBox


              
              type = "button"
              onClick = {()=> {setType('withdraw');}}
              isActive = {type==='withdraw'}
              activeColor = "red">

                  <img src = {outcomeImg} alt = "saida"/>
                  <span>Saída</span>
              
              </RadioBox>
             </TransactionTypeContainer>


                <input 
                placeholder="Categoria" 
                 value = {category}
                 onChange = {event => setCategory(event.target.value)}
                
                />
                <button type="submit" onClick = {handleCreateNewTransaction}>
                    Cadastrar
                </button>
              

                </Container>
        </Modal>
    )
}