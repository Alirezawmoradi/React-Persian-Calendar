import {generateDate} from "../../utils/generate-date.js";
import moment from "jalali-moment";
import {PersianDays} from "../../utils/date.js";

export const Calendar = () => {
    return (
        <div className='flex flex-col w-96 h-96'>
            <div className='grid grid-cols-7 w-full'>
                {
                    PersianDays.map((day, index) => {
                        return (
                            <h1 className='h-14 grid place-content-center text-sm' key={index}>{day}</h1>
                        )
                    })
                }
            </div>
            <div className='grid grid-cols-7 w-full font-medium'>
                {
                    generateDate().map(({date, currentMonth, today}, index) => {
                        return (
                            <div className='h-14 border grid place-content-center' key={index}>
                                <h1>{moment(date, 'jYYYY-jM-jD').format('jD')}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}