const actions = () => {
  const handleSearchInput = (state, event) => ({ search: { search: event.target.value } });

  return {
    handleSearchInput
  };
};

export default actions;
