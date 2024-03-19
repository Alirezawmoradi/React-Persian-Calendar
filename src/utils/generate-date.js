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

    let lastDateOfPreviousMonth = moment(firstDateOfMonth).subtract(1, 'day');

    for (let i = lastDateOfPreviousMonth.jDay(); i > 0; i--) {
        arrayOfDate.unshift({
            currentMonth: false,
            date: lastDateOfPreviousMonth.subtract(i, 'day').format('jYYYY-jMM-jDD')
        });
    }
    let currentDate = moment(firstDateOfMonth);
    while (currentDate.isSameOrBefore(lastDateOfMonth)) {
        arrayOfDate.push({
            currentMonth: true,
            date: currentDate.format('jYYYY-jMM-jDD')
        });
        currentDate.add(1, 'day');
    }

    return arrayOfDate;
};
