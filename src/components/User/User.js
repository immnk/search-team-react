import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './User.css';

const User = ({ className, user }) => {
  const { id, name, username, email, address, phone } = user;
  return (
    <section className={classNames(css.root, className)}>
      <figure className={css.figure}>
        <img
          src={`https://source.unsplash.com/collection/888146/300x300?id=${id}&name=${name}`}
          alt={name}
        />
        {/* <img src={`https://randomuser.me/api/portraits/med/women/${id}.jpg`} alt={name} /> */}
      </figure>
      <aside className={css.details}>
        <h3>{name}</h3>
        <p className={css.username}>{username}</p>
        <a href={`mailto:${email}`}>
          <span className={classNames('material-icons', css.icon)}>contact_mail</span>
          <span>{email}</span>
        </a>
        <a href={`tel:${phone}`}>
          <span className={classNames('material-icons', css.icon)}>call</span>
          <span>{phone}</span>
        </a>
        <a
          href={`http://www.google.com/maps/place/${address.geo.lat},${address.geo.lng}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className={classNames('material-icons', css.icon)}>place</span>
          <span>Locate Me</span>
        </a>
      </aside>
    </section>
  );
};

User.defaultProps = {
  className: undefined,
  user: {}
};

User.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.shape({
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string
      })
    })
  })
};

export default User;
