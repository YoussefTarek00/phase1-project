



export const selectFilteredNames = (state, filter) => {
    switch (filter) {
      case "all":
        return state.data;
      case "active":
        return state.data.filter((name) => name.active);
      case "disabled":
        return state.data.filter((name) => !name.active);
      default:
        return state.data;
    }
  };