import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  currentBoardName: '',
  // Manage the state for opening and closing the Add and Edit Board modal
  isAddAndEditBoardModal: { isOpen: false, variant: '' },
  //add and edit tasks modal state
  isAddAndEditTaskModal: {
    isOpen: false,
    variant: '',
    title: '',
    index: -1,
    name: '',
  },
};

export const features = createSlice({
  name: 'features',
  initialState,

  reducers: {
    setCurrentBoardName: (state, action: PayloadAction<string>) => {
      state.currentBoardName = action.payload;
    },
    // Open the Add and Edit Board modal with a specified variant (add or edit)
    openAddAndEditBoardModal: (state, { payload }) => {
      state.isAddAndEditBoardModal.isOpen = true;
      // Set the kind of modal to open (add board or edit board) based on the variant parameter
      state.isAddAndEditBoardModal.variant = payload;
    },
    // Close the Add and Edit Board modal
    closeAddAndEditBoardModal: (state) => {
      state.isAddAndEditBoardModal.isOpen = false;
      state.isAddAndEditBoardModal.variant = '';
    },
    // Open the Add and Edit task modal with a specified variant (add or edit), title, description, status
    openAddAndEditTaskModal: (state, { payload }) => {
      state.isAddAndEditTaskModal.isOpen = true;
      state.isAddAndEditTaskModal.variant = payload.variant;
      state.isAddAndEditTaskModal.title = payload.title;
      state.isAddAndEditTaskModal.index = payload.index;
      state.isAddAndEditTaskModal.name = payload.name;
    },
    // Close the Add and Edit task modal
    closeAddAndEditTaskModal: (state) => {
      state.isAddAndEditTaskModal.isOpen = false;
      state.isAddAndEditTaskModal.variant = '';
      state.isAddAndEditTaskModal.title = '';
      state.isAddAndEditTaskModal.index = 0;
      state.isAddAndEditTaskModal.name = '';
    },
  },
});
export const {
  setCurrentBoardName,
  openAddAndEditBoardModal,
  closeAddAndEditBoardModal,
  openAddAndEditTaskModal,
  closeAddAndEditTaskModal,
} = features.actions;
export const getCurrentBoardName = (state: RootState) =>
  state.features.currentBoardName;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalValue = (state: RootState) =>
  state.features.isAddAndEditBoardModal.isOpen;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalVariantValue = (state: RootState) =>
  state.features.isAddAndEditBoardModal.variant;
// Selector function to retrieve isOpen state value
export const getAddAndEditTaskModalValue = (state: RootState) =>
  state.features.isAddAndEditTaskModal.isOpen;
// Selector function to retrieve variant state value
export const getAddAndEditTaskModalVariantValue = (state: RootState) =>
  state.features.isAddAndEditTaskModal.variant;
// Selector function to retrieve title state value
export const getAddAndEditTaskModalTitle = (state: RootState) =>
  state.features.isAddAndEditTaskModal.title;
// Selector function to retrieve index state value
export const getAddAndEditTaskModalIndex = (state: RootState) =>
  state.features.isAddAndEditTaskModal.index;
// Selector function to retrieve name state value
export const getAddAndEditTaskModalName = (state: RootState) =>
  state.features.isAddAndEditTaskModal.name;
// Export the reducer for use in the Redux store
export default features.reducer;
