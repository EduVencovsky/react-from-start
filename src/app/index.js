import React from "react";
import ReactDOM from "react-dom";
import styles from './index.scss'

function App(){
    debugger
    return (
        <div className={styles.main}>Hello World</div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));