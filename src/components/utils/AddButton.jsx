import { Fragment } from "react";

export default function AddButton({text}) {


    return (
        <Fragment>
            <button className="add-button">{text}</button>
        </Fragment>
    )
}