import axios from "axios";

export default class PostService {
    static async getAll(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                id:id, 
            }
        })
        return response;
    }
}