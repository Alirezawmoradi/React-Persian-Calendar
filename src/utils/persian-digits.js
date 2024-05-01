const delimiter = ' و ';
const negative = 'منفی ';

const letters = [
    ['', 'یک', 'دو', 'سه ', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
    ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست'],
    ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
    ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
    ['', ' هزار', ' میلیون', ' میلیارد', ' بیلیون', ' بیلیارد', ' تریلیون', ' تریلیارد',
        ' کوآدریلیون', ' کادریلیارد', ' کوینتیلیون', ' کوانتینیارد', ' سکستیلیون', ' سکستیلیارد', ' سپتیلیون',
        ' سپتیلیارد', ' اکتیلیون', ' اکتیلیارد', ' نانیلیون', ' نانیلیارد', ' دسیلیون', ' دسیلیارد'
    ],
];

const prepareNumber = (num) => {
    let out = num;
    if (typeof out === 'number') {
        out = out.toString();
    }

    //make first part 3 chars
    if (out.length % 3 === 1) {
        out = `00${out}`;
    } else if (out.length % 3 === 2) {
        out = `0${out}`;
    }
    // Explode to array
    return out.replace(/\d{3}(?=\d)/g, '$&*').split('*');
};

//tinyNumToWord convert 3tiny parts to word
const tinyNumToWord = (num) => {
    // return zero
    if (parseInt(num, 0) === 0) {
        return '';
    }
    const parsedInt = parseInt(num, 0);
    if (parsedInt < 10) {
        return letters[0][parsedInt];
    }
    if (parsedInt <= 20) {
        return letters[1][parsedInt - 10];
    }
    if (parsedInt < 100) {
        const one = parsedInt % 10;
        const ten = (parsedInt - one) / 10;
        if (one > 0) {
            return letters[2][ten] + delimiter + letters[0][one];
        }
        return letters[2][ten];
    }
    const one = parsedInt % 10;
    const hundreds = (parsedInt - (parsedInt % 100)) / 100;
    const ten = (parsedInt - ((hundreds * 100) + one)) / 10;
    const out = [letters[3][hundreds]];
    const secondPart = ((ten * 10) + one);

    if (secondPart === 0) {
        return out.join(delimiter);
    }

    if (secondPart < 10) {
        out.push(letters[0][secondPart]);
    } else if (secondPart <= 20) {
        out.push(letters[1][secondPart - 10]);
    } else {
        out.push(letters[2][ten]);
        if (one > 0) {
            out.push(letters[0][one]);
        }
    }

    return out.join(delimiter);
};

const Num2persian = (input) => {
    // Clear Non digits
    input = input.toString().replace(/[^0-9.-]/g, '');
    let isNegative = false;
    // Declare Parts
    let decimalPart = '';
    let integerPart = input;
       // Split to sections
    const slicedNumber = prepareNumber(integerPart);
    // Fetch Sections and convert
    const out = [];
    for (let i = 0; i < slicedNumber.length; i += 1) {
        const converted = tinyNumToWord(slicedNumber[i]);
        if (converted !== '') {
            out.push(converted + letters[4][slicedNumber.length - (i + 1)]);
        }
    }
    return (isNegative?negative:'') + out.join(delimiter) + decimalPart;
};
export default Num2persian