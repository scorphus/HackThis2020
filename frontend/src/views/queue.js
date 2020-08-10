import React from "react";

function queue() {
    return (
        <div>
            <h1>This is what you queued up!</h1>
        </div>
    );
}

export default Home;


/*
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);



function createElement(type, props = {}, children = []) {
    if (typeof window !== 'undefined') {
        const el = document.createElement(type);
    }

    Object.keys(props)


    return el;
}


function render(el, rootEl) {
    rootEl.appendChild(el);
}


const Hello = () => {
    return createElement('span', {className: 'big-and-pretty'}, ['Hello webcamp!']);
    //return <span className={'big-and-pretty'}Hello webcamp!</span>;
}

render(Hello(), document.getElementById('root'));

//REACTDOM.render(Hello(), document.getElementById('root'));
