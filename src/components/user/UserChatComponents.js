import React from 'react';
import { BsChatDots } from 'react-icons/bs'
import { FiXCircle } from 'react-icons/fi'
import '../../chat.css'
const UserChatComponents = () => {
    return (
        <>
            <input id='check' type={"checkbox"} />
            <label className='chat-btn' htmlFor='check'>
                <BsChatDots className='comment icon' />
                <span className='position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
                <FiXCircle className='close icon' />
            </label>
            <div className='chat-wrapper'>
                <div className='chat-header'>
                    <h6>Let's chat - Online</h6>
                </div>
                <div className='chat-form text-sm'>
                    <div className='chat-msg'>
                        {
                            Array.from({ length: 20 }).map((_, id) => <div><p><b>Your wrote:</b> Hello world!This is a toast message!</p>
                                <p className='bg-primary p-3 ms-4 text-light rounded-pill'><b>Support wrote:</b> Hello world!This is a toast message!</p></div>)
                        }


                    </div>
                    <textarea id='client-chat-msg' className='form-control' placeholder='Your text messages' />
                    <button className='btn btn-success btn-block'>Submit</button>

                </div>

            </div>

        </>
    );
};

export default UserChatComponents;