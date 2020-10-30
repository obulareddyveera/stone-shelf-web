import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import actions from "./../../store/actions";

/**
 * Source URL -- https://bootsnipp.com/snippets/prnvG
 */

export default function AppNavigationMenu() {
  const { metadataActions } = actions;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    dispatch(metadataActions.getSideMenuMetaData());
  }, []);

  const { metaData } = useSelector((state) => {
    console.log('--== useSelector ', state);

    return {
      metaData: state.MetaData,
    };
  });
  const { sideMenuMetaInfo } = metaData;

  const onLiClick = (event, item) => {
    if (item.subMenu) {
      event.preventDefault();
      event.stopPropagation();
      console.log("--== This Item has SubMenu ==--");
      dispatch(metadataActions.onToggleSubmenu(sideMenuMetaInfo, item));
    } else {
      dispatch(metadataActions.onLiItemSelect(sideMenuMetaInfo, item));
    }
  };

  const getLinkTag = (item) => {
    const randomUniqueId = `submenuId${new Date().getTime()}_${item.id}`;

    return (
      <li
        className={item.className}
        key={item.id}
        onClick={(event) => onLiClick(event, item)}
      >
        <React.Fragment>
          {item.type === "link" && (
            <React.Fragment>
              <a href={item.url} className="d-flex justify-content-start">
                <div>
                  {item.iconComponent &&
                    React.createElement(item.iconComponent, {
                      size: "20",
                      color: "#fff",
                    })}
                </div>
                <div className="ml-3">{t(item.translation)}</div>
                <div>
                  {item.subMenu && (
                    <button className="btn text-white submenu-indicator">
                      {item.showSubmenu ? "-" : "+"}
                    </button>
                  )}
                </div>
              </a>
            </React.Fragment>
          )}
          {item.type === "info" && (
            <a href="#" onClick={(event) => event.preventDefault()}>
              {t(item.translation)}
            </a>
          )}
          {item.subMenu && (
            <ul
              className={`submenu ${item.showSubmenu ? "d-block" : "d-none"}`}
              key={randomUniqueId}
              id={randomUniqueId}
            >
              {item.subMenu.map((entity) => {
                return getLinkTag(entity);
              })}
            </ul>
          )}
        </React.Fragment>
      </li>
    );
  };

  return (
    <React.Fragment>
      {sideMenuMetaInfo && sideMenuMetaInfo.length > 0 && (
        <div id="jquery-accordion-menu" className="jquery-accordion-menu">
          <ul>
            {sideMenuMetaInfo.map((item) => {
              return getLinkTag(item);
            })}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
