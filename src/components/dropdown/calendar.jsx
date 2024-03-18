import {GenerateDate} from "../../utils/generate-date.js";

export const Calendar = () => {
    console.log(GenerateDate())
    return (
        <div className='flex flex-col justify-center w-screen h-auto px-7'>
            <div className='rounded-lg border bg-gray-200'>
                Show Calendar
            </div>
        </div>
    )
}