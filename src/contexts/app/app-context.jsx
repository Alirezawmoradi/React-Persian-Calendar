import {createContext, useContext, useEffect, useReducer} from "react";
import moment from "jalali-moment";
import {appReducer} from "./app-reducer.js";

const AppContext = createContext();

const initialState = {
    selectedDate: moment(),
    today: moment(),
    theme: localStorage.getItem('theme') || 'light'
};

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeSelectedDate = (selectedDate) => {
        dispatch({type: 'SELECTED_DATE', payload: selectedDate})
    }
    const changeToday = (today) => {
        dispatch({type: 'Today', payload: today})
    }

    const changeTheme = (theme) => {
        dispatch({type: 'CHANGE_THEME', payload: theme});
    }

    useEffect(() => {
        localStorage.setItem('theme', state.theme)
    }, [state.theme])

    return <AppContext.Provider value={{...state, changeSelectedDate, changeToday, changeTheme}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {useAppContext, AppProvider};