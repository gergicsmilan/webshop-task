import styled from "@emotion/styled";
import Link from "next/link";
import { BORDER_RADIUS } from "../../../styles/consts";

export const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background: #e3e3e3;
  min-height: 15rem;
  padding: 1rem;
  border-radius: ${BORDER_RADIUS};

  color: #233142;
  text-decoration: none;
  transition: transform 0.15s;

  img {
    border-radius: ${BORDER_RADIUS};
  }

  &:hover {
    transform: scale(1.03);
  }
`;
