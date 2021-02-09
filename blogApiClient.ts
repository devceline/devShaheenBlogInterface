import axios from "axios";
import {Blog} from "./model"

const client = {
    baseUrl: "https://devshaheen.com/api",
    limit: 5,
    getBlogAsync: async function(id: string)  {
        const rq = await axios.get(`${this.baseUrl}/blogs/${id}`);;
        return rq.data as Blog;
    },
    getBlog: function(id: string, callback: (blog: Blog) => void): void {
        axios.get(`${this.baseUrl}/blogs/${id}`).then(res => {
            if(res.status === 200){
                callback(res.data as Blog);
            }
        }).catch(err => {
            console.log(err);
        })
    },
    getBlogs: function(page: number, tag: string | null, callback: (blogs: Blog[]) => void): void {
        console.log(`Calling.. ${this.baseUrl}/blogs?page=${page}&limit=${this.limit}${tag? `&tag=${tag}` : ""}`);
        axios.get(`${this.baseUrl}/blogs?page=${page}&limit=${this.limit}${tag? `&tag=${tag}` : ""}`).then(res => {
            if(res.status === 200){
                callback(res.data as Blog[]);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export default client;




