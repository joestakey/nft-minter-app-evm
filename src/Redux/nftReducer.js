const initialState = {
  nftIndex: [1],
};

const nftReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NFT_INDEX':
      return {
        ...state,
        nftIndex: action.payload,
      };
    default:
      return state;
  }
};

export default nftReducer;
