import {Calendar} from "./calendar.jsx";
import {VscCalendar} from "react-icons/vsc";

export const Dropdown = () => {
    //it should change to input with icon to show calendar
    return (
        <div className='flex flex-col justify-center'>
            <Calendar/>
            <div className='flex justify-center gap-5 mb-16'>
                <input className='border outline-none rounded-full h-10 bg-gray-100 hover:bg-gray-200 pl-3'/>
                <VscCalendar className='h-10 w-5 cursor-pointer'/>
            </div>
        </div>
    )
}