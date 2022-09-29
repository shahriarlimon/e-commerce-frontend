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
                <FiXCircle className='close icon' />
            </label>
            <div className='chat-wrapper'>
                <div className='chat-header'>
                    <h6>Let's chat - Online</h6>
                </div>
                <div className='chat-form'>
                    <div className='chat-msg'>
                        <p>History</p>

                    </div>
                    <textarea id='client-chat-msg' className='form-control' placeholder='Your text messages' />
                    <button className='btn btn-success btn-block'>Submit</button>

                </div>

            </div>

        </>
    );
};

export default UserChatComponents;