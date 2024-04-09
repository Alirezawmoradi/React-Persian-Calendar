import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {PersianMonths} from "../../../utils/date.js";
import {useAppContext} from "../../../contexts/app/app-context.jsx";


export const MonthDropdown = () => {
    const {changeToday, today} = useAppContext();
    return (
        <div className='flex flex-col w-96 h-96'>
            <div className='flex flex-row-reverse justify-center'>
                <div className='flex justify-center items-center gap-5 mb-14'>
                    <GrFormPrevious className='w-5 h-5 cursor-pointer'
                    />
                    <h1 className='flex items-center justify-center cursor-pointer border w-20 rounded-full bg-blue-700 hover:bg-blue-800 h-8 text-white transition-all duration-300 text-sm'
                    >
                        ماه جاری
                    </h1>
                    <GrFormNext className='w-5 h-5 cursor-pointer'
                    />
                </div>
            </div>
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