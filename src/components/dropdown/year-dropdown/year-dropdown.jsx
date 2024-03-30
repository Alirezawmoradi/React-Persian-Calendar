import moment from "jalali-moment";
import {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {useAppContext} from "../../../contexts/app/app-context.jsx";

export const YearDropdown = () => {
    const startYear = 1300;
    const currentYear = moment().jYear();
    const [year, setYear] = useState(currentYear);
    const {selectedDate, changeSelectedDate} = useAppContext();

    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
    }

    return (
        <div className='flex flex-col w-96 h-96'>
            <div className='flex flex-row-reverse justify-center'>
                <div className='flex justify-center items-center gap-5 mb-5'>
                    <GrFormPrevious className='w-5 h-5 cursor-pointer'

                    />
                    <h1 className='flex items-center justify-center cursor-pointer border w-20 rounded-full bg-blue-700 hover:bg-blue-800 h-8 text-white transition-all duration-300 text-sm'>
                        سال جاری
                    </h1>
                    <GrFormNext className='w-5 h-5 cursor-pointer'/>
                </div>
            </div>
            <div className='grid grid-cols-4 w-full font-medium text-sm'>
                {
                    years.map((year, index) => {
                        const isSelected = moment(selectedDate).format('jYYYY/jMM/jDD') === moment(year, 'jYYYY-jM-jD').format('jYYYY/jMM/jDD');
                        return (
                            <div
                                className='h-14 border grid place-content-center cursor-pointer hover:bg-gray-200 hover:rounded-md transition-all duration-300'
                                key={index}>
                                <h1 className={`h-10 w-10 grid place-content-center
                                ${isSelected ? 'bg-red-600 text-white h-14 w-24' : ''} 
                                rounded-md transition-all duration-300
                                `}
                                    onClick={() => changeSelectedDate(moment(year, 'jYYYY'))}
                                >{year}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}