import gql from 'graphql-tag'

export const GET_TASK = gql`
  query getTasks {
    tasks {
      id
      is_completed
      title
      order
      status
    }
  }
`

export const ADD_TASK = gql`
  mutation addTask($title: String) {
    insert_tasks_one(object: { title: $title }) {
      id
      is_completed
      title
    }
  }
`

export const UPDATE_TITLE = gql`
  mutation updateTask($id: uuid!, $title: String!) {
    update_tasks(where: { id: { _eq: $id } }, _set: { title: $title }) {
      returning {
        id
        is_completed
        title
        status
      }
    }
  }
`
export const UPDATE_COMPLETED = gql`
  mutation updateTask($id: uuid!, $is_completed: Boolean!) {
    update_tasks(
      where: { id: { _eq: $id } }
      _set: { is_completed: $is_completed }
    ) {
      returning {
        id
        is_completed
        title
        status
      }
    }
  }
`
export const UPDATE_STATUS = gql`
  mutation updateTask($id: uuid!, $status: String!) {
    update_tasks(where: { id: { _eq: $id } }, _set: { status: $status }) {
      returning {
        id
        is_completed
        title
        status
      }
    }
  }
`
