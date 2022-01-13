import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spinner from './misc/Spinner';
import PlaceholderImg from '../img/no-image-available.webp';
import classes from '../styles/ArtistResults.module.css';
import { Row, Col, Card } from 'react-bootstrap';

interface IProps {
  artists: {
    strArtist: string;
    strArtistWideThumb: string;
    strGenre: string;
    strCountry: string;
    strWebsite: string;
    idArtist: string;
  }[];
  isLoading: boolean;
  isNotFound: boolean;
}

const ArtistResults: React.FC<IProps> = ({
  artists,
  isLoading,
  isNotFound,
}) => {
  return (
    <div>
      <Helmet>
        <title>iSounds Music | Search Artists</title>
      </Helmet>

      {artists.map((artist) => {
        return (
          <div className={classes.OuterContainer}>
            <div className={classes.Container}>
              <Row key={artist.idArtist}>
                <Col md={12}>
                  {isNotFound ? (
                    <div></div>
                  ) : (
                    <Card className='text-center'>
                      <Card.Header>
                        <span className={classes.CardHeader}>
                          <strong>{artist.strArtist}</strong>
                        </span>
                      </Card.Header>
                      <Card.Body>
                        <Card.Img
                          className={classes.MainImage}
                          variant='top'
                          src={
                            artist.strArtistWideThumb
                              ? artist.strArtistWideThumb
                              : PlaceholderImg
                          }
                          alt={artist.strArtist}
                        />
                        <p></p>
                        <Card.Text>
                          <strong>Genre:</strong> {artist.strGenre}
                        </Card.Text>
                        <Card.Text>
                          <strong>Origin:</strong> {artist.strCountry}
                        </Card.Text>
                        <Card.Text>
                          <strong>Website: </strong>
                          <a
                            className={classes.WebsiteLink}
                            href={`https://${artist.strWebsite}`}
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            {artist.strWebsite}
                          </a>
                        </Card.Text>
                        <br />
                        <Link
                          className={classes.Link}
                          to={`artist/${artist.idArtist}`}
                        >
                          Albums
                        </Link>
                        <p></p>
                      </Card.Body>
                    </Card>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        );
      })}

      {!isLoading ? <div className='text-center'></div> : <Spinner />}
    </div>
  );
};

export default ArtistResults;
