import * as React from "react";
import ScrollWrapper from "../components/ScrollWrapper";
import { useInView } from "react-intersection-observer";
import Head from "next/head";


export default function Temp() {
    const { ref, inView } = useInView({
        threshold: 0
    });

    return (
        <>
            <Head>


            </Head>
            <ScrollWrapper inView={inView}>
                <div ref={ref} className="inview-block">
                    <h2>
                        Element is inside the viewport: <strong>{inView.toString()}</strong>
                    </h2>
                </div>
            </ScrollWrapper>
        </>
    );
}