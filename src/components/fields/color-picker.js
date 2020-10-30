import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const Palette = styled.div`
  position: absolute;
  z-index: 100;
  box-sizing: initial;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.15) 0px 8px 16px;
`;

const ColorPicker = (props) => {
  const [pickerColor, setPickerColor] = React.useState();
  const [showColorPic, setShowColorPic] = React.useState();

  const onColorPick = (color) => {
    setPickerColor(color.rgb);
    console.log("--== 1 New Color Picked ", pickerColor, color);
    props.fieldValue(color.hex);
  };

  return (
    <div>
      <input {...props} onClick={() => setShowColorPic(true)} />
      {showColorPic && (
        <Palette className="border">
          <SketchPicker color={pickerColor} onChange={onColorPick} />
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-info btn-sm m-2"
              onClick={() => setShowColorPic(false)}
            >
              Close
            </button>
          </div>
        </Palette>
      )}
    </div>
  );
};

export default ColorPicker;
