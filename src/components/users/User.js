import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="avatar"
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1" target="_blank">
              Github Page
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    Username: <strong>{login}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    Company: <strong>{company}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    Website: <strong>{company}</strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-grey">Followers: {followers}</div>
          <div className="badge badge-grey">Following: {following}</div>
          <div className="badge badge-grey">Public Repos: {public_repos}</div>
          <div className="badge badge-grey">Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
