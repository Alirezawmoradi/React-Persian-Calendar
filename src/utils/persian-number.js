export const PersianNumber = (number) => {
    return new Intl.NumberFormat('fa-IR', { style: "decimal" }).format(number).replace(/٬/g, "");
};