export async function StreamOne(){
    await new Promise((resolve)=>setTimeout(resolve,2000))

    return(
        <div>
            Stream ONE
        </div>
    )
}


export async function StreamTwo(){
    await new Promise((resolve)=>setTimeout(resolve,5000))

    return(
        <div>
            Stream TWO
        </div>
    )
}