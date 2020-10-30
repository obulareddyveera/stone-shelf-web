import _ from "underscore";
import { createSlice } from "@reduxjs/toolkit";

export const godownsSlice = createSlice({
  name: "godowns",
  initialState: {
    isLoading: true,
    dateLastModified: new Date().getTime(),
    gridConfig: [],
  },
  reducers: {
    gridConfig: (state, action) => {
      state.gridConfig = action.payload;
    },
  },
});

export const { gridConfig } = godownsSlice.actions;

export const getGridConfig = () => (dispatch) => {
  dispatch(
    gridConfig({
      columns: [
        { displayName: "", map: "rowNum", dataType: "Integer" },
        { displayName: "Name", map: "name", dataType: "String" },
        { displayName: "Flag", map: "flag", dataType: "String" },
        { displayName: "Search Tags", map: "searchTags", dataType: "String" },
      ],
    })
  );
};

export const selectGodowns = state => {
    console.log("--== Select GoDowns ", state)
    return {
        gridConfig: state.godowns.gridConfig
    }
};

export default godownsSlice.reducer;
