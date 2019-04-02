import React from "react";
import ReactDOM from "react-dom";
import styles from './index.scss'

function App(){
    return (
        <div className={styles.hey}>Hello World</div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));