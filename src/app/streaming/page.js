import { StreamOne,StreamTwo } from "@/components/streams";
import { Suspense } from "react";

export default function StreamingComp(){
    return(
        <>
            <Suspense fallback={<p>...loading</p>}>
                <StreamOne/>
            </Suspense>
            <hr/>
            <Suspense fallback={<p>...loading</p>}>
                <StreamTwo/>
            </Suspense>
        </>
    )
}