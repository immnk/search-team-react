import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './Footer.css';

const Footer = ({ className }) => {
  return (
    <section className={classNames(css.root, className)}>
      <figure className={css.footerImg} />
      <section className={css.wrapper}>
        <h3>Developed by Mani</h3>
        <div className={css.linkWrapper}>
          <aside className={css.aside}>
            <dl>
              <dt>Source Code</dt>
              <dd>
                <a
                  href="https://github.com/immnk/search-team-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/immnk/search-team-react
                </a>
              </dd>
              <dt>Hosted on</dt>
              <dd>
                <a href="https://serene-knuth-d39e99.netlify.app/" target="_blank" rel="noreferrer">
                  https://serene-knuth-d39e99.netlify.app/
                </a>
              </dd>
            </dl>
          </aside>
          <aside className={css.aside}>
            <dl>
              <dt>email me</dt>
              <dd>
                <a href="mailto:im.manikanta@gmail.com">im.manikanta@gmail.com</a>
              </dd>
              <dt>Call me</dt>
              <dd>
                <a href="tel:+6581214525">+65-81214525</a>
              </dd>
            </dl>
          </aside>
        </div>
      </section>
    </section>
  );
};

Footer.defaultProps = {
  className: undefined
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
