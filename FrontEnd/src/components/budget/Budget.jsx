import React, { useState } from 'react';
import EnhancedTable from '../comp/table';
import BasicModal from '../comp/button_modal'
import Navbar from '../navbar/Navbar'

function TravelBudgetCalculator() {
  return (
    <div className='base'>
      <Navbar />
      <div className="grid-container">
        <BasicModal />
        <div className="card">

          <EnhancedTable />
        </div>
      </div>
    </div>
  );
}

export default TravelBudgetCalculator;