const rootElement = document.getElementById('root');

/*const element = document.createElement('div');
element.textContent = 'Hello World';
element.className = 'container';
rootElement.appendChild(element);*/


/*const element = React.createElement(
    'div',
    {
        className: 'container',
        children: 'Hello World 1'
    }
);*/


const element = <div className="container">Hello World 2</div>;


ReactDOM.createRoot(rootElement).render(element);
