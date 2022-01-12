import React from 'react';
import { Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import classes from '../styles/Input.module.css';

import { ISearchState as Props } from './Search';

// interface ISearchProps {
//   artists: {
//     strArtist: string;
//     strArtistWideThumb: string;
//     strGenre: string;
//     strCountry: string;
//     strWebsite: string;
//     idArtist: string;
//     // Album info:
//     // strAlbumThumb: string;
//     // strAlbum: string;
//     // intYearReleased: string;
//     // strLabel: string;
//     // strDescriptionEN: string;
//   }[];
//   searchTerm: string;
//   isNotFound: boolean;
//   setSearchTerm: string;
// }

interface IProps {
  // artists: Props['artists'];
  searchTerm: Props['searchTerm'];
  isNotFound: Props['isNotFound'];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

// const Input = (props) => {
const Input: React.FC<IProps> = ({
  // artists,
  searchTerm,
  isNotFound,
  setSearchTerm,
}) => {
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
                value={searchTerm}
                // onChange={(e) => props.setSearchTerm(e.target.value)}
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
// function setSearchTerm(value: string): void {
//   throw new Error('Function not implemented.');
// }
