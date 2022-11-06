import styled from "@emotion/styled";
import { BORDER_RADIUS } from "../consts";

export const DetailsContainer = styled.div`
  display: flex;
  margin: 2rem 0;

  @media only screen and (max-width: 600px) {
    flex-flow: column;
    align-items: center;

    img {
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 2rem;

  h1,
  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    margin: auto auto 0 0;
  }
`;

export const ImgWrapper = styled.div`
  img {
    border-radius: ${BORDER_RADIUS};
  }
`;
