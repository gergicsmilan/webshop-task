import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Button>, "variant"> & {
  text: string;
  path: string;
};

const NavButton = ({ text, path, ...btnProps }: Props) => {
  const { push } = useRouter();

  return (
    <Button variant="contained" onClick={() => push(path)} {...btnProps}>
      {text}
    </Button>
  );
};

export default NavButton;
