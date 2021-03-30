import {useState} from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from '../src/components/Header';
import { Dashboard } from '../src/components/Dashboard';
import { NewTransactionModal } from './components/newTransactionModal';
import { TransactionsProvider } from './TransactionsContext/TransactionsContext';



export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal () {
      setIsNewTransactionModalOpen (true);

  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOpen(false);
  }
  return (
   <TransactionsProvider>
   
    <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>


    
    <Dashboard/>
    <NewTransactionModal
       isOpen = {isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />
   
    
    <GlobalStyle/>

   
</TransactionsProvider>
    
  );
}

