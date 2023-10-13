export default function (num){
    return `$${Number(num.toFixed(1)).toLocaleString()} `;
}