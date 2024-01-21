import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';
import Spinner from './misc/Spinner';
import PlaceholderImg from '../img/no-album-image-available.webp';
import { Row, Col, Card, Accordion } from 'react-bootstrap';
import classes from '../styles/Artist.module.css';

interface RouterProps {
  id: string;
}

interface MatchIdProps extends RouteComponentProps<RouterProps> {
  album: {
    id: number;
    strArtist: string;
    strGenre: string;
    strAlbumThumb: string;
    strAlbum: string;
    intYearReleased: string;
    strLabel: string;
    strDescriptionEN: string;
  }[];
}

interface LoadingProps {
  isLoading: boolean;
}

const Artist: React.FC<MatchIdProps> = ({ match }) => {
  const [album, setAlbums] = useState<MatchIdProps['album']>([]);
  const [isLoading, setIsLoading] = useState<LoadingProps['isLoading']>(false);

  useEffect(() => {
    fetchAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  const scrollToTop = () => {
    // Polyfill
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const fetchAlbums = async () => {
    // const albumUrl = `https://theaudiodb.com/api/v1/json/${1}/album.php?i=${
    //   match.params.id
    // }`;
    setIsLoading(true);
    const albumUrl = `https://cors-anywhere.herokuapp.com/https://theaudiodb.com/api/v1/json/${2}/album.php?i=${
      match.params.id
    }`;

    const response = await fetch(albumUrl);
    const data = await response.json();

    fetch(albumUrl)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });

    if (data.album) {
      setAlbums(data.album);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {album.map((item) => (
        <Helmet>
          <title key={item.id}>iSounds Music | Albums | {item.strArtist}</title>
        </Helmet>
      ))}

      <div className={classes.OuterContainer}>
        <div className={classes.Container}>
          <div>
            <h1 data-testid='albums' className={classes.Header}>
              Albums
            </h1>
            {!isLoading ? <div className='text-center'></div> : <Spinner />}
          </div>

          <div className={classes.ArtistStyle}>
            {album.map((item) => {
              return (
                <Row key={item.id}>
                  <Col>
                    <Card className={classes.MainCard}>
                      <Card.Img
                        variant='top'
                        src={
                          item.strAlbumThumb
                            ? item.strAlbumThumb
                            : PlaceholderImg
                        }
                        alt={item.strArtist}
                      />
                      <Card.Body>
                        <Card.Title data-testid='album-title'>
                          {item.strAlbum}
                        </Card.Title>
                        <Card.Text data-testid='album-year'>
                          <strong>Year: </strong>
                          {item.intYearReleased}
                          <br />
                          <span data-testid='album-genre'>
                            <strong>Genre: </strong>
                            {item.strGenre}
                          </span>
                          <br />
                          <span data-testid='album-label'>
                            <strong>Label: </strong>
                            {item.strLabel}
                          </span>
                        </Card.Text>

                        <Card.Text>
                          <Accordion defaultActiveKey='1' flush>
                            <Accordion.Item eventKey='0'>
                              <Accordion.Header data-testid='description'>
                                Description
                              </Accordion.Header>
                              <Accordion.Body>
                                {item.strDescriptionEN}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </div>

          <div className={classes.TopParent}>
            <div onClick={scrollToTop}>
              <p data-testid='back-to-top-btn' className={classes.TopButton}>
                BACK TO TOP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
