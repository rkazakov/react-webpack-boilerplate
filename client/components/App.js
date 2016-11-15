import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Slider from './Slider/Slider'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Slider />
  </div>
)

export default App
