import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {PersianMonths} from "../../../utils/date.js";
import {useAppContext} from "../../../contexts/app/app-context.jsx";

///currentMonth and buttons should create
export const MonthDropdown = () => {
    const {changeToday, today} = useAppContext();
    console.log(PersianMonths[today.jMonth()])
    return (
        <div className='flex flex-col w-96 h-96 justify-center mt-2'>
            <div className='grid grid-cols-3 w-full font-medium text-sm' dir='rtl'>
                {PersianMonths.map((month, index) => {
                    const isSelected = today.jMonth() === index;
                    return (
                        <div
                            className='h-14 border grid place-content-center cursor-pointer hover:bg-gray-200 hover:rounded-md transition-all duration-300'
                            key={index}
                            onClick={() => {
                                changeToday(today.jMonth(index));
                            }}
                        >
                            <h1 className={`h-10 w-10 grid place-content-center 
                            ${isSelected ? 'bg-red-600 text-white h-14 w-32' : ''}
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