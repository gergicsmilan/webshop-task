import { Button } from "@mui/material";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Button>, "variant"> & {
  text: string;
  clickHandler: () => any;
};

const PrimaryButton = ({ text, clickHandler, ...btnProps }: Props) => (
  <Button variant="contained" onClick={clickHandler} {...btnProps}>
    {text}
  </Button>
);

export default PrimaryButton;
