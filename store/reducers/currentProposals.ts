import { PayloadAction } from '@reduxjs/toolkit';
import { currentProposal } from '../mock';

const initialState = {
 currentProposal: currentProposal
};

 export const Proposals = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'currentProposal':
     return state;
  }
  return state;
};

