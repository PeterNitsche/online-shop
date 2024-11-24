/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query GetProductSlugs {\n  getLandingProducts {\n    products {\n      slug\n    }\n  }\n}\n\nquery GetProduct($slug: String!) {\n  getProductBySlug(slug: $slug) {\n    id\n    title\n    price\n    currency\n    brand\n    inStock\n    images {\n      public_id\n      secure_url\n    }\n    description\n  }\n}\n\nquery GetProductReviews($productId: String!, $cursor: String) {\n  getProductReviews(cursor: $cursor, productId: $productId) {\n    pageInfo {\n      endCursor\n      hasNextPage\n      avgRating\n      totalReviews\n    }\n    reviewList {\n      id\n      rating\n      review\n      createdAt\n      rating\n      user {\n        displayName\n      }\n    }\n  }\n}": types.GetProductSlugsDocument,
    "query GetProducts {\n  getLandingProducts {\n    products {\n      ...ProductListItem\n    }\n  }\n}\n\nquery GetSearchProducts($term: String!) {\n  searchHomeProducts(search: $term) {\n    ...ProductListItem\n  }\n}\n\nfragment ProductListItem on Product {\n  id\n  slug\n  title\n  price\n  currency\n  averageRating\n  images {\n    public_id\n    secure_url\n  }\n}": types.GetProductsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetProductSlugs {\n  getLandingProducts {\n    products {\n      slug\n    }\n  }\n}\n\nquery GetProduct($slug: String!) {\n  getProductBySlug(slug: $slug) {\n    id\n    title\n    price\n    currency\n    brand\n    inStock\n    images {\n      public_id\n      secure_url\n    }\n    description\n  }\n}\n\nquery GetProductReviews($productId: String!, $cursor: String) {\n  getProductReviews(cursor: $cursor, productId: $productId) {\n    pageInfo {\n      endCursor\n      hasNextPage\n      avgRating\n      totalReviews\n    }\n    reviewList {\n      id\n      rating\n      review\n      createdAt\n      rating\n      user {\n        displayName\n      }\n    }\n  }\n}"): (typeof documents)["query GetProductSlugs {\n  getLandingProducts {\n    products {\n      slug\n    }\n  }\n}\n\nquery GetProduct($slug: String!) {\n  getProductBySlug(slug: $slug) {\n    id\n    title\n    price\n    currency\n    brand\n    inStock\n    images {\n      public_id\n      secure_url\n    }\n    description\n  }\n}\n\nquery GetProductReviews($productId: String!, $cursor: String) {\n  getProductReviews(cursor: $cursor, productId: $productId) {\n    pageInfo {\n      endCursor\n      hasNextPage\n      avgRating\n      totalReviews\n    }\n    reviewList {\n      id\n      rating\n      review\n      createdAt\n      rating\n      user {\n        displayName\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetProducts {\n  getLandingProducts {\n    products {\n      ...ProductListItem\n    }\n  }\n}\n\nquery GetSearchProducts($term: String!) {\n  searchHomeProducts(search: $term) {\n    ...ProductListItem\n  }\n}\n\nfragment ProductListItem on Product {\n  id\n  slug\n  title\n  price\n  currency\n  averageRating\n  images {\n    public_id\n    secure_url\n  }\n}"): (typeof documents)["query GetProducts {\n  getLandingProducts {\n    products {\n      ...ProductListItem\n    }\n  }\n}\n\nquery GetSearchProducts($term: String!) {\n  searchHomeProducts(search: $term) {\n    ...ProductListItem\n  }\n}\n\nfragment ProductListItem on Product {\n  id\n  slug\n  title\n  price\n  currency\n  averageRating\n  images {\n    public_id\n    secure_url\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;