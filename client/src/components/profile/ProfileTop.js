import React from 'react';
import PropTypes from 'prop-types';

function checkUrl(url) {
  var prefix = 'http://';
  if (url.substr(0, prefix.length) !== prefix) {
    url = prefix + url;
  }
  return url;
}

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img my-1' src={avatar} alt='' />
      <h1 class='large'>{name}</h1>
      <p class='lead'>
        {status}
        {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div class='icons my-1'>
        {website && (
          <a href={checkUrl(website)} target='_blank' rel='noopener noreferrer'>
            <i class='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a
            href={checkUrl(social.twitter)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a
            href={checkUrl(social.facebook)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-facebook fa-2x' />
          </a>
        )}

        {social && social.linkedin && (
          <a
            href={checkUrl(social.linkedin)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-linkedin fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a
            href={checkUrl(social.youtube)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-youtube fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a
            href={checkUrl(social.instagram)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
