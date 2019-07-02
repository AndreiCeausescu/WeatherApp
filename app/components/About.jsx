var React = require('react');

var About = () => {
    return (<div>
        <h1 className="text-center">About</h1>
        <p>This is a weather app built on react.</p>
        <p>
            Here are some of the tools I used
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used
            </li>
            <li>
                <a href="http://openweathermap.org">Open weather map</a>
            </li>
        </ul>
    </div>
    );
};

module.exports = About;