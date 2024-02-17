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
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BlogSection = {
  __typename?: 'BlogSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  items: Array<Maybe<ComponentItemBlog>>;
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemBlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogSectionEntity = {
  __typename?: 'BlogSectionEntity';
  attributes?: Maybe<BlogSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogSectionEntityResponse = {
  __typename?: 'BlogSectionEntityResponse';
  data?: Maybe<BlogSectionEntity>;
};

export type BlogSectionEntityResponseCollection = {
  __typename?: 'BlogSectionEntityResponseCollection';
  data: Array<BlogSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemBlogFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BlogSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentItemBlogInput>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentItemBlog = {
  __typename?: 'ComponentItemBlog';
  href: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  title: Scalars['String']['output'];
};

export type ComponentItemBlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemBlogFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentItemBlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemBlogFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemBlogInput = {
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemContactsInterest = {
  __typename?: 'ComponentItemContactsInterest';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ComponentItemContactsInterestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemContactsInterestFiltersInput>>>;
  not?: InputMaybe<ComponentItemContactsInterestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemContactsInterestFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentItemContactsInterestInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemContent = {
  __typename?: 'ComponentItemContent';
  button?: Maybe<ComponentUiButton>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  list?: Maybe<Array<Maybe<ComponentUiListItem>>>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type ComponentItemContentListArgs = {
  filters?: InputMaybe<ComponentUiListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentItemContentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemContentFiltersInput>>>;
  button?: InputMaybe<ComponentUiButtonFiltersInput>;
  list?: InputMaybe<ComponentUiListItemFiltersInput>;
  not?: InputMaybe<ComponentItemContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemContentFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemContentInput = {
  button?: InputMaybe<ComponentUiButtonInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  list?: InputMaybe<Array<InputMaybe<ComponentUiListItemInput>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemFaq = {
  __typename?: 'ComponentItemFaq';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentItemFaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemFaqFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentItemFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemFaqFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemFaqInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemInnerFeatures = {
  __typename?: 'ComponentItemInnerFeatures';
  description: Scalars['String']['output'];
  icon: ComponentUiIcon;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentItemInnerFeaturesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemInnerFeaturesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<ComponentUiIconFiltersInput>;
  not?: InputMaybe<ComponentItemInnerFeaturesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemInnerFeaturesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemInnerFeaturesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<ComponentUiIconInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemInnerHero = {
  __typename?: 'ComponentItemInnerHero';
  description: Scalars['String']['output'];
  icon: ComponentUiIcon;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentItemInnerHeroFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemInnerHeroFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<ComponentUiIconFiltersInput>;
  not?: InputMaybe<ComponentItemInnerHeroFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemInnerHeroFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemInnerHeroInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<ComponentUiIconInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemPricingFeatures = {
  __typename?: 'ComponentItemPricingFeatures';
  description: Scalars['String']['output'];
  icon: ComponentUiIcon;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentItemPricingFeaturesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemPricingFeaturesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<ComponentUiIconFiltersInput>;
  not?: InputMaybe<ComponentItemPricingFeaturesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemPricingFeaturesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemPricingFeaturesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<ComponentUiIconInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemPricingPlan = {
  __typename?: 'ComponentItemPricingPlan';
  get_started_color: Enum_Componentitempricingplan_Get_Started_Color;
  get_started_external: Scalars['Boolean']['output'];
  get_started_href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  installation: Scalars['Boolean']['output'];
  list: Array<Maybe<ComponentUiListItem>>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};


export type ComponentItemPricingPlanListArgs = {
  filters?: InputMaybe<ComponentUiListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentItemServices = {
  __typename?: 'ComponentItemServices';
  description: Scalars['String']['output'];
  href: Scalars['String']['output'];
  icon: ComponentUiIcon;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentItemServicesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemServicesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<ComponentUiIconFiltersInput>;
  not?: InputMaybe<ComponentItemServicesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemServicesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemServicesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<ComponentUiIconInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemSteps = {
  __typename?: 'ComponentItemSteps';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  title: Scalars['String']['output'];
};

export type ComponentItemStepsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemStepsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentItemStepsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemStepsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemStepsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentItemTips = {
  __typename?: 'ComponentItemTips';
  description: Scalars['String']['output'];
  icon: ComponentUiTipsIcon;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentItemTipsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemTipsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<ComponentUiTipsIconFiltersInput>;
  not?: InputMaybe<ComponentItemTipsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentItemTipsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentItemTipsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<ComponentUiTipsIconInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMedia = {
  __typename?: 'ComponentSharedMedia';
  file?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedQuote = {
  __typename?: 'ComponentSharedQuote';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedRichText = {
  __typename?: 'ComponentSharedRichText';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  shareImage?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  shareImage?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentUiButton = {
  __typename?: 'ComponentUiButton';
  arrow: Scalars['Boolean']['output'];
  external: Scalars['Boolean']['output'];
  href: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  size: Enum_Componentuibutton_Size;
  text: Scalars['String']['output'];
  ui: Enum_Componentuibutton_Ui;
};

export type ComponentUiButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiButtonFiltersInput>>>;
  arrow?: InputMaybe<BooleanFilterInput>;
  external?: InputMaybe<BooleanFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiButtonFiltersInput>>>;
  size?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  ui?: InputMaybe<StringFilterInput>;
};

export type ComponentUiButtonInput = {
  arrow?: InputMaybe<Scalars['Boolean']['input']>;
  external?: InputMaybe<Scalars['Boolean']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Enum_Componentuibutton_Size>;
  text?: InputMaybe<Scalars['String']['input']>;
  ui?: InputMaybe<Enum_Componentuibutton_Ui>;
};

export type ComponentUiIcon = {
  __typename?: 'ComponentUiIcon';
  id: Scalars['ID']['output'];
  name: Enum_Componentuiicon_Name;
};

export type ComponentUiIconFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiIconFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiIconFiltersInput>>>;
};

export type ComponentUiIconInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Enum_Componentuiicon_Name>;
};

export type ComponentUiListItem = {
  __typename?: 'ComponentUiListItem';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ComponentUiListItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiListItemFiltersInput>>>;
  not?: InputMaybe<ComponentUiListItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiListItemFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentUiListItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiTipsIcon = {
  __typename?: 'ComponentUiTipsIcon';
  id: Scalars['ID']['output'];
  name: Enum_Componentuitipsicon_Name;
};

export type ComponentUiTipsIconFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiTipsIconFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiTipsIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiTipsIconFiltersInput>>>;
};

export type ComponentUiTipsIconInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Enum_Componentuitipsicon_Name>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  interest?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status: Enum_Contact_Status;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  interest?: InputMaybe<StringFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  interest?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Enum_Contact_Status>;
};

export type ContactsPage = {
  __typename?: 'ContactsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  footnote?: Maybe<Scalars['String']['output']>;
  interest: Array<Maybe<ComponentItemContactsInterest>>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactsPageInterestArgs = {
  filters?: InputMaybe<ComponentItemContactsInterestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactsPageEntity = {
  __typename?: 'ContactsPageEntity';
  attributes?: Maybe<ContactsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactsPageEntityResponse = {
  __typename?: 'ContactsPageEntityResponse';
  data?: Maybe<ContactsPageEntity>;
};

export type ContactsPageInput = {
  footnote?: InputMaybe<Scalars['String']['input']>;
  interest?: InputMaybe<Array<InputMaybe<ComponentItemContactsInterestInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsSection = {
  __typename?: 'ContactsSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  email_label: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phone_label: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactsSectionEntity = {
  __typename?: 'ContactsSectionEntity';
  attributes?: Maybe<ContactsSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactsSectionEntityResponse = {
  __typename?: 'ContactsSectionEntityResponse';
  data?: Maybe<ContactsSectionEntity>;
};

export type ContactsSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_label?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<GenericMorph>;
  locale?: Maybe<Scalars['String']['output']>;
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  type: Enum_Contentreleasesreleaseaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  attributes?: Maybe<ContentReleasesReleaseAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  attributes?: Maybe<ContentReleasesRelease>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContentSection = {
  __typename?: 'ContentSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<Maybe<ComponentItemContent>>;
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentSectionEntity = {
  __typename?: 'ContentSectionEntity';
  attributes?: Maybe<ContentSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentSectionEntityResponse = {
  __typename?: 'ContentSectionEntityResponse';
  data?: Maybe<ContentSectionEntity>;
};

export type ContentSectionEntityResponseCollection = {
  __typename?: 'ContentSectionEntityResponseCollection';
  data: Array<ContentSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemContentFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentSectionInput = {
  items?: InputMaybe<Array<InputMaybe<ComponentItemContentInput>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentitempricingplan_Get_Started_Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
}

export enum Enum_Componentuibutton_Size {
  Lg = 'lg',
  Md = 'md'
}

export enum Enum_Componentuibutton_Ui {
  Outline = 'outline',
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentuiicon_Name {
  Bath = 'bath',
  BatteryCharging = 'battery_charging',
  Chat = 'chat',
  Clock = 'clock',
  Dollar = 'dollar',
  Donation = 'donation',
  Drop = 'drop',
  GasStove = 'gas_stove',
  Hammer = 'hammer',
  Heart = 'heart',
  HomeHeart = 'home_heart',
  Key = 'key',
  Mail = 'mail',
  Marker = 'marker',
  PricingNonRo = 'pricing_non_ro',
  PricingRo = 'pricing_ro',
  Protection = 'protection',
  Rain = 'rain',
  ShieldProtected = 'shield_protected',
  Toilet = 'toilet',
  Washer = 'washer',
  WaterMixer = 'water_mixer',
  Wifi = 'wifi',
  Wine = 'wine'
}

export enum Enum_Componentuitipsicon_Name {
  TipsAlerts = 'tips_alerts',
  TipsControls = 'tips_controls',
  TipsDetects = 'tips_detects',
  TipsSmart = 'tips_smart'
}

export enum Enum_Contact_Status {
  Completed = 'completed',
  New = 'new'
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export enum Enum_Pricingplan_Type {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
}

export enum Enum_Product_Preview_Object_Fit {
  Contain = 'contain',
  Cover = 'cover'
}

export type FaqSection = {
  __typename?: 'FaqSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<Maybe<ComponentItemFaq>>;
  pricing_page_templates?: Maybe<PricingPageTemplateRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FaqSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FaqSectionPricing_Page_TemplatesArgs = {
  filters?: InputMaybe<PricingPageTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FaqSectionEntity = {
  __typename?: 'FaqSectionEntity';
  attributes?: Maybe<FaqSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FaqSectionEntityResponse = {
  __typename?: 'FaqSectionEntityResponse';
  data?: Maybe<FaqSectionEntity>;
};

export type FaqSectionEntityResponseCollection = {
  __typename?: 'FaqSectionEntityResponseCollection';
  data: Array<FaqSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemFaqFiltersInput>;
  not?: InputMaybe<FaqSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqSectionFiltersInput>>>;
  pricing_page_templates?: InputMaybe<PricingPageTemplateFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqSectionInput = {
  items?: InputMaybe<Array<InputMaybe<ComponentItemFaqInput>>>;
  pricing_page_templates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = BlogSection | ComponentItemBlog | ComponentItemContactsInterest | ComponentItemContent | ComponentItemFaq | ComponentItemInnerFeatures | ComponentItemInnerHero | ComponentItemPricingFeatures | ComponentItemPricingPlan | ComponentItemServices | ComponentItemSteps | ComponentItemTips | ComponentSharedMedia | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSeo | ComponentUiButton | ComponentUiIcon | ComponentUiListItem | ComponentUiTipsIcon | Contact | ContactsPage | ContactsSection | ContentReleasesRelease | ContentReleasesReleaseAction | ContentSection | FaqSection | Global | HomeHeroSection | HomePage | I18NLocale | InnerFeaturesSection | InnerHeroSection | LeakDetection | Order | PricingFeaturesSection | PricingHeroSection | PricingPageTemplate | PricingPlan | PricingVariantSection | Product | ReverseOsmosis | ReverseOsmosisPrice | ServicesSection | StepsSection | TipsSection | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | WhFiltration | WhFiltrationPrice;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  defaultSeo?: Maybe<ComponentSharedSeo>;
  siteDescription: Scalars['String']['output'];
  siteName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  defaultSeo?: InputMaybe<ComponentSharedSeoInput>;
  siteDescription?: InputMaybe<Scalars['String']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
};

export type HomeHeroSection = {
  __typename?: 'HomeHeroSection';
  buttons: Array<Maybe<ComponentUiButton>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image: UploadFileEntityResponse;
  list: Array<Maybe<ComponentUiListItem>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomeHeroSectionButtonsArgs = {
  filters?: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeHeroSectionListArgs = {
  filters?: InputMaybe<ComponentUiListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeHeroSectionEntity = {
  __typename?: 'HomeHeroSectionEntity';
  attributes?: Maybe<HomeHeroSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomeHeroSectionEntityResponse = {
  __typename?: 'HomeHeroSectionEntityResponse';
  data?: Maybe<HomeHeroSectionEntity>;
};

export type HomeHeroSectionEntityResponseCollection = {
  __typename?: 'HomeHeroSectionEntityResponseCollection';
  data: Array<HomeHeroSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type HomeHeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomeHeroSectionFiltersInput>>>;
  buttons?: InputMaybe<ComponentUiButtonFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  list?: InputMaybe<ComponentUiListItemFiltersInput>;
  not?: InputMaybe<HomeHeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomeHeroSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomeHeroSectionInput = {
  buttons?: InputMaybe<Array<InputMaybe<ComponentUiButtonInput>>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  list?: InputMaybe<Array<InputMaybe<ComponentUiListItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  blog_section?: Maybe<BlogSectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  home_hero_section?: Maybe<HomeHeroSectionEntityResponse>;
  seo?: Maybe<ComponentSharedSeo>;
  services_section?: Maybe<ServicesSectionEntityResponse>;
  steps_section?: Maybe<StepsSectionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  blog_section?: InputMaybe<Scalars['ID']['input']>;
  home_hero_section?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  services_section?: InputMaybe<Scalars['ID']['input']>;
  steps_section?: InputMaybe<Scalars['ID']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type InnerFeaturesSection = {
  __typename?: 'InnerFeaturesSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<Maybe<ComponentItemInnerFeatures>>;
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InnerFeaturesSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemInnerFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InnerFeaturesSectionEntity = {
  __typename?: 'InnerFeaturesSectionEntity';
  attributes?: Maybe<InnerFeaturesSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InnerFeaturesSectionEntityResponse = {
  __typename?: 'InnerFeaturesSectionEntityResponse';
  data?: Maybe<InnerFeaturesSectionEntity>;
};

export type InnerFeaturesSectionEntityResponseCollection = {
  __typename?: 'InnerFeaturesSectionEntityResponseCollection';
  data: Array<InnerFeaturesSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type InnerFeaturesSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InnerFeaturesSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemInnerFeaturesFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InnerFeaturesSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InnerFeaturesSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InnerFeaturesSectionInput = {
  items?: InputMaybe<Array<InputMaybe<ComponentItemInnerFeaturesInput>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type InnerHeroSection = {
  __typename?: 'InnerHeroSection';
  button: ComponentUiButton;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<ComponentItemInnerHero>>>;
  primary_image: UploadFileEntityResponse;
  secondary_image: UploadFileEntityResponse;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InnerHeroSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemInnerHeroFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InnerHeroSectionEntity = {
  __typename?: 'InnerHeroSectionEntity';
  attributes?: Maybe<InnerHeroSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InnerHeroSectionEntityResponse = {
  __typename?: 'InnerHeroSectionEntityResponse';
  data?: Maybe<InnerHeroSectionEntity>;
};

export type InnerHeroSectionEntityResponseCollection = {
  __typename?: 'InnerHeroSectionEntityResponseCollection';
  data: Array<InnerHeroSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type InnerHeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InnerHeroSectionFiltersInput>>>;
  button?: InputMaybe<ComponentUiButtonFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemInnerHeroFiltersInput>;
  not?: InputMaybe<InnerHeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InnerHeroSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InnerHeroSectionInput = {
  button?: InputMaybe<ComponentUiButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentItemInnerHeroInput>>>;
  primary_image?: InputMaybe<Scalars['ID']['input']>;
  secondary_image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LeakDetection = {
  __typename?: 'LeakDetection';
  blog_section?: Maybe<BlogSectionEntityResponse>;
  content_section?: Maybe<ContentSectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  inner_hero_section?: Maybe<InnerHeroSectionEntityResponse>;
  seo?: Maybe<ComponentSharedSeo>;
  tips_section?: Maybe<TipsSectionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LeakDetectionEntity = {
  __typename?: 'LeakDetectionEntity';
  attributes?: Maybe<LeakDetection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LeakDetectionEntityResponse = {
  __typename?: 'LeakDetectionEntityResponse';
  data?: Maybe<LeakDetectionEntity>;
};

export type LeakDetectionInput = {
  blog_section?: InputMaybe<Scalars['ID']['input']>;
  content_section?: InputMaybe<Scalars['ID']['input']>;
  inner_hero_section?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tips_section?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBlogSection?: Maybe<BlogSectionEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createContentSection?: Maybe<ContentSectionEntityResponse>;
  createFaqSection?: Maybe<FaqSectionEntityResponse>;
  createHomeHeroSection?: Maybe<HomeHeroSectionEntityResponse>;
  createInnerFeaturesSection?: Maybe<InnerFeaturesSectionEntityResponse>;
  createInnerHeroSection?: Maybe<InnerHeroSectionEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createPricingFeaturesSection?: Maybe<PricingFeaturesSectionEntityResponse>;
  createPricingHeroSection?: Maybe<PricingHeroSectionEntityResponse>;
  createPricingPageTemplate?: Maybe<PricingPageTemplateEntityResponse>;
  createPricingPlan?: Maybe<PricingPlanEntityResponse>;
  createPricingVariantSection?: Maybe<PricingVariantSectionEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createServicesSection?: Maybe<ServicesSectionEntityResponse>;
  createStepsSection?: Maybe<StepsSectionEntityResponse>;
  createTipsSection?: Maybe<TipsSectionEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBlogSection?: Maybe<BlogSectionEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteContactsPage?: Maybe<ContactsPageEntityResponse>;
  deleteContactsSection?: Maybe<ContactsSectionEntityResponse>;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deleteContentSection?: Maybe<ContentSectionEntityResponse>;
  deleteFaqSection?: Maybe<FaqSectionEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomeHeroSection?: Maybe<HomeHeroSectionEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteInnerFeaturesSection?: Maybe<InnerFeaturesSectionEntityResponse>;
  deleteInnerHeroSection?: Maybe<InnerHeroSectionEntityResponse>;
  deleteLeakDetection?: Maybe<LeakDetectionEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deletePricingFeaturesSection?: Maybe<PricingFeaturesSectionEntityResponse>;
  deletePricingHeroSection?: Maybe<PricingHeroSectionEntityResponse>;
  deletePricingPageTemplate?: Maybe<PricingPageTemplateEntityResponse>;
  deletePricingPlan?: Maybe<PricingPlanEntityResponse>;
  deletePricingVariantSection?: Maybe<PricingVariantSectionEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteReverseOsmosis?: Maybe<ReverseOsmosisEntityResponse>;
  deleteReverseOsmosisPrice?: Maybe<ReverseOsmosisPriceEntityResponse>;
  deleteServicesSection?: Maybe<ServicesSectionEntityResponse>;
  deleteStepsSection?: Maybe<StepsSectionEntityResponse>;
  deleteTipsSection?: Maybe<TipsSectionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWhFiltration?: Maybe<WhFiltrationEntityResponse>;
  deleteWhFiltrationPrice?: Maybe<WhFiltrationPriceEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBlogSection?: Maybe<BlogSectionEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateContactsPage?: Maybe<ContactsPageEntityResponse>;
  updateContactsSection?: Maybe<ContactsSectionEntityResponse>;
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateContentSection?: Maybe<ContentSectionEntityResponse>;
  updateFaqSection?: Maybe<FaqSectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomeHeroSection?: Maybe<HomeHeroSectionEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateInnerFeaturesSection?: Maybe<InnerFeaturesSectionEntityResponse>;
  updateInnerHeroSection?: Maybe<InnerHeroSectionEntityResponse>;
  updateLeakDetection?: Maybe<LeakDetectionEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updatePricingFeaturesSection?: Maybe<PricingFeaturesSectionEntityResponse>;
  updatePricingHeroSection?: Maybe<PricingHeroSectionEntityResponse>;
  updatePricingPageTemplate?: Maybe<PricingPageTemplateEntityResponse>;
  updatePricingPlan?: Maybe<PricingPlanEntityResponse>;
  updatePricingVariantSection?: Maybe<PricingVariantSectionEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateReverseOsmosis?: Maybe<ReverseOsmosisEntityResponse>;
  updateReverseOsmosisPrice?: Maybe<ReverseOsmosisPriceEntityResponse>;
  updateServicesSection?: Maybe<ServicesSectionEntityResponse>;
  updateStepsSection?: Maybe<StepsSectionEntityResponse>;
  updateTipsSection?: Maybe<TipsSectionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWhFiltration?: Maybe<WhFiltrationEntityResponse>;
  updateWhFiltrationPrice?: Maybe<WhFiltrationPriceEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBlogSectionArgs = {
  data: BlogSectionInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreateContentSectionArgs = {
  data: ContentSectionInput;
};


export type MutationCreateFaqSectionArgs = {
  data: FaqSectionInput;
};


export type MutationCreateHomeHeroSectionArgs = {
  data: HomeHeroSectionInput;
};


export type MutationCreateInnerFeaturesSectionArgs = {
  data: InnerFeaturesSectionInput;
};


export type MutationCreateInnerHeroSectionArgs = {
  data: InnerHeroSectionInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreatePricingFeaturesSectionArgs = {
  data: PricingFeaturesSectionInput;
};


export type MutationCreatePricingHeroSectionArgs = {
  data: PricingHeroSectionInput;
};


export type MutationCreatePricingPageTemplateArgs = {
  data: PricingPageTemplateInput;
};


export type MutationCreatePricingPlanArgs = {
  data: PricingPlanInput;
};


export type MutationCreatePricingVariantSectionArgs = {
  data: PricingVariantSectionInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateServicesSectionArgs = {
  data: ServicesSectionInput;
};


export type MutationCreateStepsSectionArgs = {
  data: StepsSectionInput;
};


export type MutationCreateTipsSectionArgs = {
  data: TipsSectionInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBlogSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHomeHeroSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInnerFeaturesSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInnerHeroSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePricingFeaturesSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePricingHeroSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePricingPageTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePricingPlanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePricingVariantSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServicesSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStepsSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTipsSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateBlogSectionArgs = {
  data: BlogSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContactsPageArgs = {
  data: ContactsPageInput;
};


export type MutationUpdateContactsSectionArgs = {
  data: ContactsSectionInput;
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentSectionArgs = {
  data: ContentSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFaqSectionArgs = {
  data: FaqSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHomeHeroSectionArgs = {
  data: HomeHeroSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateInnerFeaturesSectionArgs = {
  data: InnerFeaturesSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInnerHeroSectionArgs = {
  data: InnerHeroSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLeakDetectionArgs = {
  data: LeakDetectionInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePricingFeaturesSectionArgs = {
  data: PricingFeaturesSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePricingHeroSectionArgs = {
  data: PricingHeroSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePricingPageTemplateArgs = {
  data: PricingPageTemplateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePricingPlanArgs = {
  data: PricingPlanInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePricingVariantSectionArgs = {
  data: PricingVariantSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateReverseOsmosisArgs = {
  data: ReverseOsmosisInput;
};


export type MutationUpdateReverseOsmosisPriceArgs = {
  data: ReverseOsmosisPriceInput;
};


export type MutationUpdateServicesSectionArgs = {
  data: ServicesSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStepsSectionArgs = {
  data: StepsSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTipsSectionArgs = {
  data: TipsSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWhFiltrationArgs = {
  data: WhFiltrationInput;
};


export type MutationUpdateWhFiltrationPriceArgs = {
  data: WhFiltrationPriceInput;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Order = {
  __typename?: 'Order';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  payment_id: Scalars['String']['output'];
  pricing_plan?: Maybe<PricingPlanEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  payment_id?: InputMaybe<StringFilterInput>;
  pricing_plan?: InputMaybe<PricingPlanFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  pricing_plan?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PricingFeaturesSection = {
  __typename?: 'PricingFeaturesSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<Maybe<ComponentItemPricingFeatures>>;
  label: Scalars['String']['output'];
  pricing_page_templates?: Maybe<PricingPageTemplateRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PricingFeaturesSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemPricingFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PricingFeaturesSectionPricing_Page_TemplatesArgs = {
  filters?: InputMaybe<PricingPageTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PricingFeaturesSectionEntity = {
  __typename?: 'PricingFeaturesSectionEntity';
  attributes?: Maybe<PricingFeaturesSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PricingFeaturesSectionEntityResponse = {
  __typename?: 'PricingFeaturesSectionEntityResponse';
  data?: Maybe<PricingFeaturesSectionEntity>;
};

export type PricingFeaturesSectionEntityResponseCollection = {
  __typename?: 'PricingFeaturesSectionEntityResponseCollection';
  data: Array<PricingFeaturesSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type PricingFeaturesSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PricingFeaturesSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemPricingFeaturesFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PricingFeaturesSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PricingFeaturesSectionFiltersInput>>>;
  pricing_page_templates?: InputMaybe<PricingPageTemplateFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PricingFeaturesSectionInput = {
  items?: InputMaybe<Array<InputMaybe<ComponentItemPricingFeaturesInput>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  pricing_page_templates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingHeroSection = {
  __typename?: 'PricingHeroSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  pricing_page_templates?: Maybe<PricingPageTemplateRelationResponseCollection>;
  pricing_variant_sections?: Maybe<PricingVariantSectionRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PricingHeroSectionPricing_Page_TemplatesArgs = {
  filters?: InputMaybe<PricingPageTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PricingHeroSectionPricing_Variant_SectionsArgs = {
  filters?: InputMaybe<PricingVariantSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PricingHeroSectionEntity = {
  __typename?: 'PricingHeroSectionEntity';
  attributes?: Maybe<PricingHeroSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PricingHeroSectionEntityResponse = {
  __typename?: 'PricingHeroSectionEntityResponse';
  data?: Maybe<PricingHeroSectionEntity>;
};

export type PricingHeroSectionEntityResponseCollection = {
  __typename?: 'PricingHeroSectionEntityResponseCollection';
  data: Array<PricingHeroSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type PricingHeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PricingHeroSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PricingHeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PricingHeroSectionFiltersInput>>>;
  pricing_page_templates?: InputMaybe<PricingPageTemplateFiltersInput>;
  pricing_variant_sections?: InputMaybe<PricingVariantSectionFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PricingHeroSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  pricing_page_templates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pricing_variant_sections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingHeroSectionRelationResponseCollection = {
  __typename?: 'PricingHeroSectionRelationResponseCollection';
  data: Array<PricingHeroSectionEntity>;
};

export type PricingPageTemplate = {
  __typename?: 'PricingPageTemplate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  faq_section?: Maybe<FaqSectionEntityResponse>;
  pricing_features_section?: Maybe<PricingFeaturesSectionEntityResponse>;
  pricing_hero_section?: Maybe<PricingHeroSectionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PricingPageTemplateEntity = {
  __typename?: 'PricingPageTemplateEntity';
  attributes?: Maybe<PricingPageTemplate>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PricingPageTemplateEntityResponse = {
  __typename?: 'PricingPageTemplateEntityResponse';
  data?: Maybe<PricingPageTemplateEntity>;
};

export type PricingPageTemplateEntityResponseCollection = {
  __typename?: 'PricingPageTemplateEntityResponseCollection';
  data: Array<PricingPageTemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type PricingPageTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PricingPageTemplateFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  faq_section?: InputMaybe<FaqSectionFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PricingPageTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PricingPageTemplateFiltersInput>>>;
  pricing_features_section?: InputMaybe<PricingFeaturesSectionFiltersInput>;
  pricing_hero_section?: InputMaybe<PricingHeroSectionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PricingPageTemplateInput = {
  faq_section?: InputMaybe<Scalars['ID']['input']>;
  pricing_features_section?: InputMaybe<Scalars['ID']['input']>;
  pricing_hero_section?: InputMaybe<Scalars['ID']['input']>;
};

export type PricingPageTemplateRelationResponseCollection = {
  __typename?: 'PricingPageTemplateRelationResponseCollection';
  data: Array<PricingPageTemplateEntity>;
};

export type PricingPlan = {
  __typename?: 'PricingPlan';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deposit: Scalars['Float']['output'];
  installation: Scalars['Boolean']['output'];
  list?: Maybe<Array<Maybe<ComponentUiListItem>>>;
  name: Scalars['String']['output'];
  orders?: Maybe<OrderRelationResponseCollection>;
  price: Scalars['Float']['output'];
  pricing_variant_sections?: Maybe<PricingVariantSectionRelationResponseCollection>;
  products?: Maybe<ProductRelationResponseCollection>;
  type: Enum_Pricingplan_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PricingPlanListArgs = {
  filters?: InputMaybe<ComponentUiListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PricingPlanOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PricingPlanPricing_Variant_SectionsArgs = {
  filters?: InputMaybe<PricingVariantSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PricingPlanProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PricingPlanEntity = {
  __typename?: 'PricingPlanEntity';
  attributes?: Maybe<PricingPlan>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PricingPlanEntityResponse = {
  __typename?: 'PricingPlanEntityResponse';
  data?: Maybe<PricingPlanEntity>;
};

export type PricingPlanEntityResponseCollection = {
  __typename?: 'PricingPlanEntityResponseCollection';
  data: Array<PricingPlanEntity>;
  meta: ResponseCollectionMeta;
};

export type PricingPlanFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PricingPlanFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deposit?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  installation?: InputMaybe<BooleanFilterInput>;
  list?: InputMaybe<ComponentUiListItemFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PricingPlanFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PricingPlanFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  pricing_variant_sections?: InputMaybe<PricingVariantSectionFiltersInput>;
  products?: InputMaybe<ProductFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PricingPlanInput = {
  deposit?: InputMaybe<Scalars['Float']['input']>;
  installation?: InputMaybe<Scalars['Boolean']['input']>;
  list?: InputMaybe<Array<InputMaybe<ComponentUiListItemInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricing_variant_sections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Enum_Pricingplan_Type>;
};

export type PricingPlanRelationResponseCollection = {
  __typename?: 'PricingPlanRelationResponseCollection';
  data: Array<PricingPlanEntity>;
};

export type PricingVariantSection = {
  __typename?: 'PricingVariantSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  icon: ComponentUiIcon;
  pricing_hero_sections?: Maybe<PricingHeroSectionRelationResponseCollection>;
  pricing_plans?: Maybe<PricingPlanRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PricingVariantSectionPricing_Hero_SectionsArgs = {
  filters?: InputMaybe<PricingHeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PricingVariantSectionPricing_PlansArgs = {
  filters?: InputMaybe<PricingPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PricingVariantSectionEntity = {
  __typename?: 'PricingVariantSectionEntity';
  attributes?: Maybe<PricingVariantSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PricingVariantSectionEntityResponse = {
  __typename?: 'PricingVariantSectionEntityResponse';
  data?: Maybe<PricingVariantSectionEntity>;
};

export type PricingVariantSectionEntityResponseCollection = {
  __typename?: 'PricingVariantSectionEntityResponseCollection';
  data: Array<PricingVariantSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type PricingVariantSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PricingVariantSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<ComponentUiIconFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PricingVariantSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PricingVariantSectionFiltersInput>>>;
  pricing_hero_sections?: InputMaybe<PricingHeroSectionFiltersInput>;
  pricing_plans?: InputMaybe<PricingPlanFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PricingVariantSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<ComponentUiIconInput>;
  pricing_hero_sections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pricing_plans?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PricingVariantSectionRelationResponseCollection = {
  __typename?: 'PricingVariantSectionRelationResponseCollection';
  data: Array<PricingVariantSectionEntity>;
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  label: Scalars['String']['output'];
  meta?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  preview: UploadFileEntityResponse;
  preview_object_fit: Enum_Product_Preview_Object_Fit;
  price: Scalars['Float']['output'];
  pricing_plans?: Maybe<PricingPlanRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductPricing_PlansArgs = {
  filters?: InputMaybe<PricingPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  discount?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  meta?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  preview_object_fit?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  pricing_plans?: InputMaybe<PricingPlanFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  discount?: InputMaybe<Scalars['Float']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['ID']['input']>;
  preview_object_fit?: InputMaybe<Enum_Product_Preview_Object_Fit>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricing_plans?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  blogSection?: Maybe<BlogSectionEntityResponse>;
  blogSections?: Maybe<BlogSectionEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  contactsPage?: Maybe<ContactsPageEntityResponse>;
  contactsSection?: Maybe<ContactsSectionEntityResponse>;
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  contentSection?: Maybe<ContentSectionEntityResponse>;
  contentSections?: Maybe<ContentSectionEntityResponseCollection>;
  faqSection?: Maybe<FaqSectionEntityResponse>;
  faqSections?: Maybe<FaqSectionEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  homeHeroSection?: Maybe<HomeHeroSectionEntityResponse>;
  homeHeroSections?: Maybe<HomeHeroSectionEntityResponseCollection>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  innerFeaturesSection?: Maybe<InnerFeaturesSectionEntityResponse>;
  innerFeaturesSections?: Maybe<InnerFeaturesSectionEntityResponseCollection>;
  innerHeroSection?: Maybe<InnerHeroSectionEntityResponse>;
  innerHeroSections?: Maybe<InnerHeroSectionEntityResponseCollection>;
  leakDetection?: Maybe<LeakDetectionEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  pricingFeaturesSection?: Maybe<PricingFeaturesSectionEntityResponse>;
  pricingFeaturesSections?: Maybe<PricingFeaturesSectionEntityResponseCollection>;
  pricingHeroSection?: Maybe<PricingHeroSectionEntityResponse>;
  pricingHeroSections?: Maybe<PricingHeroSectionEntityResponseCollection>;
  pricingPageTemplate?: Maybe<PricingPageTemplateEntityResponse>;
  pricingPageTemplates?: Maybe<PricingPageTemplateEntityResponseCollection>;
  pricingPlan?: Maybe<PricingPlanEntityResponse>;
  pricingPlans?: Maybe<PricingPlanEntityResponseCollection>;
  pricingVariantSection?: Maybe<PricingVariantSectionEntityResponse>;
  pricingVariantSections?: Maybe<PricingVariantSectionEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  reverseOsmosis?: Maybe<ReverseOsmosisEntityResponse>;
  reverseOsmosisPrice?: Maybe<ReverseOsmosisPriceEntityResponse>;
  servicesSection?: Maybe<ServicesSectionEntityResponse>;
  servicesSections?: Maybe<ServicesSectionEntityResponseCollection>;
  stepsSection?: Maybe<StepsSectionEntityResponse>;
  stepsSections?: Maybe<StepsSectionEntityResponseCollection>;
  tipsSection?: Maybe<TipsSectionEntityResponse>;
  tipsSections?: Maybe<TipsSectionEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  whFiltration?: Maybe<WhFiltrationEntityResponse>;
  whFiltrationPrice?: Maybe<WhFiltrationPriceEntityResponse>;
};


export type QueryBlogSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlogSectionsArgs = {
  filters?: InputMaybe<BlogSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentSectionsArgs = {
  filters?: InputMaybe<ContentSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFaqSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFaqSectionsArgs = {
  filters?: InputMaybe<FaqSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomeHeroSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryHomeHeroSectionsArgs = {
  filters?: InputMaybe<HomeHeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInnerFeaturesSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInnerFeaturesSectionsArgs = {
  filters?: InputMaybe<InnerFeaturesSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInnerHeroSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInnerHeroSectionsArgs = {
  filters?: InputMaybe<InnerHeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricingFeaturesSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPricingFeaturesSectionsArgs = {
  filters?: InputMaybe<PricingFeaturesSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricingHeroSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPricingHeroSectionsArgs = {
  filters?: InputMaybe<PricingHeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricingPageTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPricingPageTemplatesArgs = {
  filters?: InputMaybe<PricingPageTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricingPlanArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPricingPlansArgs = {
  filters?: InputMaybe<PricingPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricingVariantSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPricingVariantSectionsArgs = {
  filters?: InputMaybe<PricingVariantSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServicesSectionsArgs = {
  filters?: InputMaybe<ServicesSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStepsSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStepsSectionsArgs = {
  filters?: InputMaybe<StepsSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTipsSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTipsSectionsArgs = {
  filters?: InputMaybe<TipsSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type ReverseOsmosis = {
  __typename?: 'ReverseOsmosis';
  blog_section?: Maybe<BlogSectionEntityResponse>;
  content_section?: Maybe<ContentSectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  inner_features_section?: Maybe<InnerFeaturesSectionEntityResponse>;
  inner_hero_section?: Maybe<InnerHeroSectionEntityResponse>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReverseOsmosisEntity = {
  __typename?: 'ReverseOsmosisEntity';
  attributes?: Maybe<ReverseOsmosis>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ReverseOsmosisEntityResponse = {
  __typename?: 'ReverseOsmosisEntityResponse';
  data?: Maybe<ReverseOsmosisEntity>;
};

export type ReverseOsmosisInput = {
  blog_section?: InputMaybe<Scalars['ID']['input']>;
  content_section?: InputMaybe<Scalars['ID']['input']>;
  inner_features_section?: InputMaybe<Scalars['ID']['input']>;
  inner_hero_section?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type ReverseOsmosisPrice = {
  __typename?: 'ReverseOsmosisPrice';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  pricing_page_template?: Maybe<PricingPageTemplateEntityResponse>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReverseOsmosisPriceEntity = {
  __typename?: 'ReverseOsmosisPriceEntity';
  attributes?: Maybe<ReverseOsmosisPrice>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ReverseOsmosisPriceEntityResponse = {
  __typename?: 'ReverseOsmosisPriceEntityResponse';
  data?: Maybe<ReverseOsmosisPriceEntity>;
};

export type ReverseOsmosisPriceInput = {
  pricing_page_template?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type ServicesSection = {
  __typename?: 'ServicesSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  items: Array<Maybe<ComponentItemServices>>;
  label: Scalars['String']['output'];
  list: Array<Maybe<ComponentUiListItem>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServicesSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemServicesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesSectionListArgs = {
  filters?: InputMaybe<ComponentUiListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesSectionEntity = {
  __typename?: 'ServicesSectionEntity';
  attributes?: Maybe<ServicesSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServicesSectionEntityResponse = {
  __typename?: 'ServicesSectionEntityResponse';
  data?: Maybe<ServicesSectionEntity>;
};

export type ServicesSectionEntityResponseCollection = {
  __typename?: 'ServicesSectionEntityResponseCollection';
  data: Array<ServicesSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type ServicesSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServicesSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemServicesFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  list?: InputMaybe<ComponentUiListItemFiltersInput>;
  not?: InputMaybe<ServicesSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServicesSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServicesSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentItemServicesInput>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  list?: InputMaybe<Array<InputMaybe<ComponentUiListItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StepsSection = {
  __typename?: 'StepsSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  items?: Maybe<Array<Maybe<ComponentItemSteps>>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type StepsSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemStepsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StepsSectionEntity = {
  __typename?: 'StepsSectionEntity';
  attributes?: Maybe<StepsSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StepsSectionEntityResponse = {
  __typename?: 'StepsSectionEntityResponse';
  data?: Maybe<StepsSectionEntity>;
};

export type StepsSectionEntityResponseCollection = {
  __typename?: 'StepsSectionEntityResponseCollection';
  data: Array<StepsSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type StepsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StepsSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemStepsFiltersInput>;
  not?: InputMaybe<StepsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StepsSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StepsSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentItemStepsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TipsSection = {
  __typename?: 'TipsSection';
  button?: Maybe<ComponentUiButton>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<Maybe<ComponentItemTips>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TipsSectionItemsArgs = {
  filters?: InputMaybe<ComponentItemTipsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TipsSectionEntity = {
  __typename?: 'TipsSectionEntity';
  attributes?: Maybe<TipsSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TipsSectionEntityResponse = {
  __typename?: 'TipsSectionEntityResponse';
  data?: Maybe<TipsSectionEntity>;
};

export type TipsSectionEntityResponseCollection = {
  __typename?: 'TipsSectionEntityResponseCollection';
  data: Array<TipsSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type TipsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TipsSectionFiltersInput>>>;
  button?: InputMaybe<ComponentUiButtonFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentItemTipsFiltersInput>;
  not?: InputMaybe<TipsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TipsSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TipsSectionInput = {
  button?: InputMaybe<ComponentUiButtonInput>;
  items?: InputMaybe<Array<InputMaybe<ComponentItemTipsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type WhFiltration = {
  __typename?: 'WhFiltration';
  blog_section?: Maybe<BlogSectionEntityResponse>;
  content_section?: Maybe<ContentSectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  inner_features_section?: Maybe<InnerFeaturesSectionEntityResponse>;
  inner_hero_section?: Maybe<InnerHeroSectionEntityResponse>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WhFiltrationEntity = {
  __typename?: 'WhFiltrationEntity';
  attributes?: Maybe<WhFiltration>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WhFiltrationEntityResponse = {
  __typename?: 'WhFiltrationEntityResponse';
  data?: Maybe<WhFiltrationEntity>;
};

export type WhFiltrationInput = {
  blog_section?: InputMaybe<Scalars['ID']['input']>;
  content_section?: InputMaybe<Scalars['ID']['input']>;
  inner_features_section?: InputMaybe<Scalars['ID']['input']>;
  inner_hero_section?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type WhFiltrationPrice = {
  __typename?: 'WhFiltrationPrice';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  pricing_page_template?: Maybe<PricingPageTemplateEntityResponse>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WhFiltrationPriceEntity = {
  __typename?: 'WhFiltrationPriceEntity';
  attributes?: Maybe<WhFiltrationPrice>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WhFiltrationPriceEntityResponse = {
  __typename?: 'WhFiltrationPriceEntityResponse';
  data?: Maybe<WhFiltrationPriceEntity>;
};

export type WhFiltrationPriceInput = {
  pricing_page_template?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};
