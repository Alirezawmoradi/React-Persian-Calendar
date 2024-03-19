import moment from "jalali-moment";

export const GenerateDate = (date) => {
    let newDate = moment(date);
    let year = newDate.jYear();
    let month = newDate.jMonth();

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

    const remaining = 42 - arrayOfDate.length;

    for (let i = 1; i <= remaining; i++) {
        arrayOfDate.push({
            currentMonth: false,
            date: lastDateOfMonth.add(1, 'day').format('jYYYY-jMM-jDD')
        });
    }

    return arrayOfDate;
};
