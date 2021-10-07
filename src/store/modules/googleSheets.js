
const actions = {
  async getSheets({ commit }) {
      
    fetch(api_url)
        .then(res => res.json())
        .then(data => {
            commit("GETTING_SHEETS_SUCCESS", data.feed.entry);
        })
        .catch((error) => {
            console.error('Error:', error);
            commit("GETTING_SHEETS_FAILURE", error)
        });

    // let response = await fetch(url)
    
    // let link_list = await response.json()
     
  },
};

const mutations = {
    GETTING_SHEETS_SUCCESS: (state, data) => (state.sheets = data),
    GETTING_SHEETS_FAILURE: (state, data) => (state.error = data),

};

const getters = {
  sheetState: state => state,
};

const state = {
  sheets: []
};

export default {
  state,
  getters,
  actions,
  mutations
};