import {Dropdown} from "../../components/dropdown/dropdown.jsx";

export const DatePicker = () => {
    return (
        <div className='flex flex-col min-h-screen uppercase'>
            <div className='flex-1 flex  justify-center items-center'>
                <div className='flex justify-center items-center w-full font-bold'>
                    <Dropdown/>
                </div>
            </div>
        </div>
    )
}