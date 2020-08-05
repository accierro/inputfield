import { createElement, useState, useRef, useLayoutEffect, useCallback } from 'react';
import styled from 'styled-components';
import { IoIosEyeOff, IoIosEye, IoIosWarning } from 'react-icons/io';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var colors = {
    black: "#2d2d2d",
    darkGrey: "#4e4e4e",
    mediumGrey: "#767676",
    lightGrey: "#d3d3d3",
    lightestGrey: "#f4f4f4",
    active: "#2964c3",
    darkerActive: "#1A50A7",
    lightenActive: "#5688D8",
    error: "#d52828",
    lightError: "#f8eaea",
};

var StyledCheckbox = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 21px;\n  height: 21px;\n  margin: 0;\n  margin-right: 5px;\n  appearance: none;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;\n\n  + label {\n    cursor: pointer;\n  }\n\n  &:after {\n    content: \"\";\n    display: block;\n    left: 0;\n    top: 0;\n    position: absolute;\n    transition: opacity 0.2s transform 0.3s;\n  }\n\n  &:checked,\n  &:not(:checked) {\n    &:after {\n      width: 4px;\n      height: 10px;\n      border: 2px solid white;\n      border-top: 0;\n      border-left: 0;\n      left: 7px;\n      top: 2px;\n      transform: rotate(34deg);\n    }\n  }\n\n  &:checked {\n    background: ", ";\n    border-color: ", ";\n    &:after {\n      opacity: 1;\n    }\n  }\n\n  &:not(:checked) {\n    &:after {\n      opacity: 0;\n      transform: rotate(24deg);\n    }\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0px 0px 0px 3px ", "88;\n  }\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    border-color: ", ";\n\n    + label {\n      cursor: not-allowed;\n    }\n    &:not(:checked) {\n      background: ", ";\n    }\n\n    &:checked {\n      background: ", ";\n    }\n  }\n"], ["\n  width: 21px;\n  height: 21px;\n  margin: 0;\n  margin-right: 5px;\n  appearance: none;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;\n\n  + label {\n    cursor: pointer;\n  }\n\n  &:after {\n    content: \"\";\n    display: block;\n    left: 0;\n    top: 0;\n    position: absolute;\n    transition: opacity 0.2s transform 0.3s;\n  }\n\n  &:checked,\n  &:not(:checked) {\n    &:after {\n      width: 4px;\n      height: 10px;\n      border: 2px solid white;\n      border-top: 0;\n      border-left: 0;\n      left: 7px;\n      top: 2px;\n      transform: rotate(34deg);\n    }\n  }\n\n  &:checked {\n    background: ", ";\n    border-color: ", ";\n    &:after {\n      opacity: 1;\n    }\n  }\n\n  &:not(:checked) {\n    &:after {\n      opacity: 0;\n      transform: rotate(24deg);\n    }\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0px 0px 0px 3px ", "88;\n  }\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    border-color: ", ";\n\n    + label {\n      cursor: not-allowed;\n    }\n    &:not(:checked) {\n      background: ", ";\n    }\n\n    &:checked {\n      background: ", ";\n    }\n  }\n"])), colors.lightGrey, colors.active, colors.active, colors.active, colors.active, colors.active, colors.lightGrey, colors.lightestGrey, colors.lightGrey);
var Checkbox = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.disabled, disabled = _b === void 0 ? false : _b, value = _a.value, onChange = _a.onChange;
    return (createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center" } },
        createElement(StyledCheckbox, { type: "checkbox", id: id, checked: value, disabled: disabled, onChange: function (e) {
                onChange(e.target.checked);
            } }),
        createElement("label", { htmlFor: id, style: { color: disabled ? colors.darkGrey : colors.black } }, label)));
};
var templateObject_1;

var StyledTextInput = styled.input(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  height: 34px;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 1px solid\n    ", ";\n  padding: 4px;\n  font-size: 16px;\n  width: 100%;\n  transition: border-color 0.3s, box-shadow 0.2s;\n\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    outline: none;\n    border: 1px solid ", ";\n    box-shadow: 0px 0px 3px ", "88;\n  }\n"], ["\n  height: 34px;\n  box-sizing: border-box;\n  border-radius: 8px;\n  border: 1px solid\n    ",
    ";\n  padding: 4px;\n  font-size: 16px;\n  width: 100%;\n  transition: border-color 0.3s, box-shadow 0.2s;\n\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    outline: none;\n    border: 1px solid ", ";\n    box-shadow: 0px 0px 3px ", "88;\n  }\n"])), function (props) {
    return props.error ? colors.error : colors.lightGrey;
}, colors.lightestGrey, colors.active, colors.active);
var templateObject_1$1;

var Label = styled.label(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: normal;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  font-size: 18px;\n  font-weight: normal;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  color: ",
    ";\n"])), function (props) {
    return props.disabled ? colors.mediumGrey : props.color || colors.black;
});
var templateObject_1$2;

var Message = function (_a) {
    var message = _a.message;
    var ref = useRef(null);
    useLayoutEffect(function () {
        if (ref.current) {
            var rect = ref.current.getBoundingClientRect();
            ref.current.style.marginLeft = "-" + rect.width / 2 + "px";
            if (rect.y < 5) {
                ref.current.style.top = "100%";
                ref.current.style.bottom = "unset";
            }
        }
    }, []);
    return (createElement("div", { ref: ref, style: {
            position: "absolute",
            border: "1px solid " + colors.error,
            background: colors.lightError,
            color: colors.error,
            borderRadius: "8px",
            minWidth: "130px",
            maxWidth: "200px",
            padding: "4px",
            bottom: "100%",
            left: "50%",
            marginLeft: "-50%",
            boxShadow: "0 0 3px rgba(0,0,0, 0.3)",
            textAlign: "center",
        } }, message));
};
var IconWithMessage = function (_a) {
    var icon = _a.icon, message = _a.message;
    var _b = useState(false), showMessage = _b[0], setShowMessage = _b[1];
    return (createElement("div", { style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
        }, onMouseEnter: function () {
            setShowMessage(true);
        }, onMouseLeave: function () {
            setShowMessage(false);
        } },
        icon,
        showMessage && createElement(Message, { message: message })));
};

var Touchable = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  cursor: pointer;\n  border-radius: 50%;\n  padding: 3px;\n\n  &:active,\n  &:focus {\n    background: ", ";\n  }\n"], ["\n  cursor: pointer;\n  border-radius: 50%;\n  padding: 3px;\n\n  &:active,\n  &:focus {\n    background: ", ";\n  }\n"])), colors.lightGrey);
var PasswordInput = function (_a) {
    var id = _a.id, _b = _a.label, label = _b === void 0 ? "password" : _b, value = _a.value, disabled = _a.disabled, disabledReason = _a.disabledReason, error = _a.error, _c = _a.autocomplete, autocomplete = _c === void 0 ? "off" : _c, onChange = _a.onChange;
    var _d = useState(false), showPassword = _d[0], setShowPassword = _d[1];
    var _e = useState(false), isFocused = _e[0], setIsFocused = _e[1];
    var onChangeHandler = useCallback(function (e) {
        onChange(e.target.value);
    }, [onChange]);
    // const onBlurHandler = React.useCallback(
    //   (e) => {
    //     if (validationFn) {
    //       const result = validationFn(e.target.value);
    //       if (result.error) {
    //         setInternalError(result.message ?? "Validation error");
    //       } else {
    //         setInternalError(null);
    //       }
    //     }
    //   },
    //   [validationFn]
    // );
    return (createElement("div", { style: {
            display: "flex",
            flexDirection: "column-reverse",
        } },
        createElement("div", { style: { position: "relative" } },
            createElement(StyledTextInput, { id: id, disabled: disabled, title: disabled ? disabledReason : undefined, style: { paddingRight: "35px" }, autoComplete: autocomplete, error: error !== undefined, type: showPassword ? "text" : "password", value: value, onChange: onChangeHandler, onFocus: function () {
                    setIsFocused(true);
                }, onBlur: function () {
                    setIsFocused(false);
                } }),
            createElement(Touchable, { style: {
                    position: "absolute",
                    bottom: 1,
                    right: 4,
                    display: "flex",
                    alignItems: "center",
                }, onClick: function () {
                    setShowPassword(function (prev) { return !prev; });
                } }, showPassword ? createElement(IoIosEyeOff, { size: 25 }) : createElement(IoIosEye, { size: 25 }))),
        createElement(Label, { disabled: disabled, color: isFocused
                ? colors.active
                : error !== undefined
                    ? colors.error
                    : undefined, htmlFor: id },
            label,
            error && (createElement(IconWithMessage, { icon: createElement(IoIosWarning, { id: "warning-icon-input", size: 20, color: colors.error, style: { marginLeft: "8px" } }), message: error })))));
};
var templateObject_1$3;

var SubmitButton = styled.input(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: normal;\n  padding: 6px;\n  appearance: none;\n  border: none;\n  border-radius: 8px;\n  background: ", ";\n  color: white;\n  width: 100%;\n  outline: none;\n\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed !important;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", "88;\n  }\n\n  &:active {\n    background: ", ";\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  font-size: 20px;\n  font-weight: normal;\n  padding: 6px;\n  appearance: none;\n  border: none;\n  border-radius: 8px;\n  background: ", ";\n  color: white;\n  width: 100%;\n  outline: none;\n\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed !important;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", "88;\n  }\n\n  &:active {\n    background: ", ";\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), colors.active, colors.lightGrey, colors.active, colors.darkerActive);
var Submit = function (_a) {
    var placeholder = _a.placeholder, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return createElement(SubmitButton, { type: "submit", value: placeholder, disabled: disabled });
};
var templateObject_1$4;

var OptionalLabel = styled.span(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: 300;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  font-size: 14px;\n  font-weight: 300;\n  color: ", ";\n  margin-left: 8px;\n"])), colors.mediumGrey);
var TextInput = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.optional, optional = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, disabledReason = _a.disabledReason, value = _a.value, error = _a.error, onChange = _a.onChange;
    var _d = useState(false), isFocused = _d[0], setIsFocused = _d[1];
    // const [internalError, setInternalError] = React.useState<string | null>(null);
    var onChangeHandler = useCallback(function (e) {
        onChange(e.target.value);
    }, [onChange]);
    // const onBlurHandler = React.useCallback(
    //   (e) => {
    //     if (validationFn) {
    //       const result = validationFn(e.target.value);
    //       if (result.error) {
    //         setInternalError(result.message ?? "Validation error");
    //       } else {
    //         setInternalError(null);
    //       }
    //     }
    //   },
    //   [validationFn]
    // );
    return (createElement("div", { style: {
            display: "flex",
            flexDirection: "column-reverse",
        } },
        createElement(StyledTextInput, { id: id, disabled: disabled, title: disabled ? disabledReason : undefined, error: error !== undefined, type: "text", value: value, onChange: onChangeHandler, onFocus: function () {
                setIsFocused(true);
            }, onBlur: function () {
                setIsFocused(false);
            } }),
        createElement(Label, { disabled: disabled, color: isFocused
                ? colors.active
                : error !== undefined
                    ? colors.error
                    : undefined, htmlFor: id },
            label,
            optional && createElement(OptionalLabel, null, "Optional"),
            error && (createElement(IconWithMessage, { icon: createElement(IoIosWarning, { size: 20, color: colors.error, style: { marginLeft: "8px" } }), message: error })))));
};
var templateObject_1$5;

export { Checkbox, PasswordInput, Submit, TextInput };
//# sourceMappingURL=index.es.js.map
