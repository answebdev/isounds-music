import React from 'react';
import { Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import { ISearchState as Props } from '../common/types';
import classes from '../styles/Input.module.css';

interface IProps {
  searchTerm: Props['searchTerm'];
  isNotFound: Props['isNotFound'];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<IProps> = ({ searchTerm, isNotFound, setSearchTerm }) => {
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <p data-testid='search-text'>Search for your favorite artists</p>
            <InputGroup className='mb-3'>
              <FormControl
                data-testid='input'
                type='text'
                placeholder='Search Artists'
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
              />
            </InputGroup>
            {isNotFound ? (
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
