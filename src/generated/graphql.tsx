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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Appointment = {
  __typename?: 'Appointment';
  id: Scalars['ID'];
  title: Scalars['String'];
  place: Scalars['String'];
  datetime: Scalars['String'];
  tags: Array<Tag>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
  __typename?: 'Query';
  schedule: Array<ScheduleItem>;
};

export type ScheduleItem = Todo | Appointment;

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  label: Scalars['String'];
  color: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  deadline: Scalars['String'];
  tags: Array<Tag>;
  done: Scalars['Boolean'];
};


export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQuery = (
  { __typename?: 'Query' }
  & { schedule: Array<(
    { __typename?: 'Todo' }
    & ScheduleItem_Todo_Fragment
  ) | (
    { __typename?: 'Appointment' }
    & ScheduleItem_Appointment_Fragment
  )> }
);

export type AppointmentItemFragment = (
  { __typename?: 'Appointment' }
  & Pick<Appointment, 'id' | 'title' | 'datetime' | 'place'>
  & { tags: Array<(
    { __typename?: 'Tag' }
    & TagFragment
  )> }
);

type ScheduleItem_Todo_Fragment = (
  { __typename?: 'Todo' }
  & TodoItemFragment
);

type ScheduleItem_Appointment_Fragment = (
  { __typename?: 'Appointment' }
  & AppointmentItemFragment
);

export type ScheduleItemFragment = ScheduleItem_Todo_Fragment | ScheduleItem_Appointment_Fragment;

export type TagFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'id' | 'label' | 'color'>
);

export type TodoItemFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'title' | 'description' | 'deadline'>
  & { tags: Array<(
    { __typename?: 'Tag' }
    & TagFragment
  )> }
);

export const TagFragmentDoc = gql`
    fragment Tag on Tag {
  id
  label
  color
}
    `;
export const TodoItemFragmentDoc = gql`
    fragment TodoItem on Todo {
  id
  title
  description
  deadline
  tags {
    ...Tag
  }
}
    ${TagFragmentDoc}`;
export const AppointmentItemFragmentDoc = gql`
    fragment AppointmentItem on Appointment {
  id
  title
  datetime
  place
  tags {
    ...Tag
  }
}
    ${TagFragmentDoc}`;
export const ScheduleItemFragmentDoc = gql`
    fragment ScheduleItem on ScheduleItem {
  ... on Todo {
    ...TodoItem
  }
  ... on Appointment {
    ...AppointmentItem
  }
}
    ${TodoItemFragmentDoc}
${AppointmentItemFragmentDoc}`;
export const AppDocument = gql`
    query App {
  schedule {
    ...ScheduleItem
  }
}
    ${ScheduleItemFragmentDoc}`;

/**
 * __useAppQuery__
 *
 * To run a query within a React component, call `useAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppQuery(baseOptions?: Apollo.QueryHookOptions<AppQuery, AppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppQuery, AppQueryVariables>(AppDocument, options);
      }
export function useAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppQuery, AppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppQuery, AppQueryVariables>(AppDocument, options);
        }
export type AppQueryHookResult = ReturnType<typeof useAppQuery>;
export type AppLazyQueryHookResult = ReturnType<typeof useAppLazyQuery>;
export type AppQueryResult = Apollo.QueryResult<AppQuery, AppQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ScheduleItem": [
      "Todo",
      "Appointment"
    ]
  }
};
      export default result;
    