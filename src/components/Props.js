// export default function ListProps({data, price, color}){
//     return (
//         <div>
//             <h1>{data}</h1>
//             <p>{price}</p>
//             <p>{color}</p>
//         </div>
//     )
// }

export default function ListProps(props){
    const {data, price, series} = props
    
    return (
        <div>
            <h1>{data}</h1>
            <p>{price}</p>
            <p>{series}</p>
        </div>
    )
}