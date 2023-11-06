import { configureStore } from '@reduxjs/toolkit';
import employee from '../features/employee';

export default configureStore({
  reducer: {
    employee,
  },
});
