import React from "react";
import { Formik, FieldArray } from "formik";

import { ExpandMore, ChevronRight, Check } from "@styled-icons/material";
import { Times } from "@styled-icons/fa-solid";
import ColorPicker from "./../../components/fields/color-picker";
const Home = () => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          place: {
            long: "",
            wide: "",
            dimension: "Feet",
          },
          rows: [{ flag: "Red", name: "Granite", searchTags: "granite, 8x4" }],
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div>Add / Edit: Inventory Godown</div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div class="form-group col-sm-12 col-md-6">
                  <label for="inventoryName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inventoryName"
                    name="inventoryName"
                    value={values.place.name}
                    placeholder="Name"
                  />
                </div>
                <div class="form-group col-sm-12 col-md-6">
                  <label for="flag">Flag Color</label>
                  <ColorPicker
                    type="text"
                    class="form-control"
                    id="flag"
                    name="flag"
                    value={values.place.flag}
                    placeholder="Flag"
                    fieldValue={(color) => setFieldValue("place.flag", color)}
                  />
                </div>
              </div>
              <div className="row">
                <div class="form-group col-sm-12 col-md-6">
                  <label for="long">Long (Feet)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="long"
                    name="long"
                    value={values.place.long}
                    placeholder="Long In Feet"
                  />
                </div>
                <div class="form-group col-sm-12 col-md-6">
                  <label for="wide">Wide (Feet)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="wide"
                    name="wide"
                    value={values.place.wide}
                    placeholder="Wide In Feet"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <FieldArray
                    name="rows"
                    render={(arrayHelpers) => (
                      <React.Fragment>
                        <div className="col-12 mb-2 d-flex justify-content-end">
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() =>
                              arrayHelpers.insert(values.rows.length + 1, {
                                isNewEntity: true,
                              })
                            }
                          >
                            Add Row
                          </button>
                        </div>
                        <div className="row border bg-dark text-white">
                          <div className="col-1 p-2 border"></div>
                          <div className="col-1 p-2 border">#</div>
                          <div className="col-3 p-2 border">Flag</div>
                          <div className="col-3 p-2 border">Name</div>
                          <div className="col-4 p-2 border">Search Tags</div>
                        </div>
                        {values.rows &&
                          values.rows.length > 0 &&
                          values.rows.map((item, index) => {
                            return (
                              <div className="row border">
                                <div className="col-1">
                                  <button className="btn btn-link btn-sm">
                                    <ChevronRight size="24" />
                                  </button>
                                </div>
                                <div className="col-1">{index + 1}</div>
                                <div className="col-3">{item.flag}</div>
                                <div className="col-3">{item.name}</div>
                                <div className="col-4">{item.searchTags}</div>
                              </div>
                            );
                          })}
                      </React.Fragment>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Home;
