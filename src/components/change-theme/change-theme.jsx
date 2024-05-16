import {FaMoon} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";
import {useAppContext} from "../../contexts/app/app-context.jsx";

const ChangeTheme = () => {
    const {theme, changeTheme} = useAppContext();
    const changeThemeHandler = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div
            className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-blue-400 cursor-pointer rounded-full p-1 ml-6 mt-4'
            onClick={changeThemeHandler}
            data-theme={theme}
        >
            <FaMoon className='hover:text-gray-400 text-yellow-400' size={18}/>
            <div
                className={`absolute bg-white dark:bg-dark w-6 h-6 rounded-full shadow-md transform transition-transform duration-1000 ${theme === 'dark' ? 'translate-x-0.5' : '-translate-x-0.5'}`}
                style={theme === 'dark' ? {left: '2px'} : {right: '2px'}}>
            </div>
            <BsSunFill className='ml-auto hover:text-blue-500 text-white pl-0.5' size={18}/>
        </div>
    )
}

export default ChangeTheme;