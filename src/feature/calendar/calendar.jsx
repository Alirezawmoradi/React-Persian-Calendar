import {generateDate} from "../../utils/generate-date.js";
import moment from "jalali-moment";
import {PersianDays, PersianMonths} from "../../utils/date.js";
import {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {useAppContext} from "../../contexts/app/app-context.jsx";
import {YearDropdown} from "../../components/dropdown/year-dropdown/year-dropdown.jsx";
import {PersianNumber} from "../../utils/persian-number.js";
import {MonthDropdown} from "../../components/dropdown/month-dropdown/month-dropdown.jsx";
import {CgClose} from "react-icons/cg";
import Num2persian from "../../utils/persian-digits.js";

export const Calendar = () => {
    const currentDate = moment();
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const {selectedDate, changeSelectedDate, changeToday, today} = useAppContext();
    const PersianDate = `${PersianNumber(selectedDate.format('jYYYY'))}/${PersianNumber(selectedDate.format('jMM'))}/${PersianNumber(selectedDate.format('jDD'))}`;
    const PersianDigit = `${Num2persian(selectedDate.format('jDD'))}مین روز از ${PersianMonths[today.jMonth()]} ماه سال ${Num2persian(selectedDate.format('jYYYY'))}`;
    return (
        <div className='flex flex-col xl:flex-row mx-auto xl:divide-x-2 dark:divide-gray-700 justify-center items-center gap-10 xl:mt-32 mt-20'>
            <div className='flex flex-col xl:w-96 xl:h-96'>
                <div className='flex flex-row-reverse justify-between'>
                    <h1 className='font-semibold flex items-center justify-center cursor-pointer w-20 h-8 hover:bg-gray-200 rounded-md dark:text-gray-300 dark:hover:bg-gray-500 transition-all duration-300'
                        onClick={() => {
                            setShowYearDropdown(!showYearDropdown);
                            setShowMonthDropdown(false);
                        }
                        }
                    >{PersianNumber(today.jYear())}</h1>
                    <h1 className='flex items-center justify-center cursor-pointer border w-16 rounded-full bg-blue-700 dark:bg-blue-800 dark:border-gray-700 dark:hover:bg-blue-600 hover:bg-blue-800 h-8 text-white transition-colors duration-500'
                        onClick={() => {
                            changeSelectedDate(currentDate)
                            changeToday(currentDate)
                            setShowYearDropdown(false)
                            setShowMonthDropdown(false)
                        }}>امروز</h1>
                    <div className='flex items-center xl:gap-5 gap-1'>
                        <GrFormPrevious className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                                        onClick={() => {
                                            changeToday(today.jMonth(today.jMonth() - 1))
                                        }}/>
                        <h1 className='flex items-center justify-center font-semibold cursor-pointer w-20 h-8 hover:bg-gray-200 rounded-md dark:text-gray-300 dark:hover:bg-gray-500 transition-all duration-300'
                            onClick={() => {
                                setShowMonthDropdown(!showMonthDropdown);
                                setShowYearDropdown(false);
                            }}
                        >
                            {PersianMonths[today.jMonth()]}</h1>
                        <GrFormNext className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                                    onClick={() => {
                                        changeToday(today.jMonth(today.jMonth() + 1))
                                    }}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-7 w-full text-gray-500 dark:text-gray-400'>
                    {
                        PersianDays.map((day, index) => {
                            return (
                                <h1 className='h-14 grid place-content-center text-sm cursor-default'
                                    key={index}>{day}</h1>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-7 dark:divide-gray-500 xl:w-full w-80 font-medium text-sm dark:text-gray-200'>
                    {
                        generateDate(today.jMonth(today.jMonth()), today.jYear(today.jYear())).map(({
                                                                                                        date,
                                                                                                        currentMonth,
                                                                                                        today
                                                                                                    }, index) => {
                            const isDisabled = !currentMonth;
                            const isSelected = selectedDate.format('jYYYY/jMM/jDD') === moment(date, 'jYYYY-jM-jD').format('jYYYY/jMM/jDD');
                            return (
                                <div className='h-14 border grid dark:border-gray-500 place-content-center' key={index}>
                                    <h1 className={`${currentMonth ? '' : 'text-gray-400 dark:text-gray-500'} 
                                    ${today ? 'bg-red-600 text-white dark:bg-blue-600' : ''} 
                                    ${isSelected && !isDisabled ? "bg-black text-white" : ""} 
                                    ${!isDisabled ? 'hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer' : 'cursor-default'}
                                    h-10 w-10 grid place-content-center rounded-full transition-all duration-300`}
                                        onClick={isDisabled ? undefined : () => changeSelectedDate(moment(date, 'jYYYY-jM-jD'))}
                                    >
                                        {PersianNumber(moment(date, 'jYYYY-jM-jD').format('jD'))}
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='xl:h-96 xl:w-52 w-auto h-auto xl:px-5'>
                {
                    showYearDropdown ?
                        (
                            <>
                                <CgClose className='cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                                    onClick={() => setShowYearDropdown(false)}/>
                                <YearDropdown/>
                            </>
                        )
                        :
                        showMonthDropdown ?
                            (
                                <>
                                    <CgClose className='cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                                        onClick={() => setShowMonthDropdown(false)}/>
                                    <MonthDropdown/>
                                </>
                            )
                            :
                            <div className='flex flex-col xl:gap-7 gap-5 mb-10 xl:mb-0 xl:w-96 w-auto text-center xl:text-left font-extrabold text-gray-700 dark:text-gray-300 transition-colors duration-500'>
                                <h1 className='xl:text-base text-sm'>{PersianDate}</h1>
                                <h1 className='xl:text-sm text-xs'>{PersianDigit}</h1>
                            </div>
                }
            </div>
        </div>
    )
}