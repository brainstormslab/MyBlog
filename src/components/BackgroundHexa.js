import React from 'react'
import styles from './BackgroundHexa.module.scss'

function BackgroundHexa() {
/*
    const Hexagon = ({ value }) => {
        const classes = 'hexagon r' + value;
        return <div className={classes} key={value}></div>
    };

    function addHexes(r) {
        let arr = [];
        for (var i = 1; i <= (6 * r); i++) {
            arr.push(<Hexagon value={r} key={i} />);
        }
        return arr;
    }

    const GroupedHexes = ({ value }) => {
        return <div id="loadingcontainer">{ addHexes(value) }</div>;
    };
*/
    return (
        <div>
            <div className={[styles.hexagon, "r0"].join(' ')}></div>
        </div>
    )
}
export default BackgroundHexa