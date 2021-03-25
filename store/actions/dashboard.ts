import {
  SAVE_FAVOURITES,
  SAVE_NEWS,
  SAVE_CONTACTS,
  SAVE_PROJECTS
}
  from './ActionTypes';


// import { getUserFavourites } from "../apiService";


// export function fetchFavourites (userID: number) {
//   return function (dispatch) {
//     getUserFavourites(userID)
//       .then((favourites: []) => {
//         dispatch(setFavourites(favourites));
//       })
//   };
// }

// export function fetchNews () {
//   return function (dispatch) {
//     getAllNews()
//       .then((news: []) => {
//         dispatch(setNews(news));
//       })
//   };
// }

// export function fetchContacts () {
//   return function (dispatch) {
//     getContacts()
//       .then((contacts: []) => {
//         dispatch(setContacts(contacts));
//       })
//   };
// }

// export function fetchProjects () {
//   return function (dispatch) {
//     getProjects()
//       .then((projects: []) => {
//         dispatch(setProjects(projects));
//       })
//   };
// }



export const setFavourites = (favourites: []) => ({
  type: SAVE_FAVOURITES,
  payload: {
    favourites
  },
});

export const setNews = (news: []) => ({
  type: SAVE_NEWS,
  payload: {
    news
  },
});


export const setContacts = (contacts: []) => ({
  type: SAVE_CONTACTS,
  payload: {
    contacts,
  },
});


export const setProjects = (projects: []) => ({
  type: SAVE_PROJECTS,
  payload: {
    projects,
  },
});

