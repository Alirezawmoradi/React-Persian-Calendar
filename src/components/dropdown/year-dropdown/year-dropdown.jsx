import {generateDate} from "../../../utils/generate-date.js";
import moment from "jalali-moment";
import {useState} from "react";

export const YearDropdown = () => {
    const startYear = 1300;
    const endYear = moment().jYear();
    const [selectedYear, setSelectedYear] = useState(endYear);

    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    return (
        <div className='grid grid-cols-4 w-full font-medium text-sm'>
            {
                years.map((year, index) => {
                    return (
                        <div className='h-14 border grid place-content-center' key={index}>
                            <h1 className='h-10 w-10 grid place-content-center'>{year}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}