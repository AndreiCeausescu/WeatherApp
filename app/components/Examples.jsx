var React = require('react');
var { Link } = require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-centered">Examples</h1>
            <p>Here are a few example location to try</p>
            <ol>
                <li>
                    <Link to='/?location=Timisoara'> Timisoara, TM</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>

        </div>

    );
}

module.exports = Examples;