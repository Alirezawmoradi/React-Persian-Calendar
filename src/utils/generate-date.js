import moment from "jalali-moment";

export const generateDate = (date) => {
    let newDate = moment(date);
    let year = newDate.jYear();
    let month = newDate.jMonth();

    let firstDateOfMonth = moment(`${year}-${month + 1}-01`, 'jYYYY-jMM-jDD').startOf('jMonth');
    let lastDateOfMonth = moment(`${year}-${month + 1}-${newDate.jDaysInMonth()}`, 'jYYYY-jMM-jDD').endOf('jMonth');


    const arrayOfDate = [];

    let lastDayOfPreviousMonth = moment(firstDateOfMonth).subtract(1, 'day');

    // Number of days to fill from previous month
    let daysToFill = (lastDayOfPreviousMonth.jDay() + 1) % 7;

    for (let i = 0; i < daysToFill; i++) {
        arrayOfDate.unshift({
            currentMonth: false,
            date: moment(lastDayOfPreviousMonth).subtract(i, 'day').format('jYYYY-jMM-jDD')
        });
    }

    let currentDate = moment(firstDateOfMonth);
    while (currentDate.isSameOrBefore(lastDateOfMonth)) {
        arrayOfDate.push({
            currentMonth: true,
            date: currentDate.format('jYYYY-jMM-jDD'),
            today: currentDate.format('jYYYY/jMM/jDD') === moment().format('jYYYY/jMM/jDD')
        });
        currentDate.add(1, 'day');
    }

    const remaining = 42 - arrayOfDate.length;

    for (let i = 1; i <= remaining; i++) {
        arrayOfDate.push({
            currentMonth: false,
            date: lastDateOfMonth.add(1, 'day').format('jYYYY-jMM-jDD')
        });
    }

    return arrayOfDate;
};
