export const currency = (number) =>{
    return 'Rp ' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}