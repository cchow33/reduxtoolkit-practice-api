import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  // Initial state can be empty
  initialState: {
    name: 'Lucien',
    email: 'lucien@gmail.com'
  },

  // When button is clicked, the new name and email will be sent to the reducers.

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}), // no users
    addHello: (state, action) => {
      state.name = "Hello " + action.payload.name;
    } 
  },
});

// export 'update' action to use 'Update.js' file, and 'reducer' to use in our 'store
export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;

// Write the action then export it 



