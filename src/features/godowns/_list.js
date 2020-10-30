import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGridConfig, selectGodowns } from "./_redux";
import GridComponent from "./../../components/grid";

const ListService = () => {
  const dispatch = useDispatch();
  const { gridConfig } = useSelector(selectGodowns);
  console.log("--== Godowns GridConfig ", gridConfig);

  React.useEffect(() => {
    console.log("--== I am useEffect ==--");
    dispatch(getGridConfig());
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-end mb-2">
                <a
                  href="/features/godowns/create"
                  className="btn btn-sm btn-primary"
                >
                  Add New Godown
                </a>
              </div>
              {gridConfig && <GridComponent data={[]} config={gridConfig} />}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListService;
