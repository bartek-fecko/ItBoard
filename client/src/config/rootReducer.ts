import posts from '#/store/PostsStore/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   posts,
});

export default rootReducer;
