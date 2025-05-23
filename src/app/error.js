'use client'

export default function Error({error, reset}){
    return(
        <div>
            <h2>{error.message || 'Try again later' }</h2>
            <button
                onClick={()=>reset()}
            >
                try again
            </button>
        </div>
    )
}