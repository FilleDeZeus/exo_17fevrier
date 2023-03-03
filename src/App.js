import React from 'react'
import './App.css'
import { Chronometre } from './components/chronometre/chronometre.js'
import {Compteur} from './components/compteur/compteur.js'
import {ProgressBar} from './components/progressBar/progressBar.js'
import {Timer} from './components/timer/timer.js'
import {ToDoList} from './components/todolist/todolist.js'


export const App = () => {
  
  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
  ];
  return (

    <div>
      <Chronometre/>
      <Compteur/>
      <ProgressBar/>
      <Timer duration={60} />
      <ToDoList tasks={tasks} />
  
    </div>
  )
}
