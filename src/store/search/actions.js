import axios from 'axios';

import config from '../apiConfig';

const actions = (store) => {
  const handleSearchInput = (state, event) => ({
    search: { ...state.search, search: event.target.value }
  });

  const handleCategoryChange = (state, category) => ({ search: { ...state.search, category } });

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
    handleCategoryChange,
    fetchUsersFromBackend
  };
};

export default actions;
