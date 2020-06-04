import axios from "axios";

export default {
// API Blog Routes
getBlogs: function () {
    return axios.get('/api/blogs');
},

}
