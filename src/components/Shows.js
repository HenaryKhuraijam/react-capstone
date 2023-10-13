import '../css/Shows.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Show from './Show';
import { getShowsAction } from '../redux/showsReducer';
import hellsing from '../assets/hellsing.jpg';

const Shows = () => {
  const shows = useSelector((state) => state.shows);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
/* eslint-disable */
  useEffect(() => {
    dispatch(getShowsAction());
  }, []);

  return (
    <div className="shows">
      <section
        className="shows_banner banner"
        style={{
          background: `linear-gradient(to top right, #1f1f1fff,
                #b4b4b400) , url(${hellsing}) no-repeat center top`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="banner__intro">
          <article className="banner__intro__content">
            <h1 className="banner__intro__title">Welcome to MoviesWorld!</h1>
            <p>Explore and enjoy from a list of Movies collection.</p>
            <p>Start with this one....</p>
            <div className="showInfo__summary">
              Hellsing is a 13-part anime based on the manga of the same name.
              The plot is significantly difficult to that of the the manga
              although the characters are the same. The show mainly focuses on
              the hellsing institute that houses the anti-hero named Alucard who
              swore loyalty to the Helsing family many years before. Alucard
              being the first ever vampire takes on a new apprentice named
              Sera's.
            </div>
            <h4 className="tagline">Find next? ...</h4>
            <h5 className="appName">MoviesWorld!</h5>
          </article>
        </div>
      </section>
      <section className="shows__search">
        <form className="sheader__center">
          <SearchIcon />
          <input
            value={search}
            placeholder="Find your show"
            type="text"
            id="search1"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </section>
      <main className="shows__container">
        {shows
          .filter((show) => {
            if (search === "") {
              return true;
            }
            if (show.name.toLowerCase().includes(search.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((show) => (
            <IconButton
              key={show.id}
              onClick={() => navigate(`/showInfos/${show.id}`)}
              className="icon__button--noDeco"
            >
              <Show
                id={show.id}
                name={show.name}
                image={show.image.medium}
                rating={show.rating.average}
                genres={show.genres[0]}
              />
            </IconButton>
          ))}
      </main>
    </div>
  );
};

export default Shows;
