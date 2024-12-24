
import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from '../actionstypes';



const initialeState = {
    listTasks :[
        {id:Math.random(),text: "task1", isDone:false},
        {id:Math.random(),text: "task2", isDone:false},
    ]
}
 const listReducer = (state=initialeState, {type,payload}) => {
    switch (type) {
        case ADD_TASK :
            return {...state,listTasks : [...state.listTasks,payload]}
        case DELETE_TASK :
            return {...state , listTasks:state.filter(el => el.id !== payload)} 
        case DONE_TASK :
            return {...state , listTasks:state.map(el => el.id === payload ? {...el,isDone:!el.isDone}:el)}  
        case EDIT_TASK :
            return {...state , listTasks:state.map(el => el.id === payload ? {...el,text:payload.newTask }:el)} 
       default:
        return state;         
    }
 }
 export default listReducer ;