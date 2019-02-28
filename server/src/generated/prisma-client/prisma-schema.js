module.exports = {
        typeDefs: /* GraphQL */ `type AggregateInfo {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateURL {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Info {
  title: String!
  oneLiner: String!
  description: String!
  stage: Int!
  private: Boolean!
}

type InfoConnection {
  pageInfo: PageInfo!
  edges: [InfoEdge]!
  aggregate: AggregateInfo!
}

input InfoCreateInput {
  title: String!
  oneLiner: String!
  description: String!
  stage: Int!
  private: Boolean
}

input InfoCreateOneInput {
  create: InfoCreateInput
}

type InfoEdge {
  node: Info!
  cursor: String!
}

enum InfoOrderByInput {
  title_ASC
  title_DESC
  oneLiner_ASC
  oneLiner_DESC
  description_ASC
  description_DESC
  stage_ASC
  stage_DESC
  private_ASC
  private_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InfoPreviousValues {
  title: String!
  oneLiner: String!
  description: String!
  stage: Int!
  private: Boolean!
}

type InfoSubscriptionPayload {
  mutation: MutationType!
  node: Info
  updatedFields: [String!]
  previousValues: InfoPreviousValues
}

input InfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InfoWhereInput
  AND: [InfoSubscriptionWhereInput!]
  OR: [InfoSubscriptionWhereInput!]
  NOT: [InfoSubscriptionWhereInput!]
}

input InfoUpdateDataInput {
  title: String
  oneLiner: String
  description: String
  stage: Int
  private: Boolean
}

input InfoUpdateManyMutationInput {
  title: String
  oneLiner: String
  description: String
  stage: Int
  private: Boolean
}

input InfoUpdateOneInput {
  create: InfoCreateInput
  update: InfoUpdateDataInput
  upsert: InfoUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input InfoUpsertNestedInput {
  update: InfoUpdateDataInput!
  create: InfoCreateInput!
}

input InfoWhereInput {
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  oneLiner: String
  oneLiner_not: String
  oneLiner_in: [String!]
  oneLiner_not_in: [String!]
  oneLiner_lt: String
  oneLiner_lte: String
  oneLiner_gt: String
  oneLiner_gte: String
  oneLiner_contains: String
  oneLiner_not_contains: String
  oneLiner_starts_with: String
  oneLiner_not_starts_with: String
  oneLiner_ends_with: String
  oneLiner_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  stage: Int
  stage_not: Int
  stage_in: [Int!]
  stage_not_in: [Int!]
  stage_lt: Int
  stage_lte: Int
  stage_gt: Int
  stage_gte: Int
  private: Boolean
  private_not: Boolean
  AND: [InfoWhereInput!]
  OR: [InfoWhereInput!]
  NOT: [InfoWhereInput!]
}

scalar Long

type Mutation {
  createInfo(data: InfoCreateInput!): Info!
  updateManyInfoes(data: InfoUpdateManyMutationInput!, where: InfoWhereInput): BatchPayload!
  deleteManyInfoes(where: InfoWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createURL(data: URLCreateInput!): URL!
  updateManyURLs(data: URLUpdateManyMutationInput!, where: URLWhereInput): BatchPayload!
  deleteManyURLs(where: URLWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  createdAt: DateTime!
  info: Info
  urls: URL
  creator: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  info: InfoCreateOneInput
  urls: URLCreateOneInput
  creator: UserCreateOneWithoutProjectsInput
  votes: VoteCreateManyWithoutProjectInput
}

input ProjectCreateManyWithoutCreatorInput {
  create: [ProjectCreateWithoutCreatorInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutVotesInput {
  create: ProjectCreateWithoutVotesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutCreatorInput {
  info: InfoCreateOneInput
  urls: URLCreateOneInput
  votes: VoteCreateManyWithoutProjectInput
}

input ProjectCreateWithoutVotesInput {
  info: InfoCreateOneInput
  urls: URLCreateOneInput
  creator: UserCreateOneWithoutProjectsInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  createdAt: DateTime!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  info: InfoUpdateOneInput
  urls: URLUpdateOneInput
  creator: UserUpdateOneWithoutProjectsInput
  votes: VoteUpdateManyWithoutProjectInput
}

input ProjectUpdateManyWithoutCreatorInput {
  create: [ProjectCreateWithoutCreatorInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutCreatorInput!]
  deleteMany: [ProjectScalarWhereInput!]
}

input ProjectUpdateOneRequiredWithoutVotesInput {
  create: ProjectCreateWithoutVotesInput
  update: ProjectUpdateWithoutVotesDataInput
  upsert: ProjectUpsertWithoutVotesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutCreatorDataInput {
  info: InfoUpdateOneInput
  urls: URLUpdateOneInput
  votes: VoteUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutVotesDataInput {
  info: InfoUpdateOneInput
  urls: URLUpdateOneInput
  creator: UserUpdateOneWithoutProjectsInput
}

input ProjectUpdateWithWhereUniqueWithoutCreatorInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutCreatorDataInput!
}

input ProjectUpsertWithoutVotesInput {
  update: ProjectUpdateWithoutVotesDataInput!
  create: ProjectCreateWithoutVotesInput!
}

input ProjectUpsertWithWhereUniqueWithoutCreatorInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutCreatorDataInput!
  create: ProjectCreateWithoutCreatorInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  info: InfoWhereInput
  urls: URLWhereInput
  creator: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  infoes(where: InfoWhereInput, orderBy: InfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Info]!
  infoesConnection(where: InfoWhereInput, orderBy: InfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InfoConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  uRLs(where: URLWhereInput, orderBy: URLOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [URL]!
  uRLsConnection(where: URLWhereInput, orderBy: URLOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): URLConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  info(where: InfoSubscriptionWhereInput): InfoSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  uRL(where: URLSubscriptionWhereInput): URLSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type URL {
  devpost: String
  github: String
  slack: String
  instagram: String
  twitter: String
  web: String
  imagesUrl: [String!]!
}

type URLConnection {
  pageInfo: PageInfo!
  edges: [URLEdge]!
  aggregate: AggregateURL!
}

input URLCreateimagesUrlInput {
  set: [String!]
}

input URLCreateInput {
  devpost: String
  github: String
  slack: String
  instagram: String
  twitter: String
  web: String
  imagesUrl: URLCreateimagesUrlInput
}

input URLCreateOneInput {
  create: URLCreateInput
}

type URLEdge {
  node: URL!
  cursor: String!
}

enum URLOrderByInput {
  devpost_ASC
  devpost_DESC
  github_ASC
  github_DESC
  slack_ASC
  slack_DESC
  instagram_ASC
  instagram_DESC
  twitter_ASC
  twitter_DESC
  web_ASC
  web_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type URLPreviousValues {
  devpost: String
  github: String
  slack: String
  instagram: String
  twitter: String
  web: String
  imagesUrl: [String!]!
}

type URLSubscriptionPayload {
  mutation: MutationType!
  node: URL
  updatedFields: [String!]
  previousValues: URLPreviousValues
}

input URLSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: URLWhereInput
  AND: [URLSubscriptionWhereInput!]
  OR: [URLSubscriptionWhereInput!]
  NOT: [URLSubscriptionWhereInput!]
}

input URLUpdateDataInput {
  devpost: String
  github: String
  slack: String
  instagram: String
  twitter: String
  web: String
  imagesUrl: URLUpdateimagesUrlInput
}

input URLUpdateimagesUrlInput {
  set: [String!]
}

input URLUpdateManyMutationInput {
  devpost: String
  github: String
  slack: String
  instagram: String
  twitter: String
  web: String
  imagesUrl: URLUpdateimagesUrlInput
}

input URLUpdateOneInput {
  create: URLCreateInput
  update: URLUpdateDataInput
  upsert: URLUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input URLUpsertNestedInput {
  update: URLUpdateDataInput!
  create: URLCreateInput!
}

input URLWhereInput {
  devpost: String
  devpost_not: String
  devpost_in: [String!]
  devpost_not_in: [String!]
  devpost_lt: String
  devpost_lte: String
  devpost_gt: String
  devpost_gte: String
  devpost_contains: String
  devpost_not_contains: String
  devpost_starts_with: String
  devpost_not_starts_with: String
  devpost_ends_with: String
  devpost_not_ends_with: String
  github: String
  github_not: String
  github_in: [String!]
  github_not_in: [String!]
  github_lt: String
  github_lte: String
  github_gt: String
  github_gte: String
  github_contains: String
  github_not_contains: String
  github_starts_with: String
  github_not_starts_with: String
  github_ends_with: String
  github_not_ends_with: String
  slack: String
  slack_not: String
  slack_in: [String!]
  slack_not_in: [String!]
  slack_lt: String
  slack_lte: String
  slack_gt: String
  slack_gte: String
  slack_contains: String
  slack_not_contains: String
  slack_starts_with: String
  slack_not_starts_with: String
  slack_ends_with: String
  slack_not_ends_with: String
  instagram: String
  instagram_not: String
  instagram_in: [String!]
  instagram_not_in: [String!]
  instagram_lt: String
  instagram_lte: String
  instagram_gt: String
  instagram_gte: String
  instagram_contains: String
  instagram_not_contains: String
  instagram_starts_with: String
  instagram_not_starts_with: String
  instagram_ends_with: String
  instagram_not_ends_with: String
  twitter: String
  twitter_not: String
  twitter_in: [String!]
  twitter_not_in: [String!]
  twitter_lt: String
  twitter_lte: String
  twitter_gt: String
  twitter_gte: String
  twitter_contains: String
  twitter_not_contains: String
  twitter_starts_with: String
  twitter_not_starts_with: String
  twitter_ends_with: String
  twitter_not_ends_with: String
  web: String
  web_not: String
  web_in: [String!]
  web_not_in: [String!]
  web_lt: String
  web_lte: String
  web_gt: String
  web_gte: String
  web_contains: String
  web_not_contains: String
  web_starts_with: String
  web_not_starts_with: String
  web_ends_with: String
  web_not_ends_with: String
  AND: [URLWhereInput!]
  OR: [URLWhereInput!]
  NOT: [URLWhereInput!]
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatorInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  name: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatorInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProjectsDataInput {
  name: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatorInput
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  project: Project!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  project: ProjectCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutProjectInput {
  create: [VoteCreateWithoutProjectInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutProjectInput {
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  project: ProjectCreateOneWithoutVotesInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  project: ProjectUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutProjectInput {
  create: [VoteCreateWithoutProjectInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutProjectDataInput {
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  project: ProjectUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutProjectInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutProjectDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutProjectInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutProjectDataInput!
  create: VoteCreateWithoutProjectInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  project: ProjectWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    