import styled from "@emotion/styled";
import { DEFAULT_SIDE_PADDING } from "../../../../styles/consts";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #233142;
  padding: 1rem ${DEFAULT_SIDE_PADDING} 1rem ${DEFAULT_SIDE_PADDING};
  position: sticky;
  top: 0;
  margin-bottom: 2rem;
`;
