export default async function EmployeeByID(){
    await new Promise((resolve)=>setTimeout(resolve,5000))

    return(
        <>
            <h1>By id employee</h1>
        </>
    )
}