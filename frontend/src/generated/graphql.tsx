import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type AddPhoto = {
  __typename?: 'AddPhoto';
  photo?: Maybe<PhotoType>;
};

export type AddProject = {
  __typename?: 'AddProject';
  project?: Maybe<ProjectType>;
};

export type ChangeContacts = {
  __typename?: 'ChangeContacts';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeGeopos = {
  __typename?: 'ChangeGeopos';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeNames = {
  __typename?: 'ChangeNames';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeTheme = {
  __typename?: 'ChangeTheme';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeVisitCardProfile = {
  __typename?: 'ChangeVisitCardProfile';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeVisitCardProfilePhoto = {
  __typename?: 'ChangeVisitCardProfilePhoto';
  newPath?: Maybe<Scalars['String']>;
};

export type ContactsType = Node & {
  __typename?: 'ContactsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  tgLink?: Maybe<Scalars['String']>;
  whatsappLink?: Maybe<Scalars['String']>;
  instLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  visitCard: VisitCardType;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  ok?: Maybe<Scalars['Boolean']>;
};

export type EditProject = {
  __typename?: 'EditProject';
  ok?: Maybe<Scalars['Boolean']>;
};


export type GeoPosType = Node & {
  __typename?: 'GeoPosType';
  /** The ID of the object. */
  id: Scalars['ID'];
  lattitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  card: VisitCardType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUser>;
  changeContacts?: Maybe<ChangeContacts>;
  changeVisitCardProfile?: Maybe<ChangeVisitCardProfile>;
  changeVisitCardProfilePhoto?: Maybe<ChangeVisitCardProfilePhoto>;
  addProject?: Maybe<AddProject>;
  removeProject?: Maybe<RemoveProject>;
  addPhoto?: Maybe<AddPhoto>;
  removePhoto?: Maybe<RemovePhoto>;
  changeGeopos?: Maybe<ChangeGeopos>;
  editProject?: Maybe<EditProject>;
  editPhoto?: Maybe<PhotoEdit>;
  setGeopos?: Maybe<SetGeoPos>;
  changeNames?: Maybe<ChangeNames>;
  changeTheme?: Maybe<ChangeTheme>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
};


export type MutationCreateUserArgs = {
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationChangeContactsArgs = {
  contactsId?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  instLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  tgLink?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  whatsappLink?: Maybe<Scalars['String']>;
};


export type MutationChangeVisitCardProfileArgs = {
  description?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  positionInCompany?: Maybe<Scalars['String']>;
  secondDescr?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  visitCardId?: Maybe<Scalars['ID']>;
};


export type MutationChangeVisitCardProfilePhotoArgs = {
  photo?: Maybe<Scalars['Upload']>;
  visitCardId?: Maybe<Scalars['ID']>;
};


export type MutationAddProjectArgs = {
  cardId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationRemoveProjectArgs = {
  projectId?: Maybe<Scalars['ID']>;
};


export type MutationAddPhotoArgs = {
  cardId?: Maybe<Scalars['ID']>;
  photo?: Maybe<Scalars['Upload']>;
};


export type MutationRemovePhotoArgs = {
  photoId?: Maybe<Scalars['ID']>;
};


export type MutationChangeGeoposArgs = {
  cardId?: Maybe<Scalars['ID']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};


export type MutationEditProjectArgs = {
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
};


export type MutationEditPhotoArgs = {
  newPhoto?: Maybe<Scalars['Upload']>;
  photoId?: Maybe<Scalars['ID']>;
};


export type MutationSetGeoposArgs = {
  geoposId?: Maybe<Scalars['ID']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};


export type MutationChangeNamesArgs = {
  cardId?: Maybe<Scalars['ID']>;
  geoName?: Maybe<Scalars['String']>;
  photoName?: Maybe<Scalars['String']>;
  projectsName?: Maybe<Scalars['String']>;
};


export type MutationChangeThemeArgs = {
  theme?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PhotoEdit = {
  __typename?: 'PhotoEdit';
  newImg?: Maybe<PhotoType>;
};

export type PhotoType = Node & {
  __typename?: 'PhotoType';
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  card?: Maybe<VisitCardType>;
  url?: Maybe<Scalars['String']>;
};

export type PhotoTypeConnection = {
  __typename?: 'PhotoTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PhotoTypeEdge>>;
};

/** A Relay edge containing a `PhotoType` and its cursor. */
export type PhotoTypeEdge = {
  __typename?: 'PhotoTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PhotoType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProjectType = Node & {
  __typename?: 'ProjectType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  card: VisitCardType;
};

export type ProjectTypeConnection = {
  __typename?: 'ProjectTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProjectTypeEdge>>;
};

/** A Relay edge containing a `ProjectType` and its cursor. */
export type ProjectTypeEdge = {
  __typename?: 'ProjectTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProjectType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  visit?: Maybe<VisitCardType>;
  getVisitByUser?: Maybe<VisitCardType>;
};


export type QueryVisitArgs = {
  id: Scalars['ID'];
};


export type QueryGetVisitByUserArgs = {
  token?: Maybe<Scalars['String']>;
};

export type RemovePhoto = {
  __typename?: 'RemovePhoto';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RemoveProject = {
  __typename?: 'RemoveProject';
  ok?: Maybe<Scalars['Boolean']>;
};

export type SetGeoPos = {
  __typename?: 'SetGeoPos';
  ok?: Maybe<Scalars['Boolean']>;
};


export type VisitCardType = Node & {
  __typename?: 'VisitCardType';
  /** The ID of the object. */
  id: Scalars['ID'];
  ProfilePhoto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  midname: Scalars['String'];
  positionInCompany?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  secondDescr?: Maybe<Scalars['String']>;
  projectDescr: Scalars['String'];
  geoDescr: Scalars['String'];
  photoDescr: Scalars['String'];
  theme: Scalars['String'];
  contacts?: Maybe<ContactsType>;
  projectSet: ProjectTypeConnection;
  photoSet: PhotoTypeConnection;
  geopos?: Maybe<GeoPosType>;
  imageUrl?: Maybe<Scalars['String']>;
};


export type VisitCardTypeProjectSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type VisitCardTypePhotoSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export const CreateUserDocument = gql`
    mutation createUser($username: String, $password: String) {
  createUser(password: $password, username: $username) {
    ok
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetTokenDocument = gql`
    mutation getToken($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}
    `;
export type GetTokenMutationFn = Apollo.MutationFunction<GetTokenMutation, GetTokenMutationVariables>;

/**
 * __useGetTokenMutation__
 *
 * To run a mutation, you first call `useGetTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTokenMutation, { data, loading, error }] = useGetTokenMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetTokenMutation(baseOptions?: Apollo.MutationHookOptions<GetTokenMutation, GetTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetTokenMutation, GetTokenMutationVariables>(GetTokenDocument, options);
      }
export type GetTokenMutationHookResult = ReturnType<typeof useGetTokenMutation>;
export type GetTokenMutationResult = Apollo.MutationResult<GetTokenMutation>;
export type GetTokenMutationOptions = Apollo.BaseMutationOptions<GetTokenMutation, GetTokenMutationVariables>;
export const SetVisitProfileDocument = gql`
    mutation setVisitProfile($name: String, $surname: String, $midname: String, $positionInCompany: String, $description: String, $secondDescr: String, $id: ID) {
  changeVisitCardProfile(
    description: $description
    name: $name
    surname: $surname
    midname: $midname
    positionInCompany: $positionInCompany
    secondDescr: $secondDescr
    visitCardId: $id
  ) {
    ok
  }
}
    `;
export type SetVisitProfileMutationFn = Apollo.MutationFunction<SetVisitProfileMutation, SetVisitProfileMutationVariables>;

/**
 * __useSetVisitProfileMutation__
 *
 * To run a mutation, you first call `useSetVisitProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetVisitProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setVisitProfileMutation, { data, loading, error }] = useSetVisitProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      midname: // value for 'midname'
 *      positionInCompany: // value for 'positionInCompany'
 *      description: // value for 'description'
 *      secondDescr: // value for 'secondDescr'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetVisitProfileMutation(baseOptions?: Apollo.MutationHookOptions<SetVisitProfileMutation, SetVisitProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetVisitProfileMutation, SetVisitProfileMutationVariables>(SetVisitProfileDocument, options);
      }
export type SetVisitProfileMutationHookResult = ReturnType<typeof useSetVisitProfileMutation>;
export type SetVisitProfileMutationResult = Apollo.MutationResult<SetVisitProfileMutation>;
export type SetVisitProfileMutationOptions = Apollo.BaseMutationOptions<SetVisitProfileMutation, SetVisitProfileMutationVariables>;
export const GetVisitDocument = gql`
    query getVisit($token: String) {
  getVisitByUser(token: $token) {
    id
    name
    midname
    surname
    positionInCompany
    description
    imageUrl
    secondDescr
    contacts {
      phone
      id
      website
      tgLink
      whatsappLink
      instLink
      vkLink
      facebookLink
      twitterLink
    }
    projectSet {
      edges {
        node {
          id
        }
      }
    }
    photoSet {
      edges {
        node {
          id
        }
      }
    }
    geopos {
      lattitude
      longitude
    }
  }
}
    `;

/**
 * __useGetVisitQuery__
 *
 * To run a query within a React component, call `useGetVisitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVisitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVisitQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetVisitQuery(baseOptions?: Apollo.QueryHookOptions<GetVisitQuery, GetVisitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVisitQuery, GetVisitQueryVariables>(GetVisitDocument, options);
      }
export function useGetVisitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVisitQuery, GetVisitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVisitQuery, GetVisitQueryVariables>(GetVisitDocument, options);
        }
export type GetVisitQueryHookResult = ReturnType<typeof useGetVisitQuery>;
export type GetVisitLazyQueryHookResult = ReturnType<typeof useGetVisitLazyQuery>;
export type GetVisitQueryResult = Apollo.QueryResult<GetVisitQuery, GetVisitQueryVariables>;
export const GetVisitByIdDocument = gql`
    query getVisitById($id: ID!) {
  visit(id: $id) {
    id
    name
    midname
    surname
    positionInCompany
    description
    imageUrl
    secondDescr
    geoDescr
    photoDescr
    projectDescr
    theme
    contacts {
      phone
      id
      website
      tgLink
      whatsappLink
      instLink
      vkLink
      facebookLink
      twitterLink
    }
    projectSet {
      edges {
        node {
          id
          name
          link
        }
      }
    }
    photoSet {
      edges {
        node {
          id
          url
        }
      }
    }
    geopos {
      lattitude
      longitude
    }
  }
}
    `;

/**
 * __useGetVisitByIdQuery__
 *
 * To run a query within a React component, call `useGetVisitByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVisitByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVisitByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVisitByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVisitByIdQuery, GetVisitByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVisitByIdQuery, GetVisitByIdQueryVariables>(GetVisitByIdDocument, options);
      }
export function useGetVisitByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVisitByIdQuery, GetVisitByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVisitByIdQuery, GetVisitByIdQueryVariables>(GetVisitByIdDocument, options);
        }
export type GetVisitByIdQueryHookResult = ReturnType<typeof useGetVisitByIdQuery>;
export type GetVisitByIdLazyQueryHookResult = ReturnType<typeof useGetVisitByIdLazyQuery>;
export type GetVisitByIdQueryResult = Apollo.QueryResult<GetVisitByIdQuery, GetVisitByIdQueryVariables>;
export const ChangeContactsDocument = gql`
    mutation changeContacts($contacts_id: String, $phone: String, $website: String, $tgLink: String, $whatsappLink: String, $instLink: String, $vkLink: String, $facebookLink: String, $twitterLink: String) {
  changeContacts(
    contactsId: $contacts_id
    phone: $phone
    website: $website
    tgLink: $tgLink
    whatsappLink: $whatsappLink
    instLink: $instLink
    vkLink: $vkLink
    facebookLink: $facebookLink
    twitterLink: $twitterLink
  ) {
    ok
  }
}
    `;
export type ChangeContactsMutationFn = Apollo.MutationFunction<ChangeContactsMutation, ChangeContactsMutationVariables>;

/**
 * __useChangeContactsMutation__
 *
 * To run a mutation, you first call `useChangeContactsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeContactsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeContactsMutation, { data, loading, error }] = useChangeContactsMutation({
 *   variables: {
 *      contacts_id: // value for 'contacts_id'
 *      phone: // value for 'phone'
 *      website: // value for 'website'
 *      tgLink: // value for 'tgLink'
 *      whatsappLink: // value for 'whatsappLink'
 *      instLink: // value for 'instLink'
 *      vkLink: // value for 'vkLink'
 *      facebookLink: // value for 'facebookLink'
 *      twitterLink: // value for 'twitterLink'
 *   },
 * });
 */
export function useChangeContactsMutation(baseOptions?: Apollo.MutationHookOptions<ChangeContactsMutation, ChangeContactsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeContactsMutation, ChangeContactsMutationVariables>(ChangeContactsDocument, options);
      }
export type ChangeContactsMutationHookResult = ReturnType<typeof useChangeContactsMutation>;
export type ChangeContactsMutationResult = Apollo.MutationResult<ChangeContactsMutation>;
export type ChangeContactsMutationOptions = Apollo.BaseMutationOptions<ChangeContactsMutation, ChangeContactsMutationVariables>;
export const AddProjectDocument = gql`
    mutation addProject($projectName: String, $link: String, $id: ID) {
  addProject(cardId: $id, link: $link, name: $projectName) {
    project {
      id
    }
  }
}
    `;
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      projectName: // value for 'projectName'
 *      link: // value for 'link'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
export const RemoveProjectDocument = gql`
    mutation removeProject($projectId: ID!) {
  removeProject(projectId: $projectId) {
    ok
  }
}
    `;
export type RemoveProjectMutationFn = Apollo.MutationFunction<RemoveProjectMutation, RemoveProjectMutationVariables>;

/**
 * __useRemoveProjectMutation__
 *
 * To run a mutation, you first call `useRemoveProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProjectMutation, { data, loading, error }] = useRemoveProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useRemoveProjectMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProjectMutation, RemoveProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProjectMutation, RemoveProjectMutationVariables>(RemoveProjectDocument, options);
      }
export type RemoveProjectMutationHookResult = ReturnType<typeof useRemoveProjectMutation>;
export type RemoveProjectMutationResult = Apollo.MutationResult<RemoveProjectMutation>;
export type RemoveProjectMutationOptions = Apollo.BaseMutationOptions<RemoveProjectMutation, RemoveProjectMutationVariables>;
export const GetVisitIdDocument = gql`
    query getVisitId($token: String) {
  getVisitByUser(token: $token) {
    id
  }
}
    `;

/**
 * __useGetVisitIdQuery__
 *
 * To run a query within a React component, call `useGetVisitIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVisitIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVisitIdQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetVisitIdQuery(baseOptions?: Apollo.QueryHookOptions<GetVisitIdQuery, GetVisitIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVisitIdQuery, GetVisitIdQueryVariables>(GetVisitIdDocument, options);
      }
export function useGetVisitIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVisitIdQuery, GetVisitIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVisitIdQuery, GetVisitIdQueryVariables>(GetVisitIdDocument, options);
        }
export type GetVisitIdQueryHookResult = ReturnType<typeof useGetVisitIdQuery>;
export type GetVisitIdLazyQueryHookResult = ReturnType<typeof useGetVisitIdLazyQuery>;
export type GetVisitIdQueryResult = Apollo.QueryResult<GetVisitIdQuery, GetVisitIdQueryVariables>;
export const GetAvaDocument = gql`
    query getAva($token: String) {
  getVisitByUser(token: $token) {
    imageUrl
    id
  }
}
    `;

/**
 * __useGetAvaQuery__
 *
 * To run a query within a React component, call `useGetAvaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvaQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetAvaQuery(baseOptions?: Apollo.QueryHookOptions<GetAvaQuery, GetAvaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvaQuery, GetAvaQueryVariables>(GetAvaDocument, options);
      }
export function useGetAvaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvaQuery, GetAvaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvaQuery, GetAvaQueryVariables>(GetAvaDocument, options);
        }
export type GetAvaQueryHookResult = ReturnType<typeof useGetAvaQuery>;
export type GetAvaLazyQueryHookResult = ReturnType<typeof useGetAvaLazyQuery>;
export type GetAvaQueryResult = Apollo.QueryResult<GetAvaQuery, GetAvaQueryVariables>;
export const SetAvaDocument = gql`
    mutation setAva($ava: Upload!, $id: ID) {
  changeVisitCardProfilePhoto(visitCardId: $id, photo: $ava) {
    newPath
  }
}
    `;
export type SetAvaMutationFn = Apollo.MutationFunction<SetAvaMutation, SetAvaMutationVariables>;

/**
 * __useSetAvaMutation__
 *
 * To run a mutation, you first call `useSetAvaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAvaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAvaMutation, { data, loading, error }] = useSetAvaMutation({
 *   variables: {
 *      ava: // value for 'ava'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetAvaMutation(baseOptions?: Apollo.MutationHookOptions<SetAvaMutation, SetAvaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetAvaMutation, SetAvaMutationVariables>(SetAvaDocument, options);
      }
export type SetAvaMutationHookResult = ReturnType<typeof useSetAvaMutation>;
export type SetAvaMutationResult = Apollo.MutationResult<SetAvaMutation>;
export type SetAvaMutationOptions = Apollo.BaseMutationOptions<SetAvaMutation, SetAvaMutationVariables>;
export const GetCredsDocument = gql`
    query getCreds($token: String) {
  getVisitByUser(token: $token) {
    id
    name
    surname
    midname
  }
}
    `;

/**
 * __useGetCredsQuery__
 *
 * To run a query within a React component, call `useGetCredsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCredsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCredsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetCredsQuery(baseOptions?: Apollo.QueryHookOptions<GetCredsQuery, GetCredsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCredsQuery, GetCredsQueryVariables>(GetCredsDocument, options);
      }
export function useGetCredsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCredsQuery, GetCredsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCredsQuery, GetCredsQueryVariables>(GetCredsDocument, options);
        }
export type GetCredsQueryHookResult = ReturnType<typeof useGetCredsQuery>;
export type GetCredsLazyQueryHookResult = ReturnType<typeof useGetCredsLazyQuery>;
export type GetCredsQueryResult = Apollo.QueryResult<GetCredsQuery, GetCredsQueryVariables>;
export const GetPosDocument = gql`
    query getPos($token: String) {
  getVisitByUser(token: $token) {
    id
    positionInCompany
  }
}
    `;

/**
 * __useGetPosQuery__
 *
 * To run a query within a React component, call `useGetPosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPosQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetPosQuery(baseOptions?: Apollo.QueryHookOptions<GetPosQuery, GetPosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPosQuery, GetPosQueryVariables>(GetPosDocument, options);
      }
export function useGetPosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPosQuery, GetPosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPosQuery, GetPosQueryVariables>(GetPosDocument, options);
        }
export type GetPosQueryHookResult = ReturnType<typeof useGetPosQuery>;
export type GetPosLazyQueryHookResult = ReturnType<typeof useGetPosLazyQuery>;
export type GetPosQueryResult = Apollo.QueryResult<GetPosQuery, GetPosQueryVariables>;
export const GetDescrDocument = gql`
    query getDescr($token: String) {
  getVisitByUser(token: $token) {
    id
    description
  }
}
    `;

/**
 * __useGetDescrQuery__
 *
 * To run a query within a React component, call `useGetDescrQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDescrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDescrQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetDescrQuery(baseOptions?: Apollo.QueryHookOptions<GetDescrQuery, GetDescrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDescrQuery, GetDescrQueryVariables>(GetDescrDocument, options);
      }
export function useGetDescrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDescrQuery, GetDescrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDescrQuery, GetDescrQueryVariables>(GetDescrDocument, options);
        }
export type GetDescrQueryHookResult = ReturnType<typeof useGetDescrQuery>;
export type GetDescrLazyQueryHookResult = ReturnType<typeof useGetDescrLazyQuery>;
export type GetDescrQueryResult = Apollo.QueryResult<GetDescrQuery, GetDescrQueryVariables>;
export const GetContactsDocument = gql`
    query getContacts($token: String) {
  getVisitByUser(token: $token) {
    contacts {
      id
      facebookLink
      vkLink
      website
      whatsappLink
      twitterLink
      tgLink
      phone
      instLink
    }
  }
}
    `;

/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetContactsQuery(baseOptions?: Apollo.QueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
      }
export function useGetContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
        }
export type GetContactsQueryHookResult = ReturnType<typeof useGetContactsQuery>;
export type GetContactsLazyQueryHookResult = ReturnType<typeof useGetContactsLazyQuery>;
export type GetContactsQueryResult = Apollo.QueryResult<GetContactsQuery, GetContactsQueryVariables>;
export const GetSecDescrDocument = gql`
    query getSecDescr($token: String) {
  getVisitByUser(token: $token) {
    secondDescr
    id
  }
}
    `;

/**
 * __useGetSecDescrQuery__
 *
 * To run a query within a React component, call `useGetSecDescrQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSecDescrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecDescrQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetSecDescrQuery(baseOptions?: Apollo.QueryHookOptions<GetSecDescrQuery, GetSecDescrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSecDescrQuery, GetSecDescrQueryVariables>(GetSecDescrDocument, options);
      }
export function useGetSecDescrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSecDescrQuery, GetSecDescrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSecDescrQuery, GetSecDescrQueryVariables>(GetSecDescrDocument, options);
        }
export type GetSecDescrQueryHookResult = ReturnType<typeof useGetSecDescrQuery>;
export type GetSecDescrLazyQueryHookResult = ReturnType<typeof useGetSecDescrLazyQuery>;
export type GetSecDescrQueryResult = Apollo.QueryResult<GetSecDescrQuery, GetSecDescrQueryVariables>;
export const GetProjectsDocument = gql`
    query getProjects($token: String) {
  getVisitByUser(token: $token) {
    id
    projectDescr
    projectSet {
      edges {
        node {
          name
          link
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const EditProjDocument = gql`
    mutation editProj($projectName: String, $link: String, $id: ID) {
  editProject(link: $link, name: $projectName, projectId: $id) {
    ok
  }
}
    `;
export type EditProjMutationFn = Apollo.MutationFunction<EditProjMutation, EditProjMutationVariables>;

/**
 * __useEditProjMutation__
 *
 * To run a mutation, you first call `useEditProjMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProjMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProjMutation, { data, loading, error }] = useEditProjMutation({
 *   variables: {
 *      projectName: // value for 'projectName'
 *      link: // value for 'link'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditProjMutation(baseOptions?: Apollo.MutationHookOptions<EditProjMutation, EditProjMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProjMutation, EditProjMutationVariables>(EditProjDocument, options);
      }
export type EditProjMutationHookResult = ReturnType<typeof useEditProjMutation>;
export type EditProjMutationResult = Apollo.MutationResult<EditProjMutation>;
export type EditProjMutationOptions = Apollo.BaseMutationOptions<EditProjMutation, EditProjMutationVariables>;
export const GetImageDocument = gql`
    query getImage($token: String) {
  getVisitByUser(token: $token) {
    id
    photoDescr
    photoSet {
      edges {
        node {
          id
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetImageQuery__
 *
 * To run a query within a React component, call `useGetImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImageQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetImageQuery(baseOptions?: Apollo.QueryHookOptions<GetImageQuery, GetImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, options);
      }
export function useGetImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImageQuery, GetImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, options);
        }
export type GetImageQueryHookResult = ReturnType<typeof useGetImageQuery>;
export type GetImageLazyQueryHookResult = ReturnType<typeof useGetImageLazyQuery>;
export type GetImageQueryResult = Apollo.QueryResult<GetImageQuery, GetImageQueryVariables>;
export const AddImgDocument = gql`
    mutation addImg($card_id: ID, $image: Upload) {
  addPhoto(cardId: $card_id, photo: $image) {
    photo {
      id
      url
    }
  }
}
    `;
export type AddImgMutationFn = Apollo.MutationFunction<AddImgMutation, AddImgMutationVariables>;

/**
 * __useAddImgMutation__
 *
 * To run a mutation, you first call `useAddImgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImgMutation, { data, loading, error }] = useAddImgMutation({
 *   variables: {
 *      card_id: // value for 'card_id'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useAddImgMutation(baseOptions?: Apollo.MutationHookOptions<AddImgMutation, AddImgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddImgMutation, AddImgMutationVariables>(AddImgDocument, options);
      }
export type AddImgMutationHookResult = ReturnType<typeof useAddImgMutation>;
export type AddImgMutationResult = Apollo.MutationResult<AddImgMutation>;
export type AddImgMutationOptions = Apollo.BaseMutationOptions<AddImgMutation, AddImgMutationVariables>;
export const DeleteImgDocument = gql`
    mutation deleteImg($img_id: ID) {
  removePhoto(photoId: $img_id) {
    ok
  }
}
    `;
export type DeleteImgMutationFn = Apollo.MutationFunction<DeleteImgMutation, DeleteImgMutationVariables>;

/**
 * __useDeleteImgMutation__
 *
 * To run a mutation, you first call `useDeleteImgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImgMutation, { data, loading, error }] = useDeleteImgMutation({
 *   variables: {
 *      img_id: // value for 'img_id'
 *   },
 * });
 */
export function useDeleteImgMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImgMutation, DeleteImgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImgMutation, DeleteImgMutationVariables>(DeleteImgDocument, options);
      }
export type DeleteImgMutationHookResult = ReturnType<typeof useDeleteImgMutation>;
export type DeleteImgMutationResult = Apollo.MutationResult<DeleteImgMutation>;
export type DeleteImgMutationOptions = Apollo.BaseMutationOptions<DeleteImgMutation, DeleteImgMutationVariables>;
export const ChangeImgDocument = gql`
    mutation changeImg($new_img: Upload, $id: ID) {
  editPhoto(newPhoto: $new_img, photoId: $id) {
    newImg {
      url
    }
  }
}
    `;
export type ChangeImgMutationFn = Apollo.MutationFunction<ChangeImgMutation, ChangeImgMutationVariables>;

/**
 * __useChangeImgMutation__
 *
 * To run a mutation, you first call `useChangeImgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeImgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeImgMutation, { data, loading, error }] = useChangeImgMutation({
 *   variables: {
 *      new_img: // value for 'new_img'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangeImgMutation(baseOptions?: Apollo.MutationHookOptions<ChangeImgMutation, ChangeImgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeImgMutation, ChangeImgMutationVariables>(ChangeImgDocument, options);
      }
export type ChangeImgMutationHookResult = ReturnType<typeof useChangeImgMutation>;
export type ChangeImgMutationResult = Apollo.MutationResult<ChangeImgMutation>;
export type ChangeImgMutationOptions = Apollo.BaseMutationOptions<ChangeImgMutation, ChangeImgMutationVariables>;
export const GetGeoDocument = gql`
    query getGeo($token: String) {
  getVisitByUser(token: $token) {
    geoDescr
    id
    geopos {
      id
      lattitude
      longitude
    }
  }
}
    `;

/**
 * __useGetGeoQuery__
 *
 * To run a query within a React component, call `useGetGeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeoQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetGeoQuery(baseOptions?: Apollo.QueryHookOptions<GetGeoQuery, GetGeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoQuery, GetGeoQueryVariables>(GetGeoDocument, options);
      }
export function useGetGeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoQuery, GetGeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoQuery, GetGeoQueryVariables>(GetGeoDocument, options);
        }
export type GetGeoQueryHookResult = ReturnType<typeof useGetGeoQuery>;
export type GetGeoLazyQueryHookResult = ReturnType<typeof useGetGeoLazyQuery>;
export type GetGeoQueryResult = Apollo.QueryResult<GetGeoQuery, GetGeoQueryVariables>;
export const SetGeoDocument = gql`
    mutation setGeo($geoId: ID, $lat: Float, $long: Float) {
  setGeopos(geoposId: $geoId, lat: $lat, long: $long) {
    ok
  }
}
    `;
export type SetGeoMutationFn = Apollo.MutationFunction<SetGeoMutation, SetGeoMutationVariables>;

/**
 * __useSetGeoMutation__
 *
 * To run a mutation, you first call `useSetGeoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetGeoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setGeoMutation, { data, loading, error }] = useSetGeoMutation({
 *   variables: {
 *      geoId: // value for 'geoId'
 *      lat: // value for 'lat'
 *      long: // value for 'long'
 *   },
 * });
 */
export function useSetGeoMutation(baseOptions?: Apollo.MutationHookOptions<SetGeoMutation, SetGeoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetGeoMutation, SetGeoMutationVariables>(SetGeoDocument, options);
      }
export type SetGeoMutationHookResult = ReturnType<typeof useSetGeoMutation>;
export type SetGeoMutationResult = Apollo.MutationResult<SetGeoMutation>;
export type SetGeoMutationOptions = Apollo.BaseMutationOptions<SetGeoMutation, SetGeoMutationVariables>;
export const ChangeProjectDescrDocument = gql`
    mutation changeProjectDescr($card_id: ID, $proj_descr: String) {
  changeNames(cardId: $card_id, projectsName: $proj_descr) {
    ok
  }
}
    `;
export type ChangeProjectDescrMutationFn = Apollo.MutationFunction<ChangeProjectDescrMutation, ChangeProjectDescrMutationVariables>;

/**
 * __useChangeProjectDescrMutation__
 *
 * To run a mutation, you first call `useChangeProjectDescrMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProjectDescrMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProjectDescrMutation, { data, loading, error }] = useChangeProjectDescrMutation({
 *   variables: {
 *      card_id: // value for 'card_id'
 *      proj_descr: // value for 'proj_descr'
 *   },
 * });
 */
export function useChangeProjectDescrMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProjectDescrMutation, ChangeProjectDescrMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProjectDescrMutation, ChangeProjectDescrMutationVariables>(ChangeProjectDescrDocument, options);
      }
export type ChangeProjectDescrMutationHookResult = ReturnType<typeof useChangeProjectDescrMutation>;
export type ChangeProjectDescrMutationResult = Apollo.MutationResult<ChangeProjectDescrMutation>;
export type ChangeProjectDescrMutationOptions = Apollo.BaseMutationOptions<ChangeProjectDescrMutation, ChangeProjectDescrMutationVariables>;
export const ChangeImageDescrDocument = gql`
    mutation changeImageDescr($card_id: ID, $image_descr: String) {
  changeNames(cardId: $card_id, photoName: $image_descr) {
    ok
  }
}
    `;
export type ChangeImageDescrMutationFn = Apollo.MutationFunction<ChangeImageDescrMutation, ChangeImageDescrMutationVariables>;

/**
 * __useChangeImageDescrMutation__
 *
 * To run a mutation, you first call `useChangeImageDescrMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeImageDescrMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeImageDescrMutation, { data, loading, error }] = useChangeImageDescrMutation({
 *   variables: {
 *      card_id: // value for 'card_id'
 *      image_descr: // value for 'image_descr'
 *   },
 * });
 */
export function useChangeImageDescrMutation(baseOptions?: Apollo.MutationHookOptions<ChangeImageDescrMutation, ChangeImageDescrMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeImageDescrMutation, ChangeImageDescrMutationVariables>(ChangeImageDescrDocument, options);
      }
export type ChangeImageDescrMutationHookResult = ReturnType<typeof useChangeImageDescrMutation>;
export type ChangeImageDescrMutationResult = Apollo.MutationResult<ChangeImageDescrMutation>;
export type ChangeImageDescrMutationOptions = Apollo.BaseMutationOptions<ChangeImageDescrMutation, ChangeImageDescrMutationVariables>;
export const ChangeGeoDescrDocument = gql`
    mutation changeGeoDescr($card_id: ID, $geo_descr: String) {
  changeNames(cardId: $card_id, geoName: $geo_descr) {
    ok
  }
}
    `;
export type ChangeGeoDescrMutationFn = Apollo.MutationFunction<ChangeGeoDescrMutation, ChangeGeoDescrMutationVariables>;

/**
 * __useChangeGeoDescrMutation__
 *
 * To run a mutation, you first call `useChangeGeoDescrMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeGeoDescrMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeGeoDescrMutation, { data, loading, error }] = useChangeGeoDescrMutation({
 *   variables: {
 *      card_id: // value for 'card_id'
 *      geo_descr: // value for 'geo_descr'
 *   },
 * });
 */
export function useChangeGeoDescrMutation(baseOptions?: Apollo.MutationHookOptions<ChangeGeoDescrMutation, ChangeGeoDescrMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeGeoDescrMutation, ChangeGeoDescrMutationVariables>(ChangeGeoDescrDocument, options);
      }
export type ChangeGeoDescrMutationHookResult = ReturnType<typeof useChangeGeoDescrMutation>;
export type ChangeGeoDescrMutationResult = Apollo.MutationResult<ChangeGeoDescrMutation>;
export type ChangeGeoDescrMutationOptions = Apollo.BaseMutationOptions<ChangeGeoDescrMutation, ChangeGeoDescrMutationVariables>;
export const ChangeStateDocument = gql`
    mutation changeState($token: String, $state: String) {
  changeTheme(token: $token, theme: $state) {
    ok
  }
}
    `;
export type ChangeStateMutationFn = Apollo.MutationFunction<ChangeStateMutation, ChangeStateMutationVariables>;

/**
 * __useChangeStateMutation__
 *
 * To run a mutation, you first call `useChangeStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStateMutation, { data, loading, error }] = useChangeStateMutation({
 *   variables: {
 *      token: // value for 'token'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useChangeStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeStateMutation, ChangeStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeStateMutation, ChangeStateMutationVariables>(ChangeStateDocument, options);
      }
export type ChangeStateMutationHookResult = ReturnType<typeof useChangeStateMutation>;
export type ChangeStateMutationResult = Apollo.MutationResult<ChangeStateMutation>;
export type ChangeStateMutationOptions = Apollo.BaseMutationOptions<ChangeStateMutation, ChangeStateMutationVariables>;
export const GetStateDocument = gql`
    query getState($token: String) {
  getVisitByUser(token: $token) {
    theme
  }
}
    `;

/**
 * __useGetStateQuery__
 *
 * To run a query within a React component, call `useGetStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStateQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetStateQuery(baseOptions?: Apollo.QueryHookOptions<GetStateQuery, GetStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStateQuery, GetStateQueryVariables>(GetStateDocument, options);
      }
export function useGetStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStateQuery, GetStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStateQuery, GetStateQueryVariables>(GetStateDocument, options);
        }
export type GetStateQueryHookResult = ReturnType<typeof useGetStateQuery>;
export type GetStateLazyQueryHookResult = ReturnType<typeof useGetStateLazyQuery>;
export type GetStateQueryResult = Apollo.QueryResult<GetStateQuery, GetStateQueryVariables>;
export type CreateUserMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: Maybe<{ __typename?: 'CreateUser', ok?: Maybe<boolean> }> };

export type GetTokenMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type GetTokenMutation = { __typename?: 'Mutation', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token: string }> };

export type SetVisitProfileMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  positionInCompany?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  secondDescr?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}>;


export type SetVisitProfileMutation = { __typename?: 'Mutation', changeVisitCardProfile?: Maybe<{ __typename?: 'ChangeVisitCardProfile', ok?: Maybe<boolean> }> };

export type GetVisitQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetVisitQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, name?: Maybe<string>, midname: string, surname: string, positionInCompany?: Maybe<string>, description?: Maybe<string>, imageUrl?: Maybe<string>, secondDescr?: Maybe<string>, contacts?: Maybe<{ __typename?: 'ContactsType', phone?: Maybe<string>, id: string, website?: Maybe<string>, tgLink?: Maybe<string>, whatsappLink?: Maybe<string>, instLink?: Maybe<string>, vkLink?: Maybe<string>, facebookLink?: Maybe<string>, twitterLink?: Maybe<string> }>, projectSet: { __typename?: 'ProjectTypeConnection', edges: Array<Maybe<{ __typename?: 'ProjectTypeEdge', node?: Maybe<{ __typename?: 'ProjectType', id: string }> }>> }, photoSet: { __typename?: 'PhotoTypeConnection', edges: Array<Maybe<{ __typename?: 'PhotoTypeEdge', node?: Maybe<{ __typename?: 'PhotoType', id: string }> }>> }, geopos?: Maybe<{ __typename?: 'GeoPosType', lattitude?: Maybe<number>, longitude?: Maybe<number> }> }> };

export type GetVisitByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetVisitByIdQuery = { __typename?: 'Query', visit?: Maybe<{ __typename?: 'VisitCardType', id: string, name?: Maybe<string>, midname: string, surname: string, positionInCompany?: Maybe<string>, description?: Maybe<string>, imageUrl?: Maybe<string>, secondDescr?: Maybe<string>, geoDescr: string, photoDescr: string, projectDescr: string, theme: string, contacts?: Maybe<{ __typename?: 'ContactsType', phone?: Maybe<string>, id: string, website?: Maybe<string>, tgLink?: Maybe<string>, whatsappLink?: Maybe<string>, instLink?: Maybe<string>, vkLink?: Maybe<string>, facebookLink?: Maybe<string>, twitterLink?: Maybe<string> }>, projectSet: { __typename?: 'ProjectTypeConnection', edges: Array<Maybe<{ __typename?: 'ProjectTypeEdge', node?: Maybe<{ __typename?: 'ProjectType', id: string, name?: Maybe<string>, link?: Maybe<string> }> }>> }, photoSet: { __typename?: 'PhotoTypeConnection', edges: Array<Maybe<{ __typename?: 'PhotoTypeEdge', node?: Maybe<{ __typename?: 'PhotoType', id: string, url?: Maybe<string> }> }>> }, geopos?: Maybe<{ __typename?: 'GeoPosType', lattitude?: Maybe<number>, longitude?: Maybe<number> }> }> };

export type ChangeContactsMutationVariables = Exact<{
  contacts_id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  tgLink?: Maybe<Scalars['String']>;
  whatsappLink?: Maybe<Scalars['String']>;
  instLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
}>;


export type ChangeContactsMutation = { __typename?: 'Mutation', changeContacts?: Maybe<{ __typename?: 'ChangeContacts', ok?: Maybe<boolean> }> };

export type AddProjectMutationVariables = Exact<{
  projectName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject?: Maybe<{ __typename?: 'AddProject', project?: Maybe<{ __typename?: 'ProjectType', id: string }> }> };

export type RemoveProjectMutationVariables = Exact<{
  projectId: Scalars['ID'];
}>;


export type RemoveProjectMutation = { __typename?: 'Mutation', removeProject?: Maybe<{ __typename?: 'RemoveProject', ok?: Maybe<boolean> }> };

export type GetVisitIdQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetVisitIdQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string }> };

export type GetAvaQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetAvaQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', imageUrl?: Maybe<string>, id: string }> };

export type SetAvaMutationVariables = Exact<{
  ava: Scalars['Upload'];
  id?: Maybe<Scalars['ID']>;
}>;


export type SetAvaMutation = { __typename?: 'Mutation', changeVisitCardProfilePhoto?: Maybe<{ __typename?: 'ChangeVisitCardProfilePhoto', newPath?: Maybe<string> }> };

export type GetCredsQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetCredsQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, name?: Maybe<string>, surname: string, midname: string }> };

export type GetPosQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetPosQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, positionInCompany?: Maybe<string> }> };

export type GetDescrQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetDescrQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, description?: Maybe<string> }> };

export type GetContactsQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetContactsQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', contacts?: Maybe<{ __typename?: 'ContactsType', id: string, facebookLink?: Maybe<string>, vkLink?: Maybe<string>, website?: Maybe<string>, whatsappLink?: Maybe<string>, twitterLink?: Maybe<string>, tgLink?: Maybe<string>, phone?: Maybe<string>, instLink?: Maybe<string> }> }> };

export type GetSecDescrQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetSecDescrQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', secondDescr?: Maybe<string>, id: string }> };

export type GetProjectsQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, projectDescr: string, projectSet: { __typename?: 'ProjectTypeConnection', edges: Array<Maybe<{ __typename?: 'ProjectTypeEdge', node?: Maybe<{ __typename?: 'ProjectType', name?: Maybe<string>, link?: Maybe<string>, id: string }> }>> } }> };

export type EditProjMutationVariables = Exact<{
  projectName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}>;


export type EditProjMutation = { __typename?: 'Mutation', editProject?: Maybe<{ __typename?: 'EditProject', ok?: Maybe<boolean> }> };

export type GetImageQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetImageQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, photoDescr: string, photoSet: { __typename?: 'PhotoTypeConnection', edges: Array<Maybe<{ __typename?: 'PhotoTypeEdge', node?: Maybe<{ __typename?: 'PhotoType', id: string, url?: Maybe<string> }> }>> } }> };

export type AddImgMutationVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['Upload']>;
}>;


export type AddImgMutation = { __typename?: 'Mutation', addPhoto?: Maybe<{ __typename?: 'AddPhoto', photo?: Maybe<{ __typename?: 'PhotoType', id: string, url?: Maybe<string> }> }> };

export type DeleteImgMutationVariables = Exact<{
  img_id?: Maybe<Scalars['ID']>;
}>;


export type DeleteImgMutation = { __typename?: 'Mutation', removePhoto?: Maybe<{ __typename?: 'RemovePhoto', ok?: Maybe<boolean> }> };

export type ChangeImgMutationVariables = Exact<{
  new_img?: Maybe<Scalars['Upload']>;
  id?: Maybe<Scalars['ID']>;
}>;


export type ChangeImgMutation = { __typename?: 'Mutation', editPhoto?: Maybe<{ __typename?: 'PhotoEdit', newImg?: Maybe<{ __typename?: 'PhotoType', url?: Maybe<string> }> }> };

export type GetGeoQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetGeoQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', geoDescr: string, id: string, geopos?: Maybe<{ __typename?: 'GeoPosType', id: string, lattitude?: Maybe<number>, longitude?: Maybe<number> }> }> };

export type SetGeoMutationVariables = Exact<{
  geoId?: Maybe<Scalars['ID']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
}>;


export type SetGeoMutation = { __typename?: 'Mutation', setGeopos?: Maybe<{ __typename?: 'SetGeoPos', ok?: Maybe<boolean> }> };

export type ChangeProjectDescrMutationVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
  proj_descr?: Maybe<Scalars['String']>;
}>;


export type ChangeProjectDescrMutation = { __typename?: 'Mutation', changeNames?: Maybe<{ __typename?: 'ChangeNames', ok?: Maybe<boolean> }> };

export type ChangeImageDescrMutationVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
  image_descr?: Maybe<Scalars['String']>;
}>;


export type ChangeImageDescrMutation = { __typename?: 'Mutation', changeNames?: Maybe<{ __typename?: 'ChangeNames', ok?: Maybe<boolean> }> };

export type ChangeGeoDescrMutationVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
  geo_descr?: Maybe<Scalars['String']>;
}>;


export type ChangeGeoDescrMutation = { __typename?: 'Mutation', changeNames?: Maybe<{ __typename?: 'ChangeNames', ok?: Maybe<boolean> }> };

export type ChangeStateMutationVariables = Exact<{
  token?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}>;


export type ChangeStateMutation = { __typename?: 'Mutation', changeTheme?: Maybe<{ __typename?: 'ChangeTheme', ok?: Maybe<boolean> }> };

export type GetStateQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetStateQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', theme: string }> };
