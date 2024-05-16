import {PersianMonths} from "../../../utils/date.js";
import {useAppContext} from "../../../contexts/app/app-context.jsx";

export const MonthDropdown = () => {
    const {changeToday, today} = useAppContext();
    return (
        <div className='flex flex-col xl:w-96 w-80 xl:h-96 h-72 justify-center mt-2'>
            <div className='grid grid-cols-3 dark:divide-gray-600 w-full font-medium dark:text-gray-200 text-sm'
                 dir='rtl'>
                {PersianMonths.map((month, index) => {
                    const isSelected = today.jMonth() === index;
                    return (
                        <div
                            className='h-14 border grid dark:border-gray-600 place-content-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 hover:rounded-md transition-all duration-300'
                            key={index}
                            onClick={() => {
                                changeToday(today.jMonth(index));
                            }}
                        >
                            <h1 className={`h-10 w-10 grid place-content-center 
                            ${isSelected ? 'bg-red-600 dark:bg-blue-600 text-white h-14 xl:w-32 w-28' : ''}
                            rounded-md transition-all duration-300`}>
                                {month}
                            </h1>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}