import url from "./url"
import axios from "axios"

const GetNews = async (search, kategori) => {
    return await axios.get(url.news(search, kategori))
}

const GetLatestNews = async () => {
    return await axios.get(url.latestNews)
}

const GetPopularNews = async () => {
    return await axios.get(url.popularNews)
}


export default {
    GetNews,
    GetLatestNews,
    GetPopularNews
}
