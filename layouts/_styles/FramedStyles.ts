import styled from "@emotion/styled";
import { DEFAULT_SIDE_PADDING, MAX_WDITH } from "../../styles/consts";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Body = styled.div`
  display: flex;
  padding: 1rem ${DEFAULT_SIDE_PADDING};
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${MAX_WDITH};
  margin: 0 auto;
`;
