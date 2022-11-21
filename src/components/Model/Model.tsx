export interface MoneyType{
    id:number,
    type:'income' | 'expense' | ''
    title:string|'',
    price:number

}
interface optionType{
    id:number,
    value:'income'|'expense'|'',
    title:string
}
export const options:optionType[]=[
    {id:1,value:'expense',title:'هزینه'},
    {id:2,value:'income',title:'درآمد'},
]