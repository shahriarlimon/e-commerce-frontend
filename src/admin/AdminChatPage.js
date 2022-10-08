import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminNavLinkComponent from '../components/AdminNavLinkComponent';
import AdminChatRoomComponent from './AdminChatRoomComponent';

const AdminChatPage = () => {
    return (
        <div style={{marginBottom:"130px"}}>
             <Row className='m-5'>
            <Col md={2}>
                <AdminNavLinkComponent />
            </Col>
            <Col md={10}>
                <AdminChatRoomComponent />
            </Col>

        </Row>
        </div>
       
    );
};

export default AdminChatPage;