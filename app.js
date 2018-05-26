import React from "react";
import ReactDom from "react-dom";

import pageHeader from "./src/components/pageHeader";

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                Hi there!
            </div>
        )
    }
}

ReactDom.render(<AppComponent />, document.getElementById("app"));
