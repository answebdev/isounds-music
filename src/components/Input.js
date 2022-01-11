import React from 'react';
import { Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import classes from '../styles/Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <p>Search for your favorite artists</p>
            <InputGroup className='mb-3'>
              <FormControl
                type='text'
                placeholder='Search Artists'
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
              />
            </InputGroup>
            {props.isNotFound ? (
              <div>
                <p className={classes.ErrorMsg}>
                  Sorry, we couldn't find anything matching your search
                  criteria. Please try again.
                </p>
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Input;
