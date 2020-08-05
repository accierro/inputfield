import styled from "styled-components";
import { colors } from "../static/colorConfig";

type LabelProps = {
  color?: string;
  disabled?: boolean;
};

const Label = styled.label`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  color: ${(props: LabelProps) =>
    props.disabled ? colors.mediumGrey : props.color || colors.black};
`;

export default Label;
