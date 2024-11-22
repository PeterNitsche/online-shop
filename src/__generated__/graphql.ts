/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Attribute = {
  __typename?: 'Attribute';
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Scalars['String']['output']>>;
  valueType: Scalars['String']['output'];
};

export type AttributeFilterDto = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type BasicInfo = {
  __typename?: 'BasicInfo';
  county?: Maybe<Scalars['String']['output']>;
  countyName?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Place>;
  placeExtra?: Maybe<Scalars['String']['output']>;
  placeName?: Maybe<Scalars['String']['output']>;
  shopBanner?: Maybe<Scalars['String']['output']>;
  shopDescription?: Maybe<Scalars['String']['output']>;
  shopName?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  __typename?: 'Category';
  attributes?: Maybe<Array<Attribute>>;
  categories?: Maybe<Array<Category>>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  live?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentCategory?: Maybe<ParentCategory>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CategoryDto = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  valueType?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryFields = {
  __typename?: 'CategoryFields';
  live: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  valueType?: Maybe<Scalars['String']['output']>;
};

export type CategoryProductsFiltersDto = {
  attributes?: InputMaybe<Array<AttributeFilterDto>>;
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  colors?: InputMaybe<Array<Scalars['String']['input']>>;
  condition?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Array<Scalars['Float']['input']>>;
  query?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
  verified?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryProductsResponse = {
  __typename?: 'CategoryProductsResponse';
  attributes: Array<Filter>;
  brands: Array<Filter>;
  colors: Array<Filter>;
  countyPlaceCounts: Array<CountyPlaceCount>;
  discounted?: Maybe<DiscountedCount>;
  pageInfo: PageInfo;
  products?: Maybe<Array<Product>>;
  types: Array<Filter>;
  verfiedCounts?: Maybe<VerifiedCount>;
};

export type Comment = {
  __typename?: 'Comment';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user: User;
};

export type County = {
  __typename?: 'County';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  number?: Maybe<Scalars['Float']['output']>;
  places?: Maybe<Array<Place>>;
};

export type CountyPlaceCount = {
  __typename?: 'CountyPlaceCount';
  countyCount: Scalars['Float']['output'];
  countyName: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  places: Array<PlaceCount>;
};

export type CreateAdminPayload = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Role>>;
};

export type CreateInquiryPayload = {
  notes?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  product: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['String']['input']>;
  shop?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostPayload = {
  description?: InputMaybe<Scalars['String']['input']>;
  isImages: Scalars['Boolean']['input'];
  media?: InputMaybe<MediaPostInput>;
  products: Array<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateUserPayload = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isShop?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  roles?: InputMaybe<Array<Role>>;
};

export type DiscountedCount = {
  __typename?: 'DiscountedCount';
  all?: Maybe<Scalars['Float']['output']>;
  discounted?: Maybe<Scalars['Float']['output']>;
  without_discount?: Maybe<Scalars['Float']['output']>;
};

export type FavouriteProductsResponse = {
  __typename?: 'FavouriteProductsResponse';
  pageInfo: PageInfo;
  products: Array<Product>;
};

export type Filter = {
  __typename?: 'Filter';
  code?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FollowersPageInfo = {
  __typename?: 'FollowersPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
};

export type GetMessagePayload = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type HelpContact = {
  __typename?: 'HelpContact';
  contact: Scalars['String']['output'];
  id: Scalars['String']['output'];
  resolved?: Maybe<Scalars['Boolean']['output']>;
};

export type HomeAdFiltersDto = {
  cursor?: InputMaybe<Scalars['String']['input']>;
};

export type HomeAdProductsResponse = {
  __typename?: 'HomeAdProductsResponse';
  pageInfo: PageInfo;
  products?: Maybe<Array<ProductWithActiveFlag>>;
};

export type ISuccessAuthResponse = {
  accessToken: Scalars['String']['output'];
  authToken: Scalars['String']['output'];
  user: User;
};

export type Inquiry = {
  __typename?: 'Inquiry';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  customer: User;
  fulfiled: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isCustomerMarkedAsfulfiled: Scalars['Boolean']['output'];
  isShopMarkedAsfulfiled: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  paymentStatus: InquiryPaymentStatus;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  quantity: Scalars['String']['output'];
  shop: Shop;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type InquiryListResponse = {
  __typename?: 'InquiryListResponse';
  inquiryList?: Maybe<Array<Inquiry>>;
  pageInfo: PageInfo;
};

/** Payment status for the inquiry */
export enum InquiryPaymentStatus {
  PayoutDeclined = 'PayoutDeclined',
  PayoutDone = 'PayoutDone',
  PayoutPending = 'PayoutPending'
}

export type LastMessage = {
  __typename?: 'LastMessage';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  owner: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
};

export type LocationListResponse = {
  __typename?: 'LocationListResponse';
  placeList: Array<County>;
};

export type Media = {
  __typename?: 'Media';
  public_id?: Maybe<Scalars['String']['output']>;
  secure_url?: Maybe<Scalars['String']['output']>;
};

export type MediaIn = {
  public_id?: InputMaybe<Scalars['String']['input']>;
  secure_url?: InputMaybe<Scalars['String']['input']>;
};

export type MediaPost = {
  __typename?: 'MediaPost';
  public_id?: Maybe<Scalars['String']['output']>;
  secure_url?: Maybe<Scalars['String']['output']>;
};

export type MediaPostInput = {
  public_id?: InputMaybe<Scalars['String']['input']>;
  secure_url?: InputMaybe<Scalars['String']['input']>;
  thumb_nail?: InputMaybe<Scalars['String']['input']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  product?: Maybe<Product>;
  read: Scalars['Boolean']['output'];
  sender?: Maybe<User>;
  updatedAt: Scalars['DateTimeISO']['output'];
  users?: Maybe<Array<User>>;
};

export type MessagesListResponse = {
  __typename?: 'MessagesListResponse';
  messageList: Array<Message>;
  pageInfo?: Maybe<PageInfo>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateHomeAdProduct: Scalars['String']['output'];
  addHelpContact: HelpContact;
  addHomeAdProduct: Product;
  addPostComment: Comment;
  addProductReview: Review;
  addProductReviewImages: ReviewProductImage;
  addProductToFavsList?: Maybe<Product>;
  adminLogin: SuccessAuthResponse;
  adminLogout: Scalars['String']['output'];
  approvePost: Post;
  approveProduct: Product;
  createAdmin: SuccessAuthResponse;
  createCategory: Category;
  createInquiry: Inquiry;
  createParentCategory: ParentCategory;
  createPost: Post;
  createUser: SuccessAuthResponse;
  createUserShop: Shop;
  deleteAccount: Scalars['String']['output'];
  deleteCategory: Category;
  deleteCategoryFields: Scalars['String']['output'];
  deleteHomeAdProduct: ProductWithActiveFlag;
  deleteParentCategory: ParentCategory;
  deletePost: Post;
  deleteProduct: Product;
  deleteShop: Scalars['String']['output'];
  dislikeReview: Review;
  followShop: Shop;
  launchShop: Shop;
  likePost: Post;
  likeReview: Review;
  postProduct: Product;
  reviewShop: Shop;
  sendMessage: Message;
  toggleCategoryFieldLive: Scalars['String']['output'];
  toggleCategoryLive: Category;
  toggleParentCategoryLive: ParentCategory;
  toggleProductStock: Product;
  updateCategoryFields: Category;
  updateInquiryStatus: Inquiry;
  updateParentCategoryBrands: Product;
  updateParentCategoryColors: Product;
  updateProduct: Product;
  updateShopBasicInfo: Shop;
  updateShopLoacation: Shop;
  updateShopReason: Shop;
  updateShopSocials: Shop;
  updateShopThemeInfo: Shop;
  updateUser: User;
  userGoogleAuth: SuccessAuthResponse;
  userLogin: SuccessAuthResponse;
  verifyShop: Shop;
  viewShop?: Maybe<Scalars['String']['output']>;
};


export type MutationActivateHomeAdProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationAddHelpContactArgs = {
  contact: Scalars['String']['input'];
};


export type MutationAddHomeAdProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationAddPostCommentArgs = {
  postId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationAddProductReviewArgs = {
  payload: ProductReviewsPayload;
};


export type MutationAddProductReviewImagesArgs = {
  payload: ReviewProductImageDto;
};


export type MutationAddProductToFavsListArgs = {
  product: Scalars['String']['input'];
};


export type MutationAdminLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationApprovePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationApproveProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationCreateAdminArgs = {
  payload: CreateAdminPayload;
};


export type MutationCreateCategoryArgs = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentCategory: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationCreateInquiryArgs = {
  payload: CreateInquiryPayload;
};


export type MutationCreateParentCategoryArgs = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  payload: CreatePostPayload;
};


export type MutationCreateUserArgs = {
  payload: CreateUserPayload;
};


export type MutationDeleteAccountArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryFieldsArgs = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteHomeAdProductArgs = {
  adId: Scalars['String']['input'];
};


export type MutationDeleteParentCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationDeleteShopArgs = {
  shopId: Scalars['String']['input'];
};


export type MutationDislikeReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type MutationFollowShopArgs = {
  shopId: Scalars['String']['input'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationLikeReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type MutationPostProductArgs = {
  payload: ProductPayload;
};


export type MutationSendMessageArgs = {
  payload: GetMessagePayload;
};


export type MutationToggleCategoryFieldLiveArgs = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationToggleCategoryLiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationToggleParentCategoryLiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationToggleProductStockArgs = {
  productId: Scalars['String']['input'];
};


export type MutationUpdateCategoryFieldsArgs = {
  payload: CategoryDto;
};


export type MutationUpdateInquiryStatusArgs = {
  inquiryId: Scalars['String']['input'];
};


export type MutationUpdateParentCategoryBrandsArgs = {
  brands: Array<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateParentCategoryColorsArgs = {
  colors: Array<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  payload: UpdateProductPayload;
};


export type MutationUpdateShopBasicInfoArgs = {
  payload: ShopBasicInfoPayload;
};


export type MutationUpdateShopLoacationArgs = {
  payload: ShopContactsInfoPayload;
};


export type MutationUpdateShopReasonArgs = {
  reason: Scalars['String']['input'];
};


export type MutationUpdateShopSocialsArgs = {
  payload: ShopContactsInfoPayload;
};


export type MutationUpdateShopThemeInfoArgs = {
  theme: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  payload: UserUpdatePayload;
};


export type MutationUserGoogleAuthArgs = {
  payload: CreateUserPayload;
};


export type MutationUserLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationVerifyShopArgs = {
  shopId: Scalars['String']['input'];
};


export type MutationViewShopArgs = {
  shopId: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
};

export type ParentCategory = {
  __typename?: 'ParentCategory';
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  live: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type Place = {
  __typename?: 'Place';
  county?: Maybe<County>;
  geoLocation?: Maybe<Point>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  popular?: Maybe<Scalars['Boolean']['output']>;
};

export type PlaceCount = {
  __typename?: 'PlaceCount';
  count: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  popular?: Maybe<Scalars['Boolean']['output']>;
};

export type Point = {
  __typename?: 'Point';
  coordinates?: Maybe<Array<Scalars['Float']['output']>>;
  type: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  approved?: Maybe<Scalars['Boolean']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isGlobal: Scalars['Boolean']['output'];
  isImages: Scalars['Boolean']['output'];
  likes: Array<User>;
  media: MediaPost;
  products: Array<Product>;
  shop?: Maybe<Shop>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PostListResponse = {
  __typename?: 'PostListResponse';
  pageInfo: PostPageInfo;
  post: Array<Post>;
};

export type PostPageInfo = {
  __typename?: 'PostPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Product = {
  __typename?: 'Product';
  approved?: Maybe<Scalars['Boolean']['output']>;
  attributes?: Maybe<Scalars['JSONObject']['output']>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images: Array<Media>;
  inStock?: Maybe<Scalars['Boolean']['output']>;
  isAddedToFavs?: Maybe<Scalars['Boolean']['output']>;
  live?: Maybe<Scalars['Boolean']['output']>;
  negotiable?: Maybe<Scalars['Boolean']['output']>;
  percentageDiscount?: Maybe<Scalars['Float']['output']>;
  price: Array<Scalars['Float']['output']>;
  shop?: Maybe<Shop>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  totalReviews?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Media>;
};

export type ProductImagesInfo = {
  __typename?: 'ProductImagesInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
};

/** Products fields */
export type ProductPayload = {
  attributes?: InputMaybe<Scalars['JSONObject']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<MediaIn>>;
  negotiable?: InputMaybe<Scalars['Boolean']['input']>;
  price: Array<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<MediaIn>;
};

/** Products reviews */
export type ProductReviewsPayload = {
  isImages?: Scalars['Boolean']['input'];
  media?: InputMaybe<Array<MediaIn>>;
  product: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  review: Scalars['String']['input'];
};

export type ProductWithActiveFlag = {
  __typename?: 'ProductWithActiveFlag';
  adId: Scalars['ID']['output'];
  approved?: Maybe<Scalars['Boolean']['output']>;
  attributes?: Maybe<Scalars['JSONObject']['output']>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images: Array<Media>;
  inStock?: Maybe<Scalars['Boolean']['output']>;
  isActive: Scalars['Boolean']['output'];
  isAddedToFavs?: Maybe<Scalars['Boolean']['output']>;
  live?: Maybe<Scalars['Boolean']['output']>;
  negotiable?: Maybe<Scalars['Boolean']['output']>;
  percentageDiscount?: Maybe<Scalars['Float']['output']>;
  price: Array<Scalars['Float']['output']>;
  shop?: Maybe<Shop>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  totalReviews?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Media>;
};

export type ProductsFilter = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  pageInfo: PageInfo;
  products?: Maybe<Array<Product>>;
};

export type Query = {
  __typename?: 'Query';
  fetchSpecificCategoryProducts?: Maybe<CategoryProductsResponse>;
  getAllHomeAdProduct?: Maybe<HomeAdProductsResponse>;
  getAllProducts?: Maybe<ProductsResponse>;
  getCategories: Array<Category>;
  getCategoryFields: Array<CategoryFields>;
  getCategoryFieldsByName: CategoryFields;
  getFavProducts?: Maybe<ReviewProductImagesResponse>;
  getHomeAdProduct?: Maybe<Product>;
  getInquiries?: Maybe<InquiryListResponse>;
  getInquiryById: Inquiry;
  getLandingProducts: ProductsResponse;
  getMainCategories: Array<ParentCategory>;
  getMyFavouritesProducts?: Maybe<FavouriteProductsResponse>;
  getMyShopProducts?: Maybe<ShopProductsResponse>;
  getOpsCategories: Array<Category>;
  getParentCategoryProducts?: Maybe<ProductsResponse>;
  getPlaces: LocationListResponse;
  getPosts: PostListResponse;
  getPostsById: Post;
  getProductBySlug: Product;
  getProductReviewImages?: Maybe<ReviewProductImagesResponse>;
  getProductReviews: ReviewsListResponse;
  getRelatedProducts?: Maybe<ProductsResponse>;
  getShop: Shop;
  getShopById: Shop;
  getShopFollowers: ShopFollowersResponse;
  getShops?: Maybe<ShopListResponse>;
  getThemes: ThemeListResponse;
  getUser: User;
  getUserChatList: UsersListResponse;
  getUserMessages: MessagesListResponse;
  getUsers: UsersListResponse;
  getUsersProducts: Array<Product>;
  isAddedToFavList: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  searchHomeProducts: Array<Product>;
};


export type QueryFetchSpecificCategoryProductsArgs = {
  category: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CategoryProductsFiltersDto>;
};


export type QueryGetAllHomeAdProductArgs = {
  filters: HomeAdFiltersDto;
};


export type QueryGetAllProductsArgs = {
  filters: ProductsFilter;
};


export type QueryGetCategoriesArgs = {
  parentCategoryId: Scalars['String']['input'];
};


export type QueryGetCategoryFieldsArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryGetCategoryFieldsByNameArgs = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryGetFavProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
};


export type QueryGetInquiriesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};


export type QueryGetInquiryByIdArgs = {
  inquiryId: Scalars['String']['input'];
};


export type QueryGetLandingProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMainCategoriesArgs = {
  sell?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetMyFavouritesProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMyShopProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['String']['input']>;
  sortValue?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOpsCategoriesArgs = {
  parentCategoryId: Scalars['String']['input'];
};


export type QueryGetParentCategoryProductsArgs = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostsArgs = {
  admin?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostsByIdArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetProductReviewImagesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
};


export type QueryGetProductReviewsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
};


export type QueryGetRelatedProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  shopId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetShopArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetShopByIdArgs = {
  shopId: Scalars['String']['input'];
};


export type QueryGetShopFollowersArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['String']['input'];
};


export type QueryGetShopsArgs = {
  payload: ShopFilters;
};


export type QueryGetUserArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserMessagesArgs = {
  recipient: Scalars['String']['input'];
};


export type QueryIsAddedToFavListArgs = {
  product: Scalars['String']['input'];
};


export type QueryIsFollowingArgs = {
  shopId: Scalars['String']['input'];
};


export type QuerySearchHomeProductsArgs = {
  search: Scalars['String']['input'];
};

export type RatingCount = {
  __typename?: 'RatingCount';
  count: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

/** Products reviews fetch */
export type Review = {
  __typename?: 'Review';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dislikes?: Maybe<Array<User>>;
  id: Scalars['String']['output'];
  isImages?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Array<User>>;
  media?: Maybe<Array<Media>>;
  product?: Maybe<Product>;
  rating?: Maybe<Scalars['Float']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user?: Maybe<User>;
};

export type ReviewPageInfo = {
  __typename?: 'ReviewPageInfo';
  avgRating?: Maybe<Scalars['Float']['output']>;
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  ratingCounts?: Maybe<RatingCount>;
  ratingPercentage?: Maybe<Scalars['JSONObject']['output']>;
  totalCount: Scalars['Int']['output'];
  totalRatings?: Maybe<Scalars['Int']['output']>;
  totalReviews?: Maybe<Scalars['Int']['output']>;
};

export type ReviewProductImage = {
  __typename?: 'ReviewProductImage';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  images: Array<Media>;
  product?: Maybe<Product>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user?: Maybe<User>;
};

/** Products reviews images */
export type ReviewProductImageDto = {
  images?: InputMaybe<Array<MediaIn>>;
  product: Scalars['String']['input'];
  user?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewProductImagesResponse = {
  __typename?: 'ReviewProductImagesResponse';
  list: Array<ReviewProductImage>;
  pageInfo: ProductImagesInfo;
};

export type ReviewsListResponse = {
  __typename?: 'ReviewsListResponse';
  pageInfo: ReviewPageInfo;
  reviewList: Array<Review>;
};

/** The user access roles */
export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

/** The shop model */
export type Shop = {
  __typename?: 'Shop';
  _id?: Maybe<Scalars['String']['output']>;
  basicInfo?: Maybe<BasicInfo>;
  createdAt: Scalars['DateTimeISO']['output'];
  followersCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  inquiriesCount?: Maybe<Scalars['Int']['output']>;
  lastOnline?: Maybe<Scalars['DateTimeISO']['output']>;
  live: Scalars['Boolean']['output'];
  onboardingStatus: ShopOnboardingStatus;
  /** The user of the shop */
  owner: Scalars['String']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  reviewed: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Social>;
  theme?: Maybe<Scalars['String']['output']>;
  /** The user of the shop id */
  userId: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
  views: Scalars['Float']['output'];
};

/** This the shop basic info payload:Including the place and place extra.Place extra is if the user not find his exact location */
export type ShopBasicInfoPayload = {
  place: Scalars['String']['input'];
  placeExtra?: InputMaybe<Scalars['String']['input']>;
  shopBanner?: InputMaybe<Scalars['String']['input']>;
  shopDescription?: InputMaybe<Scalars['String']['input']>;
  shopName: Scalars['String']['input'];
};

/** Phone number and code */
export type ShopContactsInfoPayload = {
  code?: InputMaybe<Scalars['String']['input']>;
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  instagramLink?: InputMaybe<Scalars['String']['input']>;
  isWhatsapp: Scalars['Boolean']['input'];
  phoneNumber: Scalars['String']['input'];
  tiktokLink?: InputMaybe<Scalars['String']['input']>;
};

export type ShopFilters = {
  endCursor?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ShopFollowersResponse = {
  __typename?: 'ShopFollowersResponse';
  followers?: Maybe<Array<User>>;
  pageInfo: FollowersPageInfo;
};

export type ShopListResponse = {
  __typename?: 'ShopListResponse';
  pageInfo: ShopsPageInfo;
  shopList: Array<Shop>;
};

/** The onboarding status of the shop.Ie the step he/she is after creating the shop */
export enum ShopOnboardingStatus {
  Done = 'Done',
  WaitingBasicInfoSetup = 'WaitingBasicInfoSetup',
  WaitingShopLaunch = 'WaitingShopLaunch',
  WaitingShopReason = 'WaitingShopReason',
  WaitingSocialLinks = 'WaitingSocialLinks',
  WaitingStocking = 'WaitingStocking',
  WaitingThemeSelection = 'WaitingThemeSelection'
}

export type ShopProductsResponse = {
  __typename?: 'ShopProductsResponse';
  onBoardingStatus: Scalars['String']['output'];
  pageInfo?: Maybe<PageInfo>;
  products?: Maybe<Array<Product>>;
};

export type ShopsPageInfo = {
  __typename?: 'ShopsPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Social = {
  __typename?: 'Social';
  code: Scalars['String']['output'];
  facebookLink?: Maybe<Scalars['String']['output']>;
  instagramLink?: Maybe<Scalars['String']['output']>;
  isWhatsapp: Scalars['Boolean']['output'];
  phoneNumber: Scalars['String']['output'];
  tiktokLink?: Maybe<Scalars['String']['output']>;
};

export type SuccessAuthResponse = ISuccessAuthResponse & {
  __typename?: 'SuccessAuthResponse';
  accessToken: Scalars['String']['output'];
  authToken: Scalars['String']['output'];
  user: User;
};

export type Theme = {
  __typename?: 'Theme';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ThemeListResponse = {
  __typename?: 'ThemeListResponse';
  pageInfo: PageInfo;
  themeList: Array<Theme>;
};

export type UpdateProductPayload = {
  description: Scalars['String']['input'];
  featured?: Scalars['Boolean']['input'];
  images?: InputMaybe<Array<MediaIn>>;
  inStock?: Scalars['Boolean']['input'];
  live?: Scalars['Boolean']['input'];
  negotiable?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  video?: InputMaybe<MediaIn>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lastMessage?: Maybe<LastMessage>;
  lastOnline?: Maybe<Scalars['DateTimeISO']['output']>;
  notifacations?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Place>;
  profileId?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  sex?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  tileDisplay?: Maybe<Scalars['String']['output']>;
  unreadCount?: Maybe<Scalars['Float']['output']>;
};

export type UserUpdatePayload = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  notifacations?: InputMaybe<Scalars['Boolean']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  tileDisplay?: InputMaybe<Scalars['String']['input']>;
};

export type UsersListResponse = {
  __typename?: 'UsersListResponse';
  pageInfo: PageInfo;
  usersList: Array<User>;
};

export type VerifiedCount = {
  __typename?: 'VerifiedCount';
  all?: Maybe<Scalars['Float']['output']>;
  not_verified?: Maybe<Scalars['Float']['output']>;
  verified?: Maybe<Scalars['Float']['output']>;
};

export type GetProductQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', getProductBySlug: { __typename?: 'Product', id?: string | null, title?: string | null, price: Array<number>, averageRating?: number | null, images: Array<{ __typename?: 'Media', public_id?: string | null, secure_url?: string | null }> } };

export type GetProductSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductSlugsQuery = { __typename?: 'Query', getLandingProducts: { __typename?: 'ProductsResponse', products?: Array<{ __typename?: 'Product', slug?: string | null }> | null } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getLandingProducts: { __typename?: 'ProductsResponse', products?: Array<{ __typename?: 'Product', id?: string | null, slug?: string | null, title?: string | null, price: Array<number>, averageRating?: number | null, images: Array<{ __typename?: 'Media', public_id?: string | null, secure_url?: string | null }> }> | null } };


export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_id"}},{"kind":"Field","name":{"kind":"Name","value":"secure_url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const GetProductSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLandingProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductSlugsQuery, GetProductSlugsQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLandingProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_id"}},{"kind":"Field","name":{"kind":"Name","value":"secure_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;