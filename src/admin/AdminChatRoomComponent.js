import React, { Fragment, useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';


const AdminChatRoomComponent = () => {
    const [toast1,closeToast1] = useState(true);
    const close1=()=>closeToast1(false)
    const [toast2,closeToast2] = useState(true);
    const close2=()=>closeToast2(false)

    return (
        <>
            <Toast show={toast1} onClose={close1} className='ms-4 mb-5'>
                <Toast.Header>
                    <strong className='me-auto'>chat with john doe</strong>
                </Toast.Header>
                <Toast.Body>
                    <div style={{ maxHeight: "500px", overflow: "auto" }}>
                        {
                            Array.from({ length: 30 }).map((_, idx) => <Fragment key={idx}>
                                <p className='bg-primary p-3 ms-4 text-light rounded-pill'>
                                    <b>User wrote:</b> Hello world
                                </p>
                                <p>
                                    <b>Admin wrote:</b> So this is the product you want
                                </p>

                            </Fragment>)
                        }
                    </div>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicTextArea'>
                            <Form.Label>Write your text</Form.Label>
                            <Form.Control rows={2} as={"textarea"} />
                        </Form.Group>
                        <Button variant='success' type='submit'>Send</Button>
                    </Form>

                </Toast.Body>
            </Toast>
            <Toast show={toast2} onClose={close2} className='ms-4 mb-5'>
                <Toast.Header>
                    <strong className='me-auto'>chat with john doe</strong>
                </Toast.Header>
                <Toast.Body>
                    <div style={{ maxHeight: "500px", overflow: "auto" }}>
                        {
                            Array.from({ length: 30 }).map((_, idx) => <Fragment key={idx}>
                                <p className='bg-primary p-3 ms-4 text-light rounded-pill'>
                                    <b>User wrote:</b> Hello world
                                </p>
                                <p>
                                    <b>Admin wrote:</b> So this is the product you want
                                </p>

                            </Fragment>)
                        }
                    </div>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicTextArea'>
                            <Form.Label>Write your text</Form.Label>
                            <Form.Control rows={2} as={"textarea"} />
                        </Form.Group>
                        <Button variant='success' type='submit'>Send</Button>
                    </Form>

                </Toast.Body>
            </Toast>
        </>

    );
};

export default AdminChatRoomComponent;