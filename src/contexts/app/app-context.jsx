import {createContext, useContext, useReducer, useState} from "react";
import moment from "jalali-moment";
import {appReducer} from "./app-reducer.js";

const AppContext = createContext();

const initialState = {
    selectedDate: moment(),
    today: moment()
};

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeSelectedDate = (selectedDate) => {
        dispatch({type: 'SELECTED_DATE', payload: selectedDate})
    }
    const changeToday = (today) => {
        dispatch({type: 'Today', payload: today})
    }

    return <AppContext.Provider value={{...state, changeSelectedDate,changeToday}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {useAppContext, AppProvider};