import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: 'https://picsum.photos/200'
    };
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement() {
        this.state.count += 1;
    }

    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
