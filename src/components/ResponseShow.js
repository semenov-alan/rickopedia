import React from "react";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
export default class ResponseShow extends React.Component {
    render() {
        let response = JSON.parse(this.props.response);
        return(<> {window.location.pathname == "/new-bank" ?(response ?(<h3>Банк успешно создан</h3>) :(<h3>Банк с таким именем уже существует</h3>)) : response ?(<h3>Банк успешно обновлен</h3>) :(<h3>Банк с таким именем не найден</h3>)} </>);
    }
}
