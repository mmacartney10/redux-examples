import React from 'react'

import Fieldset from './Fieldset'
import List from './List'

const App = React.createClass({
  render: function () {
    return (
    <form>
        <legend>Form</legend>
        <Fieldset/>
        <List/>
      </form>
    )
  }
})

export default App
