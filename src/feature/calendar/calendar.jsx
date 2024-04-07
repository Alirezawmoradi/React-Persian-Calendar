import {generateDate} from "../../utils/generate-date.js";
import moment from "jalali-moment";
import {PersianDays, PersianMonths} from "../../utils/date.js";
import {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {useAppContext} from "../../contexts/app/app-context.jsx";
import {YearDropdown} from "../../components/dropdown/year-dropdown/year-dropdown.jsx";
import {PersianNumber} from "../../utils/persian-number.js";

export const Calendar = () => {
    const currentDate = moment();
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const {selectedDate, changeSelectedDate,changeToday,today} = useAppContext();
    const PersianDate = `${PersianNumber(selectedDate.format('jYYYY'))}/${PersianNumber(selectedDate.format('jMM'))}/${PersianNumber(selectedDate.format('jDD'))}`;
    return (
        <div className='flex mx-auto divide-x-2 items-center gap-10 h-screen'>
            <div className='flex flex-col w-96 h-96'>
                <div className='flex flex-row-reverse justify-between'>
                    <h1 className='font-semibold flex items-center justify-center cursor-pointer w-20 h-8 hover:bg-gray-200 hover:rounded-md transition-all duration-300'
                        onClick={() => setShowYearDropdown(!showYearDropdown)}
                    >{PersianNumber(today.jYear())}</h1>
                    <h1 className='flex items-center justify-center cursor-pointer border w-16 rounded-full bg-blue-700 hover:bg-blue-800 h-8 text-white transition-all duration-300'
                        onClick={() => {
                            changeSelectedDate(currentDate)
                            changeToday(currentDate)
                        }}>امروز</h1>
                    <div className='flex items-center gap-5'>
                        <GrFormPrevious className='w-5 h-5 cursor-pointer'
                                        onClick={() => {
                                            changeToday(today.jMonth(today.jMonth() - 1))
                                        }}/>
                        <h1 className='flex items-center justify-center font-semibold cursor-pointer w-20 h-8 hover:bg-gray-200 hover:rounded-md transition-all duration-300'>{PersianMonths[today.jMonth()]}</h1>
                        <GrFormNext className='w-5 h-5 cursor-pointer'
                                    onClick={() => {
                                        changeToday(today.jMonth(today.jMonth() + 1))
                                    }}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-7 w-full text-gray-500'>
                    {
                        PersianDays.map((day, index) => {
                            return (
                                <h1 className='h-14 grid place-content-center text-sm cursor-default'
                                    key={index}>{day}</h1>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-7 w-full font-medium text-sm'>
                    {
                        generateDate(today.jMonth(today.jMonth()), today.jYear(today.jYear())).map(({
                                                                                                                        date,
                                                                                                                        currentMonth,
                                                                                                                        today
                                                                                                                    }, index) => {
                            const isDisabled = !currentMonth;
                            const isSelected = selectedDate.format('jYYYY/jMM/jDD') === moment(date, 'jYYYY-jM-jD').format('jYYYY/jMM/jDD');
                            return (
                                <div className='h-14 border grid place-content-center' key={index}>
                                    <h1 className={`${currentMonth ? '' : 'text-gray-400'} 
                                    ${today ? 'bg-red-600 text-white' : ''} 
                                    ${isSelected && !isDisabled ? "bg-black text-white" : ""} 
                                    ${!isDisabled ? 'hover:bg-black hover:text-white cursor-pointer' : 'cursor-default'}
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
            <div className='h-96 w-52 px-5'>

                {
                    showYearDropdown ?
                        <YearDropdown/>
                        :
                        <h1 className='font-semibold'>{PersianDate}</h1>
                }
            </div>
        </div>
    )
}