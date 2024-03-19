import {generateDate} from "../../utils/generate-date.js";
import moment from "jalali-moment";

export const Calendar = () => {
    return (
        <div className='flex flex-col w-96 h-96'>
            <div className='rounded-lg border bg-gray-200 grid grid-cols-7 font-medium'>
                {
                    generateDate().map(({date, currentMonth, today}, index) => {
                        return(
                            <div key={index}>
                                <h1>{moment(date, 'jYYYY-jM-jD').format('jD')}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}