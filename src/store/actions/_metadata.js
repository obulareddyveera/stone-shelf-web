import _ from "underscore";
import { metaDataTypes } from "../types/_metadata";
import SideMenuMetaInfo from "../metadata/sideMenuMetaInfo";

export const getSideMenuMetaData = () => async (dispatch) => {
  try {
    dispatch({
      type: metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS,
      payload: SideMenuMetaInfo,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onLiItemSelect = (itemList, item) => async (dispatch) => {
  try {
    const clonedItemList = _.map(itemList, _.clone);
    clonedItemList.forEach((entity) => {
      if (entity.subMenu && entity.subMenu.length > 0) {
        entity.subMenu.forEach((subEntity) => {
          if (subEntity.id === item.id) {
            subEntity.className = "active";
            entity.className = "active";
          } else {
            subEntity.className = null;
            entity.className = null;
          }
        });
      } else {
        if (entity.id === item.id) {
          entity.className = "active";
        } else {
          entity.className = null;
        }
      }
    });

    dispatch({
      type: metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS,
      payload: clonedItemList,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onToggleSubmenu = (itemList, item) => async (dispatch) => {
  console.log('--== I came to action of onToggleSubmenu ==--', itemList);
  try {
    const clonedItemList = _.map(itemList, _.clone);
    clonedItemList.forEach((entity) => {
      const newEntity = Object.create(entity);
      if (entity.id === item.id) {
        entity.showSubmenu = !entity.showSubmenu;
      }
    });

    dispatch({
      type: metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS,
      payload: clonedItemList,
    });
  } catch (err) {
    console.log(err);
  }
};
