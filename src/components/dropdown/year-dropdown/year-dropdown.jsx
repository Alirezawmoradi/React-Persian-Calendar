import moment from "jalali-moment";
import {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {useAppContext} from "../../../contexts/app/app-context.jsx";
import {PersianNumber} from "../../../utils/persian-number.js";

export const YearDropdown = () => {
    const startYear = 1300;
    const currentYear = moment().jYear();
    const {selectedDate, changeSelectedDate, changeToday, today} = useAppContext();

    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
    }

    const itemsPerPage = 20;
    const totalPages = Math.ceil((currentYear - startYear + 1) / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, years.length);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    const handlePrevYear = () => {
        const currentYear = parseInt(selectedDate.format('jYYYY'));
        const nextYear = currentYear + 1;
        if (nextYear <= moment().jYear()) {
            changeSelectedDate(moment(nextYear, 'jYYYY'));
            changeToday(today.jYear(today.jYear() + 1))
        }
    }
    const handleCurrentYear = () => {
        changeSelectedDate(moment(currentYear, 'jYYYY'));
        changeToday(moment(currentYear, 'jYYYY'))
    }
    const handleNextYear = () => {
        const currentYear = parseInt(selectedDate.format('jYYYY'));
        const prevYear = currentYear - 1;
        if (prevYear >= startYear) {
            changeSelectedDate(moment(prevYear, 'jYYYY'));
            changeToday(today.jYear(today.jYear() - 1))
        }
    }

    return (
        <div className='flex flex-col xl:w-96  xl:h-96 w-80 min-h-screen'>
            <div className='flex flex-row-reverse justify-center'>
                <div className='flex justify-center items-center gap-5 mb-14'>
                    <GrFormPrevious
                        className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                        onClick={handlePrevYear}/>
                    <h1 className='flex items-center justify-center cursor-pointer border w-20 rounded-full bg-blue-700 dark:bg-blue-800 dark:border-gray-700 dark:hover:bg-blue-600 hover:bg-blue-800 h-8 text-white transition-all duration-300 text-sm'
                        onClick={handleCurrentYear}
                    >
                        سال جاری
                    </h1>
                    <GrFormNext
                        className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                        onClick={handleNextYear}/>
                </div>
            </div>
            <div className='grid grid-cols-4 dark:divide-gray-600 w-full font-medium text-sm dark:text-gray-200'>
                {
                    years.reverse().slice(startIndex, endIndex).map((year, index) => {
                        const isSelected = selectedDate.format('jYYYY/jMM/jDD') === moment(year, 'jYYYY-jM-jD').format('jYYYY/jMM/jDD');
                        return (
                            <div
                                className='h-14 border dark:border-gray-600 grid place-content-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 hover:rounded-md transition-all duration-300'
                                key={index}
                                onClick={() => {
                                    changeSelectedDate(moment(year, 'jYYYY'))
                                    changeToday(moment(year, 'jYYYY'))
                                }}
                            >
                                <h1 className={`h-10 w-10 grid place-content-center
                                ${isSelected ? 'bg-red-600 dark:bg-blue-600 text-white h-14 xl:w-24 w-20' : ''}
                                rounded-md transition-all duration-300`}
                                >{PersianNumber(year)}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center items-center gap-5 mt-5'>
                <GrFormPrevious
                    className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                    onClick={handlePrevPage}/>
                <h1 className='flex items-center justify-center cursor-pointer border w-32 rounded-full bg-blue-700 dark:border-gray-700 dark:hover:text-white dark:border-none hover:bg-blue-800 h-8 text-white transition-all duration-300 text-sm'>
                    صفحه {PersianNumber(currentPage)} از {PersianNumber(totalPages)}
                </h1>
                <GrFormNext
                    className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-all duration-300'
                    onClick={handleNextPage}/>
            </div>
        </div>
    )
}