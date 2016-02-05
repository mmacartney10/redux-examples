import React from 'react'
import store from '../store'

const List = React.createClass({
  render: function () {
    return (
    <ul>
        {store.getState().map(todo => <li key={todo.id}>
          {todo.text}
        </li>)}
      </ul>
    )
  }
})

export default List
