import React from 'react';
import { Pagination } from 'react-bootstrap';

const PagintationComponent = () => {
    return (
        <Pagination>
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    );
};

export default PagintationComponent;