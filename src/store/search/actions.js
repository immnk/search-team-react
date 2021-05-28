import axios from 'axios';

import config from '../apiConfig';

const actions = (store) => {
  const handleSearchInput = (state, event) => ({
    search: { ...state.search, search: event.target.value }
  });

  const fetchUsersFromBackend = (state) => {
    store.setState({
      search: {
        ...state.search,
        loading: true
      }
    });
    axios
      .get(config.USERS_API)
      .then((response) => {
        store.setState({
          search: {
            ...state.search,
            loading: false,
            data: response.data,
            hasData: true
          }
        });
      })
      .catch((error) => {
        store.setState({
          search: {
            ...state.search,
            error: true,
            errorMessage: error.message,
            loading: false
          }
        });
      });
  };

  return {
    handleSearchInput,
    fetchUsersFromBackend
  };
};

export default actions;
