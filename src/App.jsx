import {Calendar} from "./feature/calendar/calendar.jsx";
import ChangeTheme from "./components/change-theme/change-theme.jsx";
import {useAppContext} from "./contexts/app/app-context.jsx";

function App() {
    const {theme} = useAppContext();
    return (
        <div className={`${theme}`}>
            <div className='flex justify-center bg-light dark:bg-dark transition-colors duration-500'>
                <nav className='flex justify-start gap-2 align-middle py-4'>
                    <ChangeTheme/>
                </nav>
                <Calendar/>
            </div>
        </div>
    )
}

export default App
