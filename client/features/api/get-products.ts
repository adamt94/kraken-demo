import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      price
      height
      width
      length
      model_code
      colour
      img_url
      power
      quantity
      description
      brand
    }
  }
`;
