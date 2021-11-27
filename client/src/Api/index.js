import axios from 'axios';
const API = axios.create({baseUrl: 'https://localhost:5000'}); //setting the baseURL for all requests.
API.interceptors.request.use((req) => { //catchs every HTTP request or response and do whatever needs to happen without 
                                            //you even having to think about it.Basically it can be used for authorization
    if(localStorage.getItem("profile")){
        req.headers.authorization =  `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req//with this the backend will be able to access header information and decode the data

});


export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const createItem = (newItem) => API.post("/item", newItem);
export const fetchItems = () => API.get("/item");
export const fetchItemsBySearch = (searchQuery)=> API.get(`/item/search?searchQuery=${searchQuery.search || "none"}`);
