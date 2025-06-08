'use client';
import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input";

export default function Home() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: "20px",
        }}>
            <InputBox type="text" placeholder="Enter Your Name"/>
            <InputBox type="text" placeholder="Enter Room Code"/> 
            <Button text="Join Room"/>

        </div>
    )
}