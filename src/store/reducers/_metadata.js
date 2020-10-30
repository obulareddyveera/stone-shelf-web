import { metaDataTypes } from "../types/_metadata";

export default function Users(state, action) {
  const initState = {
    isLoading: true,
    dateLastModified: new Date().getTime(),
  };
  if (!state) return initState;

  switch (action.type) {
    case metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS:
      return {
        isLoading: false,
        dateLastModified: new Date().getTime(),
        sideMenuMetaInfo: [...action.payload],
      };
    default:
      return { ...state };
  }
}
