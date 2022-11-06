import { ReactNode } from "react";
import Header from "./_components/Header/Header";
import { Body, Container } from "./_styles/FramedStyles";

type Props = {
  children: ReactNode;
};

const Framed = ({ children }: Props) => (
  <Container>
    <Header />
    <Body>{children}</Body>
  </Container>
);

export default Framed;
