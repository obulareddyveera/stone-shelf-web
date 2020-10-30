import React from "react";

const GridComponent = (props) => {
  const { config, data } = props;
  console.log('--== GridComponent ', config, props);

  return (
    <div className="d-flex justify-content-around">
      <table className="table">
        <thead>
          <tr>
            {config && config.columns &&
              config.columns.length > 0 &&
              config.columns.map((item, index) => {
                return <td>{item.displayName}</td>;
              })}
          </tr>
        </thead>
        <tbody>
          {data && data.length == 0 ? (
            <tr>
              <td colSpan="5">
                <span className="d-flex justify-content-center">
                  No records found
                </span>
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GridComponent;
