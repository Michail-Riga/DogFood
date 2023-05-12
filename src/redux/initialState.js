export const LC_NAMING = 'redux_superStore'

export const myInitialState = {
  user: {},
  filter: {
    search: ''
  },
   cart: {}
}

export const getInitialState = () => {
  const data = localStorage.getItem(LC_NAMING);

  return data ? JSON.parse(data) : myInitialState
}















/*export const myInitialState = {
    todos: [],
    counter: 0,
  
  
    user:{},
    filter:{},
    cart:[],
    //favorites
  }
  
  export const getInitState = () => {
    const lc_store = localStorage.getItem('reduxState');
  
    return lc_store ? JSON.parse(lc_store) : myInitialState
  }*/
  