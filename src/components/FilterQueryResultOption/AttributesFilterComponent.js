import React from 'react';
import { Form } from 'react-bootstrap';

const AttributesFilterComponent = () => {
    return (
        <>
            {[{ Color: ["red", "blue", "green"] }, { Ram: ["1 TB", "2 TB", "3 TB"] }].map((item, idx) => <div key={idx} className={"mb-3"}>   <Form.Label>{Object.keys(item)}</Form.Label>{
                item[Object.keys(item)].map((i, idx) => (<Form.Check key={idx} type='checkbox' id='default-checkbox' label={i} />))
            }

            </div>)}


        </>
    );
};

export default AttributesFilterComponent;