import {Calendar} from "./feature/calendar/calendar.jsx";
import ChangeTheme from "./components/change-theme/change-theme.jsx";
import {useAppContext} from "./contexts/app/app-context.jsx";

function App() {
    const {theme} = useAppContext();
    return (
        <div className={`${theme}`}>
            <div className='flex flex-col  bg-light dark:bg-dark w-screen min-h-screen transition-colors duration-500'>
                    <ChangeTheme/>
                <main>
                    <Calendar/>
                </main>
            </div>
        </div>
    )
}

export default App
