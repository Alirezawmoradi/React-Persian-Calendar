import moment from "jalali-moment";
import {PersianMonths} from "./month.js";

export const GenerateDate = (date) => {
    let newDate = moment(date);
    let year = newDate.jYear();

    // when we want to show name of months
    // let month = PersianMonths[newDate.jMonth()];

    let month = newDate.jMonth();
    let day = newDate.jDate();

    let firstDateOfMonth = moment(`${year}-${month + 1}-01`, 'jYYYY-jMM-jDD');
    let lastDateOfMonth = moment(`${year}-${month + 1}-${newDate.jDaysInMonth()}`, 'jYYYY-jMM-jDD');

    const arrayOfDate = [];

    function convertToJalali(date) {
        return moment(date, 'YYYY-MM-DD').format('jYYYY-jM-jD');
    }

    for (let i = firstDateOfMonth.jDate(); i <= lastDateOfMonth.jDate(); i++) {
        const currentDate = moment(firstDateOfMonth).date(i);
        arrayOfDate.push(convertToJalali(currentDate))
    }


    return arrayOfDate;
}