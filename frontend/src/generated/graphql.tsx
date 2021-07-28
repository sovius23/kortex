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
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
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

export type AddBlock = {
  __typename?: 'AddBlock';
  block?: Maybe<BlockType>;
};

export type AddPhoto = {
  __typename?: 'AddPhoto';
  photo?: Maybe<PhotoType>;
};

export type AddProject = {
  __typename?: 'AddProject';
  project?: Maybe<ProjectType>;
};

export type AddUserToCard = {
  __typename?: 'AddUserToCard';
  ok?: Maybe<Scalars['Boolean']>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type BlockType = Node & {
  __typename?: 'BlockType';
  /** The ID of the object. */
  id: Scalars['ID'];
  descr: Scalars['String'];
  name: Scalars['String'];
  card?: Maybe<VisitCardType>;
  mainPart: Scalars['String'];
};

export type BlockTypeConnection = {
  __typename?: 'BlockTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BlockTypeEdge>>;
};

/** A Relay edge containing a `BlockType` and its cursor. */
export type BlockTypeEdge = {
  __typename?: 'BlockTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<BlockType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ChangeBlock = {
  __typename?: 'ChangeBlock';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeBlockDescr = {
  __typename?: 'ChangeBlockDescr';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeContacts = {
  __typename?: 'ChangeContacts';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeGeopos = {
  __typename?: 'ChangeGeopos';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeLogoCord = {
  __typename?: 'ChangeLogoCord';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeNames = {
  __typename?: 'ChangeNames';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangePassword = {
  __typename?: 'ChangePassword';
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


/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
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

export type IfUserAdmin = {
  __typename?: 'IfUserAdmin';
  isAdmin?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSet>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Remove user secondary email.
   *
   * Require password confirmation.
   */
  removeSecondaryEmail?: Maybe<RemoveSecondaryEmail>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
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
  changeFullPhoto?: Maybe<UpdateFullPhoto>;
  changeLogoCords?: Maybe<ChangeLogoCord>;
  updateVerbId?: Maybe<UpdateVerbId>;
  createBlock?: Maybe<AddBlock>;
  updateBlock?: Maybe<ChangeBlock>;
  deleteBlock?: Maybe<RemoveBlock>;
  changeBlockDescr?: Maybe<ChangeBlockDescr>;
  isUserAdmin?: Maybe<IfUserAdmin>;
  changePassword?: Maybe<ChangePassword>;
  addUserToCard?: Maybe<AddUserToCard>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationPasswordSetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
  oldPassword: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationSendSecondaryEmailActivationArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifySecondaryEmailArgs = {
  token: Scalars['String'];
};


export type MutationSwapEmailsArgs = {
  password: Scalars['String'];
};


export type MutationRemoveSecondaryEmailArgs = {
  password: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
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


export type MutationChangeFullPhotoArgs = {
  id?: Maybe<Scalars['ID']>;
  photo?: Maybe<Scalars['Upload']>;
};


export type MutationChangeLogoCordsArgs = {
  cardId?: Maybe<Scalars['ID']>;
  xCord?: Maybe<Scalars['Float']>;
  yCord?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};


export type MutationUpdateVerbIdArgs = {
  newId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateBlockArgs = {
  cardId?: Maybe<Scalars['ID']>;
  descr?: Maybe<Scalars['String']>;
  mainPart?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateBlockArgs = {
  blockId?: Maybe<Scalars['ID']>;
  descr?: Maybe<Scalars['String']>;
  mainPart?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteBlockArgs = {
  blockId?: Maybe<Scalars['ID']>;
};


export type MutationChangeBlockDescrArgs = {
  cardId?: Maybe<Scalars['ID']>;
  newDesc?: Maybe<Scalars['String']>;
};


export type MutationIsUserAdminArgs = {
  cardId?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationChangePasswordArgs = {
  newPassword?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationAddUserToCardArgs = {
  cardId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
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

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSet = {
  __typename?: 'PasswordSet';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
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
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
  visit?: Maybe<VisitCardType>;
  visits?: Maybe<Array<Maybe<VisitCardType>>>;
  getVisitByUser?: Maybe<VisitCardType>;
  isCardEmpty?: Maybe<Scalars['Boolean']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};


export type QueryVisitArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetVisitByUserArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryIsCardEmptyArgs = {
  cardId?: Maybe<Scalars['ID']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  token?: Maybe<Scalars['String']>;
};

export type RemoveBlock = {
  __typename?: 'RemoveBlock';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RemovePhoto = {
  __typename?: 'RemovePhoto';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RemoveProject = {
  __typename?: 'RemoveProject';
  ok?: Maybe<Scalars['Boolean']>;
};

/**
 * Remove user secondary email.
 *
 * Require password confirmation.
 */
export type RemoveSecondaryEmail = {
  __typename?: 'RemoveSecondaryEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type SetGeoPos = {
  __typename?: 'SetGeoPos';
  ok?: Maybe<Scalars['Boolean']>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type UpdateFullPhoto = {
  __typename?: 'UpdateFullPhoto';
  newUrl?: Maybe<Scalars['String']>;
};

export type UpdateVerbId = {
  __typename?: 'UpdateVerbId';
  ok?: Maybe<Scalars['Boolean']>;
};


export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  visitcardSet: VisitCardTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeVisitcardSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type VisitCardType = Node & {
  __typename?: 'VisitCardType';
  /** The ID of the object. */
  id: Scalars['ID'];
  ProfilePhoto?: Maybe<Scalars['String']>;
  fullProfilePhoto?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  midname: Scalars['String'];
  positionInCompany?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  secondDescr?: Maybe<Scalars['String']>;
  xLogo: Scalars['Float'];
  yLogo: Scalars['Float'];
  zoomLogo: Scalars['Float'];
  projectDescr: Scalars['String'];
  geoDescr: Scalars['String'];
  photoDescr: Scalars['String'];
  theme: Scalars['String'];
  verbId?: Maybe<Scalars['String']>;
  blockDescr: Scalars['String'];
  contacts?: Maybe<ContactsType>;
  projectSet: ProjectTypeConnection;
  photoSet: PhotoTypeConnection;
  geopos?: Maybe<GeoPosType>;
  blockSet: BlockTypeConnection;
  imageUrl?: Maybe<Scalars['String']>;
  fullImgUrl?: Maybe<Scalars['String']>;
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


export type VisitCardTypeBlockSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type VisitCardTypeConnection = {
  __typename?: 'VisitCardTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VisitCardTypeEdge>>;
};

/** A Relay edge containing a `VisitCardType` and its cursor. */
export type VisitCardTypeEdge = {
  __typename?: 'VisitCardTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<VisitCardType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
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
    query getVisitById($id: String!) {
  visit(id: $id) {
    id
    blockDescr
    name
    midname
    surname
    positionInCompany
    description
    fullImgUrl
    zoomLogo
    xLogo
    yLogo
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
    blockSet {
      edges {
        node {
          id
          name
          descr
          mainPart
        }
      }
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
    fullImgUrl
    xLogo
    yLogo
    zoomLogo
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
    id
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
export const SetFullPhotoDocument = gql`
    mutation setFullPhoto($id: ID, $photo: Upload) {
  changeFullPhoto(id: $id, photo: $photo) {
    newUrl
  }
}
    `;
export type SetFullPhotoMutationFn = Apollo.MutationFunction<SetFullPhotoMutation, SetFullPhotoMutationVariables>;

/**
 * __useSetFullPhotoMutation__
 *
 * To run a mutation, you first call `useSetFullPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFullPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFullPhotoMutation, { data, loading, error }] = useSetFullPhotoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      photo: // value for 'photo'
 *   },
 * });
 */
export function useSetFullPhotoMutation(baseOptions?: Apollo.MutationHookOptions<SetFullPhotoMutation, SetFullPhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetFullPhotoMutation, SetFullPhotoMutationVariables>(SetFullPhotoDocument, options);
      }
export type SetFullPhotoMutationHookResult = ReturnType<typeof useSetFullPhotoMutation>;
export type SetFullPhotoMutationResult = Apollo.MutationResult<SetFullPhotoMutation>;
export type SetFullPhotoMutationOptions = Apollo.BaseMutationOptions<SetFullPhotoMutation, SetFullPhotoMutationVariables>;
export const GetIdDocument = gql`
    query getId($token: String) {
  getVisitByUser(token: $token) {
    id
  }
}
    `;

/**
 * __useGetIdQuery__
 *
 * To run a query within a React component, call `useGetIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetIdQuery(baseOptions?: Apollo.QueryHookOptions<GetIdQuery, GetIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIdQuery, GetIdQueryVariables>(GetIdDocument, options);
      }
export function useGetIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIdQuery, GetIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIdQuery, GetIdQueryVariables>(GetIdDocument, options);
        }
export type GetIdQueryHookResult = ReturnType<typeof useGetIdQuery>;
export type GetIdLazyQueryHookResult = ReturnType<typeof useGetIdLazyQuery>;
export type GetIdQueryResult = Apollo.QueryResult<GetIdQuery, GetIdQueryVariables>;
export const ChangeLogoCordsDocument = gql`
    mutation changeLogoCords($card_id: ID, $y: Float, $x: Float, $zoom: Float) {
  changeLogoCords(xCord: $x, yCord: $y, cardId: $card_id, zoom: $zoom) {
    ok
  }
}
    `;
export type ChangeLogoCordsMutationFn = Apollo.MutationFunction<ChangeLogoCordsMutation, ChangeLogoCordsMutationVariables>;

/**
 * __useChangeLogoCordsMutation__
 *
 * To run a mutation, you first call `useChangeLogoCordsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeLogoCordsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeLogoCordsMutation, { data, loading, error }] = useChangeLogoCordsMutation({
 *   variables: {
 *      card_id: // value for 'card_id'
 *      y: // value for 'y'
 *      x: // value for 'x'
 *      zoom: // value for 'zoom'
 *   },
 * });
 */
export function useChangeLogoCordsMutation(baseOptions?: Apollo.MutationHookOptions<ChangeLogoCordsMutation, ChangeLogoCordsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeLogoCordsMutation, ChangeLogoCordsMutationVariables>(ChangeLogoCordsDocument, options);
      }
export type ChangeLogoCordsMutationHookResult = ReturnType<typeof useChangeLogoCordsMutation>;
export type ChangeLogoCordsMutationResult = Apollo.MutationResult<ChangeLogoCordsMutation>;
export type ChangeLogoCordsMutationOptions = Apollo.BaseMutationOptions<ChangeLogoCordsMutation, ChangeLogoCordsMutationVariables>;
export const VerifyDocument = gql`
    mutation verify($token: String!) {
  verifyAccount(token: $token) {
    errors
  }
}
    `;
export type VerifyMutationFn = Apollo.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, options);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $password: String!, $password2: String!) {
  register(
    email: $email
    password1: $password
    username: $email
    password2: $password2
  ) {
    token
    errors
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      password2: // value for 'password2'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SignDocument = gql`
    mutation sign($email: String, $password: String!) {
  tokenAuth(password: $password, username: $email) {
    token
    errors
    user {
      verified
    }
  }
}
    `;
export type SignMutationFn = Apollo.MutationFunction<SignMutation, SignMutationVariables>;

/**
 * __useSignMutation__
 *
 * To run a mutation, you first call `useSignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signMutation, { data, loading, error }] = useSignMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignMutation(baseOptions?: Apollo.MutationHookOptions<SignMutation, SignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignMutation, SignMutationVariables>(SignDocument, options);
      }
export type SignMutationHookResult = ReturnType<typeof useSignMutation>;
export type SignMutationResult = Apollo.MutationResult<SignMutation>;
export type SignMutationOptions = Apollo.BaseMutationOptions<SignMutation, SignMutationVariables>;
export const AddUserToCardDocument = gql`
    mutation addUserToCard($token: String, $card_id: String) {
  addUserToCard(cardId: $card_id, token: $token) {
    ok
  }
}
    `;
export type AddUserToCardMutationFn = Apollo.MutationFunction<AddUserToCardMutation, AddUserToCardMutationVariables>;

/**
 * __useAddUserToCardMutation__
 *
 * To run a mutation, you first call `useAddUserToCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserToCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserToCardMutation, { data, loading, error }] = useAddUserToCardMutation({
 *   variables: {
 *      token: // value for 'token'
 *      card_id: // value for 'card_id'
 *   },
 * });
 */
export function useAddUserToCardMutation(baseOptions?: Apollo.MutationHookOptions<AddUserToCardMutation, AddUserToCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserToCardMutation, AddUserToCardMutationVariables>(AddUserToCardDocument, options);
      }
export type AddUserToCardMutationHookResult = ReturnType<typeof useAddUserToCardMutation>;
export type AddUserToCardMutationResult = Apollo.MutationResult<AddUserToCardMutation>;
export type AddUserToCardMutationOptions = Apollo.BaseMutationOptions<AddUserToCardMutation, AddUserToCardMutationVariables>;
export const GetVerbIdDocument = gql`
    query getVerbId($token: String) {
  getVisitByUser(token: $token) {
    id
    verbId
  }
}
    `;

/**
 * __useGetVerbIdQuery__
 *
 * To run a query within a React component, call `useGetVerbIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVerbIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVerbIdQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetVerbIdQuery(baseOptions?: Apollo.QueryHookOptions<GetVerbIdQuery, GetVerbIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVerbIdQuery, GetVerbIdQueryVariables>(GetVerbIdDocument, options);
      }
export function useGetVerbIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVerbIdQuery, GetVerbIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVerbIdQuery, GetVerbIdQueryVariables>(GetVerbIdDocument, options);
        }
export type GetVerbIdQueryHookResult = ReturnType<typeof useGetVerbIdQuery>;
export type GetVerbIdLazyQueryHookResult = ReturnType<typeof useGetVerbIdLazyQuery>;
export type GetVerbIdQueryResult = Apollo.QueryResult<GetVerbIdQuery, GetVerbIdQueryVariables>;
export const ChangeVerbIdDocument = gql`
    mutation changeVerbId($id: String, $token: String) {
  updateVerbId(token: $token, newId: $id) {
    ok
  }
}
    `;
export type ChangeVerbIdMutationFn = Apollo.MutationFunction<ChangeVerbIdMutation, ChangeVerbIdMutationVariables>;

/**
 * __useChangeVerbIdMutation__
 *
 * To run a mutation, you first call `useChangeVerbIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeVerbIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeVerbIdMutation, { data, loading, error }] = useChangeVerbIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangeVerbIdMutation(baseOptions?: Apollo.MutationHookOptions<ChangeVerbIdMutation, ChangeVerbIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeVerbIdMutation, ChangeVerbIdMutationVariables>(ChangeVerbIdDocument, options);
      }
export type ChangeVerbIdMutationHookResult = ReturnType<typeof useChangeVerbIdMutation>;
export type ChangeVerbIdMutationResult = Apollo.MutationResult<ChangeVerbIdMutation>;
export type ChangeVerbIdMutationOptions = Apollo.BaseMutationOptions<ChangeVerbIdMutation, ChangeVerbIdMutationVariables>;
export const CreateBlockDocument = gql`
    mutation createBlock($name: String, $descr: String, $cardId: ID, $main_part: String) {
  createBlock(descr: $descr, cardId: $cardId, name: $name, mainPart: $main_part) {
    block {
      id
    }
  }
}
    `;
export type CreateBlockMutationFn = Apollo.MutationFunction<CreateBlockMutation, CreateBlockMutationVariables>;

/**
 * __useCreateBlockMutation__
 *
 * To run a mutation, you first call `useCreateBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlockMutation, { data, loading, error }] = useCreateBlockMutation({
 *   variables: {
 *      name: // value for 'name'
 *      descr: // value for 'descr'
 *      cardId: // value for 'cardId'
 *      main_part: // value for 'main_part'
 *   },
 * });
 */
export function useCreateBlockMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlockMutation, CreateBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlockMutation, CreateBlockMutationVariables>(CreateBlockDocument, options);
      }
export type CreateBlockMutationHookResult = ReturnType<typeof useCreateBlockMutation>;
export type CreateBlockMutationResult = Apollo.MutationResult<CreateBlockMutation>;
export type CreateBlockMutationOptions = Apollo.BaseMutationOptions<CreateBlockMutation, CreateBlockMutationVariables>;
export const GetBlocksDocument = gql`
    query getBlocks($token: String) {
  getVisitByUser(token: $token) {
    id
    blockDescr
    blockSet {
      edges {
        node {
          name
          id
          descr
          mainPart
        }
      }
    }
  }
}
    `;

/**
 * __useGetBlocksQuery__
 *
 * To run a query within a React component, call `useGetBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlocksQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetBlocksQuery(baseOptions?: Apollo.QueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlocksQuery, GetBlocksQueryVariables>(GetBlocksDocument, options);
      }
export function useGetBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlocksQuery, GetBlocksQueryVariables>(GetBlocksDocument, options);
        }
export type GetBlocksQueryHookResult = ReturnType<typeof useGetBlocksQuery>;
export type GetBlocksLazyQueryHookResult = ReturnType<typeof useGetBlocksLazyQuery>;
export type GetBlocksQueryResult = Apollo.QueryResult<GetBlocksQuery, GetBlocksQueryVariables>;
export const DeleteBlockDocument = gql`
    mutation deleteBlock($blockId: ID) {
  deleteBlock(blockId: $blockId) {
    ok
  }
}
    `;
export type DeleteBlockMutationFn = Apollo.MutationFunction<DeleteBlockMutation, DeleteBlockMutationVariables>;

/**
 * __useDeleteBlockMutation__
 *
 * To run a mutation, you first call `useDeleteBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlockMutation, { data, loading, error }] = useDeleteBlockMutation({
 *   variables: {
 *      blockId: // value for 'blockId'
 *   },
 * });
 */
export function useDeleteBlockMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlockMutation, DeleteBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlockMutation, DeleteBlockMutationVariables>(DeleteBlockDocument, options);
      }
export type DeleteBlockMutationHookResult = ReturnType<typeof useDeleteBlockMutation>;
export type DeleteBlockMutationResult = Apollo.MutationResult<DeleteBlockMutation>;
export type DeleteBlockMutationOptions = Apollo.BaseMutationOptions<DeleteBlockMutation, DeleteBlockMutationVariables>;
export const ChangeBlockDocument = gql`
    mutation changeBlock($blockId: ID, $name: String, $descr: String, $main_part: String) {
  updateBlock(name: $name, descr: $descr, blockId: $blockId, mainPart: $main_part) {
    ok
  }
}
    `;
export type ChangeBlockMutationFn = Apollo.MutationFunction<ChangeBlockMutation, ChangeBlockMutationVariables>;

/**
 * __useChangeBlockMutation__
 *
 * To run a mutation, you first call `useChangeBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBlockMutation, { data, loading, error }] = useChangeBlockMutation({
 *   variables: {
 *      blockId: // value for 'blockId'
 *      name: // value for 'name'
 *      descr: // value for 'descr'
 *      main_part: // value for 'main_part'
 *   },
 * });
 */
export function useChangeBlockMutation(baseOptions?: Apollo.MutationHookOptions<ChangeBlockMutation, ChangeBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeBlockMutation, ChangeBlockMutationVariables>(ChangeBlockDocument, options);
      }
export type ChangeBlockMutationHookResult = ReturnType<typeof useChangeBlockMutation>;
export type ChangeBlockMutationResult = Apollo.MutationResult<ChangeBlockMutation>;
export type ChangeBlockMutationOptions = Apollo.BaseMutationOptions<ChangeBlockMutation, ChangeBlockMutationVariables>;
export const IsUserAdminDocument = gql`
    mutation isUserAdmin($token: String, $cardId: ID) {
  isUserAdmin(cardId: $cardId, token: $token) {
    isAdmin
  }
}
    `;
export type IsUserAdminMutationFn = Apollo.MutationFunction<IsUserAdminMutation, IsUserAdminMutationVariables>;

/**
 * __useIsUserAdminMutation__
 *
 * To run a mutation, you first call `useIsUserAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIsUserAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [isUserAdminMutation, { data, loading, error }] = useIsUserAdminMutation({
 *   variables: {
 *      token: // value for 'token'
 *      cardId: // value for 'cardId'
 *   },
 * });
 */
export function useIsUserAdminMutation(baseOptions?: Apollo.MutationHookOptions<IsUserAdminMutation, IsUserAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IsUserAdminMutation, IsUserAdminMutationVariables>(IsUserAdminDocument, options);
      }
export type IsUserAdminMutationHookResult = ReturnType<typeof useIsUserAdminMutation>;
export type IsUserAdminMutationResult = Apollo.MutationResult<IsUserAdminMutation>;
export type IsUserAdminMutationOptions = Apollo.BaseMutationOptions<IsUserAdminMutation, IsUserAdminMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($newPassword: String!, $token: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ok
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeBlockDescrDocument = gql`
    mutation changeBlockDescr($card_id: ID, $new_descr: String) {
  changeBlockDescr(cardId: $card_id, newDesc: $new_descr) {
    ok
  }
}
    `;
export type ChangeBlockDescrMutationFn = Apollo.MutationFunction<ChangeBlockDescrMutation, ChangeBlockDescrMutationVariables>;

/**
 * __useChangeBlockDescrMutation__
 *
 * To run a mutation, you first call `useChangeBlockDescrMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBlockDescrMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBlockDescrMutation, { data, loading, error }] = useChangeBlockDescrMutation({
 *   variables: {
 *      card_id: // value for 'card_id'
 *      new_descr: // value for 'new_descr'
 *   },
 * });
 */
export function useChangeBlockDescrMutation(baseOptions?: Apollo.MutationHookOptions<ChangeBlockDescrMutation, ChangeBlockDescrMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeBlockDescrMutation, ChangeBlockDescrMutationVariables>(ChangeBlockDescrDocument, options);
      }
export type ChangeBlockDescrMutationHookResult = ReturnType<typeof useChangeBlockDescrMutation>;
export type ChangeBlockDescrMutationResult = Apollo.MutationResult<ChangeBlockDescrMutation>;
export type ChangeBlockDescrMutationOptions = Apollo.BaseMutationOptions<ChangeBlockDescrMutation, ChangeBlockDescrMutationVariables>;
export const IsCardEmptyDocument = gql`
    query isCardEmpty($card_id: ID) {
  isCardEmpty(cardId: $card_id)
}
    `;

/**
 * __useIsCardEmptyQuery__
 *
 * To run a query within a React component, call `useIsCardEmptyQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsCardEmptyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsCardEmptyQuery({
 *   variables: {
 *      card_id: // value for 'card_id'
 *   },
 * });
 */
export function useIsCardEmptyQuery(baseOptions?: Apollo.QueryHookOptions<IsCardEmptyQuery, IsCardEmptyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsCardEmptyQuery, IsCardEmptyQueryVariables>(IsCardEmptyDocument, options);
      }
export function useIsCardEmptyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsCardEmptyQuery, IsCardEmptyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsCardEmptyQuery, IsCardEmptyQueryVariables>(IsCardEmptyDocument, options);
        }
export type IsCardEmptyQueryHookResult = ReturnType<typeof useIsCardEmptyQuery>;
export type IsCardEmptyLazyQueryHookResult = ReturnType<typeof useIsCardEmptyLazyQuery>;
export type IsCardEmptyQueryResult = Apollo.QueryResult<IsCardEmptyQuery, IsCardEmptyQueryVariables>;
export type CreateUserMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: Maybe<{ __typename?: 'CreateUser', ok?: Maybe<boolean> }> };

export type GetTokenMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type GetTokenMutation = { __typename?: 'Mutation', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token?: Maybe<string> }> };

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
  id: Scalars['String'];
}>;


export type GetVisitByIdQuery = { __typename?: 'Query', visit?: Maybe<{ __typename?: 'VisitCardType', id: string, blockDescr: string, name?: Maybe<string>, midname: string, surname: string, positionInCompany?: Maybe<string>, description?: Maybe<string>, fullImgUrl?: Maybe<string>, zoomLogo: number, xLogo: number, yLogo: number, secondDescr?: Maybe<string>, geoDescr: string, photoDescr: string, projectDescr: string, theme: string, contacts?: Maybe<{ __typename?: 'ContactsType', phone?: Maybe<string>, id: string, website?: Maybe<string>, tgLink?: Maybe<string>, whatsappLink?: Maybe<string>, instLink?: Maybe<string>, vkLink?: Maybe<string>, facebookLink?: Maybe<string>, twitterLink?: Maybe<string> }>, projectSet: { __typename?: 'ProjectTypeConnection', edges: Array<Maybe<{ __typename?: 'ProjectTypeEdge', node?: Maybe<{ __typename?: 'ProjectType', id: string, name?: Maybe<string>, link?: Maybe<string> }> }>> }, photoSet: { __typename?: 'PhotoTypeConnection', edges: Array<Maybe<{ __typename?: 'PhotoTypeEdge', node?: Maybe<{ __typename?: 'PhotoType', id: string, url?: Maybe<string> }> }>> }, geopos?: Maybe<{ __typename?: 'GeoPosType', lattitude?: Maybe<number>, longitude?: Maybe<number> }>, blockSet: { __typename?: 'BlockTypeConnection', edges: Array<Maybe<{ __typename?: 'BlockTypeEdge', node?: Maybe<{ __typename?: 'BlockType', id: string, name: string, descr: string, mainPart: string }> }>> } }> };

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


export type GetAvaQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', imageUrl?: Maybe<string>, id: string, fullImgUrl?: Maybe<string>, xLogo: number, yLogo: number, zoomLogo: number }> };

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


export type GetStateQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', theme: string, id: string }> };

export type SetFullPhotoMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  photo?: Maybe<Scalars['Upload']>;
}>;


export type SetFullPhotoMutation = { __typename?: 'Mutation', changeFullPhoto?: Maybe<{ __typename?: 'UpdateFullPhoto', newUrl?: Maybe<string> }> };

export type GetIdQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetIdQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string }> };

export type ChangeLogoCordsMutationVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
  y?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
}>;


export type ChangeLogoCordsMutation = { __typename?: 'Mutation', changeLogoCords?: Maybe<{ __typename?: 'ChangeLogoCord', ok?: Maybe<boolean> }> };

export type VerifyMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyMutation = { __typename?: 'Mutation', verifyAccount?: Maybe<{ __typename?: 'VerifyAccount', errors?: Maybe<any> }> };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: Maybe<{ __typename?: 'Register', token?: Maybe<string>, errors?: Maybe<any> }> };

export type SignMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type SignMutation = { __typename?: 'Mutation', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token?: Maybe<string>, errors?: Maybe<any>, user?: Maybe<{ __typename?: 'UserNode', verified?: Maybe<boolean> }> }> };

export type AddUserToCardMutationVariables = Exact<{
  token?: Maybe<Scalars['String']>;
  card_id?: Maybe<Scalars['String']>;
}>;


export type AddUserToCardMutation = { __typename?: 'Mutation', addUserToCard?: Maybe<{ __typename?: 'AddUserToCard', ok?: Maybe<boolean> }> };

export type GetVerbIdQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetVerbIdQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, verbId?: Maybe<string> }> };

export type ChangeVerbIdMutationVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
}>;


export type ChangeVerbIdMutation = { __typename?: 'Mutation', updateVerbId?: Maybe<{ __typename?: 'UpdateVerbId', ok?: Maybe<boolean> }> };

export type CreateBlockMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['ID']>;
  main_part?: Maybe<Scalars['String']>;
}>;


export type CreateBlockMutation = { __typename?: 'Mutation', createBlock?: Maybe<{ __typename?: 'AddBlock', block?: Maybe<{ __typename?: 'BlockType', id: string }> }> };

export type GetBlocksQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetBlocksQuery = { __typename?: 'Query', getVisitByUser?: Maybe<{ __typename?: 'VisitCardType', id: string, blockDescr: string, blockSet: { __typename?: 'BlockTypeConnection', edges: Array<Maybe<{ __typename?: 'BlockTypeEdge', node?: Maybe<{ __typename?: 'BlockType', name: string, id: string, descr: string, mainPart: string }> }>> } }> };

export type DeleteBlockMutationVariables = Exact<{
  blockId?: Maybe<Scalars['ID']>;
}>;


export type DeleteBlockMutation = { __typename?: 'Mutation', deleteBlock?: Maybe<{ __typename?: 'RemoveBlock', ok?: Maybe<boolean> }> };

export type ChangeBlockMutationVariables = Exact<{
  blockId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  main_part?: Maybe<Scalars['String']>;
}>;


export type ChangeBlockMutation = { __typename?: 'Mutation', updateBlock?: Maybe<{ __typename?: 'ChangeBlock', ok?: Maybe<boolean> }> };

export type IsUserAdminMutationVariables = Exact<{
  token?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['ID']>;
}>;


export type IsUserAdminMutation = { __typename?: 'Mutation', isUserAdmin?: Maybe<{ __typename?: 'IfUserAdmin', isAdmin?: Maybe<boolean> }> };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: Maybe<{ __typename?: 'ChangePassword', ok?: Maybe<boolean> }> };

export type ChangeBlockDescrMutationVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
  new_descr?: Maybe<Scalars['String']>;
}>;


export type ChangeBlockDescrMutation = { __typename?: 'Mutation', changeBlockDescr?: Maybe<{ __typename?: 'ChangeBlockDescr', ok?: Maybe<boolean> }> };

export type IsCardEmptyQueryVariables = Exact<{
  card_id?: Maybe<Scalars['ID']>;
}>;


export type IsCardEmptyQuery = { __typename?: 'Query', isCardEmpty?: Maybe<boolean> };
