function Display(datas)
{
    const {name,a,arr,obj}=datas;
    return (
        <>
        <h1>Hello I am {name} my Age is {a}</h1>
        <h2>{obj.name}{obj.gender}</h2>
        <h3>Array datas</h3>
        <ul>
            {
                arr.map((d,ind)=>{
                return (
                <li key={ind}>{d}</li>
            )
                }
            )
            }
        </ul>
        </>
    )
}
export default Display