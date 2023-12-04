import React from "react";
import Button from "./Button";

const ButtonList = () => {
    return <div className="flex m-3"> 
        <Button name="All"/> 
        <Button name="Gaming"/> 
        <Button name="Songs"/> 
        <Button name="Cricket"/> 
        <Button name="Live"/> 
        <Button name="News"/> 
        <Button name="Socker"/> 
        <Button name="Cooking"/> 
    </div>
}

export default ButtonList;