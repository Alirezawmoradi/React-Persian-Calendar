import {Calendar} from "./calendar.jsx";
import {VscCalendar} from "react-icons/vsc";
import {useState} from "react";
import moment from "jalali-moment";

export const Dropdown = () => {
    //it should change to input with icon to show calendar
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(moment().format('jYYYY/jMM/jDD'));
    const inputFill = (event) => {
        console.log(event.target)
    }
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-center gap-5 mt-20'>
                <input className='border outline-none rounded-full h-10 bg-gray-100 hover:bg-gray-200 pl-3'
                       value={date}
                       onChange={() => setDate(date)}/>
                <VscCalendar className='h-10 w-5 cursor-pointer' onClick={() => setShowCalendar(!showCalendar)}/>
            </div>
            {
                showCalendar &&
                <div className='mb-5'>
                    <Calendar inputFill={inputFill}/>
                </div>
            }
        </div>
    )
}