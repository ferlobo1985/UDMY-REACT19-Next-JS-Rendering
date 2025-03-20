import Link from 'next/link'

export default function PageNotFound(){
    return(
        <div>
            <h1>404 page not found</h1>
            <Link href="/">Back home</Link>
        </div>
    )
}