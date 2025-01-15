import { createSlice } from '@reduxjs/toolkit'
import { FiltersInterface } from '../../interfaces/filters.interface';


const filtersData: FiltersInterface = {
  roles: [],
  stack: [],
  exp: {
    from: 0,
    to: 100,
}
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: filtersData,
  },
  reducers: {
    setRoles: (state, action) => {
      state.filters.roles = action.payload;
    },
    setStack: (state, action) => {
      state.filters.stack = action.payload;
    },
    setExp: (state, action) => {
      state.filters.exp = action.payload;
    },
    setFiltersDefault: (state) => {
      state.filters = filtersData;
    },
  },
});

export const { setRoles, setStack, setExp, setFiltersDefault } = filtersSlice.actions;

export default filtersSlice.reducer;
