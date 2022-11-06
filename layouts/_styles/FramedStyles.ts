import styled from "@emotion/styled";
import { DEFAULT_SIDE_PADDING } from "../../styles/consts";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
`;

export const Body = styled.div`
  padding: 1rem ${DEFAULT_SIDE_PADDING} 1rem ${DEFAULT_SIDE_PADDING};
  display: flex;
  flex-flow: column;
`;
