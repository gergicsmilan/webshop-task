import { Grid } from "@mui/material";
import Image from "next/image";
import paths from "../../route/paths";
import { StyledLink } from "./_styles/ProductCardStyles";

type Props = Omit<Product, "category" | "description"> & {
  imgWidth?: number;
  imgHeight?: number;
};

const DEFAULT_IMG_SIZE = 110;

const ProductCard = ({
  id,
  title,
  price,
  image,
  imgWidth,
  imgHeight,
}: Props) => (
  <Grid item xs={12} sm={4} md={3}>
    <StyledLink href={paths.productDetails(id)}>
      <h3>{title}</h3>
      <h4>{price} $</h4>
      <Image
        src={image}
        alt={`img_${id}`}
        width={imgWidth ?? DEFAULT_IMG_SIZE}
        height={imgHeight ?? DEFAULT_IMG_SIZE}
      />
    </StyledLink>
  </Grid>
);

export default ProductCard;
