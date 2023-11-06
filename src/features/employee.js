import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  street: '',
  city: '',
  zipCode: '',
  stateAbbrev: '',
  startDate: '',
  department: '',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    setStateAbbrev: (state, action) => {
      state.stateAbbrev = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setDateOfBirth,
  setStreet,
  setCity,
  setZipCode,
  setStateAbbrev,
  setStartDate,
  setDepartment,
} = employeeSlice.actions;

export default employeeSlice.reducer;
