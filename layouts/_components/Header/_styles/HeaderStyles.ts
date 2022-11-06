import styled from "@emotion/styled";
import { DEFAULT_SIDE_PADDING, MAX_WDITH } from "../../../../styles/consts";

export const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: #233142;
  padding: 1rem ${DEFAULT_SIDE_PADDING};
  margin-bottom: 2rem;
  z-index: 1;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.32);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 0 auto;
  max-width: ${MAX_WDITH};
`;
