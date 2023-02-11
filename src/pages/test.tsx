import type { NextPage } from "next";

const handleClick = async (e: any) => {
    const response = await fetch("/api/test");
    const data = response.json();

    console.log(data);
}

const Test: NextPage = () => {

    return (
        <>
           <button onClick={(e) => handleClick(e)}>Get users</button>
        </>
    )
}

export default Test;