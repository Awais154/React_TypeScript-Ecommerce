const CURRENCY_FORMMATER= new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})

export function formatCurrency(number :number){
    return CURRENCY_FORMMATER.format(number)

}