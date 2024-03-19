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

    for (let i = 0; i < firstDateOfMonth.jDay(); i++) {
        const date = firstDateOfMonth.jDay(i);

        arrayOfDate.push({
            currentMonth: false,
            date,
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

    const remaining = 42 - arrayOfDate.length;

    for (
        let i = lastDateOfMonth.jDay() + 1;
        i <= lastDateOfMonth.jDay() + remaining;
        i++
    ) {
        arrayOfDate.push({
            currentMonth: false,
            date: lastDateOfMonth.jDay(i),
        });
    }
    return arrayOfDate;
};
