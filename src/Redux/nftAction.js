
const newNftIndex = (payload) => {
  return {
    type: 'NEW_NFT_INDEX',
    payload: payload,
  };
};

export const updateNftIndex = (newIndex) => {
  return (dispatch) => {
    dispatch(newNftIndex(newIndex));
  };
};

