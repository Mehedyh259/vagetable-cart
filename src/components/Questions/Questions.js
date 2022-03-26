import React from 'react';

const Questions = () => {
    return (
        <div className="container my-3">
            <h1 className='text-center'>QUESTION AND ANSWER SECTION</h1>
            <div className="row">
                <div className="col-md-6 col-sm-11 col-12 p-3">
                    <h2>Difference Between Props And State</h2>
                    <p>
                        State is a data structure with default value. Props are components configuration to pass value. We can Pass value from parent to child using props. Props value cannot be changed that means props are immutable. State value can be changed that means state is mutable. Function can be passed using props. State value can be changed using a function.
                    </p>
                </div>
                <div className="col-md-6 col-sm-11 col-12 p-3">
                    <h2>How useState Works ?</h2>
                    <p>
                        useState is a hook. useState allows us to declare state variable with a default value. useState allows us functional component to have state variable. React always keep track of this state variable to keep it up to date and render it everytime.useState can only be use in funtional component

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Questions;