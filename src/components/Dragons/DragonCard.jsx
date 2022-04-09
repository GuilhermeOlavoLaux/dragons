import { Fragment } from "react";

export default function DragonCard({ dragonName }) {

    return (
        <Fragment>
            <div className="dragon-card">
                <h1>{dragonName}</h1>
            </div>
        </Fragment>
    )


}