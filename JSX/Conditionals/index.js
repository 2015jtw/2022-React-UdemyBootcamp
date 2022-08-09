function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <di>
                <h1>Your number is .... {num}</h1>
                <p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
            </di>
        )
    }
}

ReactDOM.render(<NumPicker />, document.querySelector("#root"));