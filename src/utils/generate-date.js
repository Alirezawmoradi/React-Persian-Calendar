import moment from "jalali-moment";
import {PersianMonths} from "./month.js";

export const GenerateDate = (date) => {
    let newDate = moment(date);
    let year = newDate.jYear();

    // when we want to show name of months
    // let month = PersianMonths[newDate.jMonth()];

    let month = newDate.jMonth();
    let day = newDate.jDate();

    let firstDateOfMonth = moment(`${year}-${month + 1}-01`, 'jYYYY-jMM-jDD').startOf('jMonth');
    let lastDateOfMonth = moment(`${year}-${month + 1}-${newDate.jDaysInMonth()}`, 'jYYYY-jMM-jDD').endOf('jMonth');

    const arrayOfDate = [];

    function convertToJalali(date) {
        return moment(date, 'YYYY-MM-DD').format('jYYYY-jMM-jDD');
    }

    let currentDate = moment(firstDateOfMonth);
    while (currentDate.isSameOrBefore(lastDateOfMonth)) {
        arrayOfDate.push(convertToJalali(currentDate));
        currentDate.add(1, 'day');
    }

    return arrayOfDate;
}