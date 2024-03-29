import {Calendar} from "../../feature/calendar/calendar.jsx";
import {VscCalendar} from "react-icons/vsc";
import {useState} from "react";
import {useAppContext} from "../../contexts/app/app-context.jsx";

export const DateInput = () => {
    //it should change to input with icon to show calendar
    const [showCalendar, setShowCalendar] = useState(false);
    const {selectedDate, changeSelectedDate} = useAppContext();
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-center gap-5 mt-20'>
                <input className='border outline-none rounded-full h-10 bg-gray-100 hover:bg-gray-200 pl-3'
                       value={selectedDate.format('jYYYY/jMM/jDD')}
                       onChange={() => changeSelectedDate(selectedDate)}/>
                <VscCalendar className='h-10 w-5 cursor-pointer' onClick={() => setShowCalendar(!showCalendar)}/>
            </div>
            {
                showCalendar &&
                <div className='mb-5'>
                    <Calendar/>
                </div>
            }
        </div>
    )
}