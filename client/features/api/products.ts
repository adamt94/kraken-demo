import { gql } from "@apollo/client";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
  power: string;
  quantity: number;
  description: string;
  brand: string;
};

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

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
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

