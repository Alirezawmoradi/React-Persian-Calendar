import {generateDate} from "../../utils/generate-date.js";
import moment from "jalali-moment";
import {PersianDays} from "../../utils/date.js";
import {useState} from "react";

export const Calendar = () => {
    const currentDate = moment().format('jYYYY/jM/jD');
    const [today, setToday] = useState(currentDate);
    return (
        <div className='flex mx-auto divide-x-2 items-center gap-10 h-screen'>
            <div className='flex flex-col w-96 h-96'>
                <div>
                    <h1>{today}</h1>
                </div>
                <div className='grid grid-cols-7 w-full text-gray-500'>
                    {
                        PersianDays.map((day, index) => {
                            return (
                                <h1 className='h-14 grid place-content-center text-sm' key={index}>{day}</h1>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-7 w-full font-medium text-sm'>
                    {
                        generateDate().map(({date, currentMonth, today}, index) => {
                            return (
                                <div className='h-14 border grid place-content-center' key={index}>
                                    <h1 className={`${currentMonth ? '' : 'text-gray-400'} ${today ? 'bg-red-600 text-white' : ''} h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer`}>
                                        {moment(date, 'jYYYY-jM-jD').format('jD')}
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='h-96 w-52'>
                <h1>Month should be here</h1>
                <span>Test for calendar</span>
            </div>
        </div>
    )
}