import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';


//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                        <div className='col-sm'>
                        <Budget />
                        </div>
                            /* Add Budget component here */
                        }        

                        {
                            /* Add Remaining component here*/
                                             //Remaining component
                            <div className='col-sm'>
                                      <Remaining/>
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'>
                               <ExpenseTotal />
                             </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            <div>
                                <ExpenseList/>
                                
                            </div>


                            
                        }         

                        {
                            /* Add ExpenseItem component here */
                            <div>
                                <ExpenseItem/>
                            </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-sm'>
                                <AllocationForm/>
                            </div>

                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
