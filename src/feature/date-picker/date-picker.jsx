import {DateInput} from "../../components/date-input/date-input.jsx";

export const DatePicker = () => {
    return (
        <div className='flex flex-col min-h-screen uppercase'>
            <div className='flex-1 flex  justify-center items-center'>
                <div className='flex justify-center items-center w-full font-bold'>
                    <DateInput/>
                </div>
            </div>
        </div>
    )
}