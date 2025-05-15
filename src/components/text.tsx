import React, { useEffect, useState } from "react";

interface TextProps {
    text: string;
    nadpis: boolean;
}

export const Text = (props: TextProps) => { 
    if (props.nadpis) {
        return <h1>{props.text}</h1>
    }
    return <span>{props.text}</span>
}  