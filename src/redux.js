import { createSlice, configureStore } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: [
        {
            id: 1,
            description: 'Master Java/spring',
            isDone: false
        },
        {
            id: Math.floor(Math.random() * 100),
            description: 'Master Dart/flutter',
            isDone: false
        },
        {
            id: Math.floor(Math.random() * 100),
            description: 'Master JS/NodeJS',
            isDone: false
        }
    ],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Math.floor(Math.random() * 100),
                description: action.payload.description,
                isDone : action.payload.isDone
            }
            state.push(newTask)
        },
        editTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id)
            task.description = action.payload.desc
        },
        filterTasks: (state, action) => {
            state = state.filter(task => task === action.payload)
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload)
            task.isDone = !task.isDone
        }
    }
})

export const {addTask, editTask, filterTasks, toggleTask} = toDoSlice.actions

//Create store redux
export const store = configureStore({
    reducer:{
        toDo: toDoSlice.reducer
    }
})
