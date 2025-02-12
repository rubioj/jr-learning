/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Radio } from "../Radio";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import "./style.css";

export const Contact = ({
  breakpoint,
  className,
  buttonDivClassName,
  buttonStylePrimarySmallClassName,
  inputType = "text",
  inputType1 = "text",
  inputType2 = "email",
  inputType3 = "tel",
}) => {
  return (
    <div className={`contact ${className}`}>
      <div className="section-title">
        <div className="tagline-wrapper">
          <div className="text-wrapper-6">Tagline</div>
        </div>

        <div className="content">
          <div className="heading">Contact us</div>

          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="form">
        <div className="inputs">
          <div className="input">
            <input
              className="div-4"
              placeholder="First name"
              type={inputType}
            />

            <div className="type-default" />
          </div>

          <div className="input">
            <input
              className="div-4"
              placeholder="Last name"
              type={inputType1}
            />

            <div className="type-default" />
          </div>
        </div>

        <div className="inputs">
          <div className="input">
            <input className="div-4" placeholder="Email" type={inputType2} />

            <div className="type-default" />
          </div>

          <div className="input">
            <input
              className="div-4"
              placeholder="Phone number"
              type={inputType3}
            />

            <div className="type-default" />
          </div>
        </div>

        <div className="input-2">
          <div className="text-wrapper-7">Choose a topic</div>

          <Select
            alternate={false}
            className="select-instance"
            divClassName="design-component-instance-node-2"
            type="default"
          />
        </div>

        <div className="radios">
          <div className="text-wrapper-8">Which best describes you?</div>

          <div className="content-2">
            <div className="row">
              <Radio
                alternate={false}
                className="selected-false"
                labelClassName="design-component-instance-node-2"
                selected={false}
                text="First choice"
              />
              <Radio
                alternate={false}
                className="selected-false"
                labelClassName="design-component-instance-node-2"
                selected={false}
                text="Second choice"
              />
            </div>

            <div className="row">
              <Radio
                alternate={false}
                className="selected-false"
                labelClassName="design-component-instance-node-2"
                selected={false}
                text="Third choice"
              />
              <Radio
                alternate={false}
                className="selected-false"
                labelClassName="design-component-instance-node-2"
                selected={false}
                text="Fourth choice"
              />
            </div>

            <div className="row">
              <Radio
                alternate={false}
                className="selected-false"
                labelClassName="design-component-instance-node-2"
                selected={false}
                text="Fifth choice"
              />
              <Radio
                alternate={false}
                className="selected-false"
                labelClassName="design-component-instance-node-2"
                selected={false}
                text="Other"
              />
            </div>
          </div>
        </div>

        <div className="input-2">
          <div className="text-wrapper-7">Message</div>

          <TextArea
            alternate={false}
            className="alternate-false"
            divClassName="design-component-instance-node-2"
            line="/img/line-1.svg"
            lineClassName="text-area-instance"
            lineClassNameOverride="alternate-false-2"
          />
        </div>

        <Checkbox
          alternate={false}
          className="checkbox-instance"
          labelClassName="selected-false-2"
          selected={false}
          text="I accept the Terms"
        />
        <Button
          alternate={false}
          divClassName={buttonDivClassName}
          iconPosition="no-icon"
          small={false}
          style="primary"
          stylePrimarySmallClassName={buttonStylePrimarySmallClassName}
          text="Submit"
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop"]),
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  inputType2: PropTypes.string,
  inputType3: PropTypes.string,
};
