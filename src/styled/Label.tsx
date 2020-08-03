import styled from "styled-components";
import { colors } from "../colorConfig";

type LabelProps = {
  color?: string;
};

const Label = styled.label`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  color: ${(props: LabelProps) => props.color || colors.black};
`;

export default Label;
