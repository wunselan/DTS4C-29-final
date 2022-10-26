const url = {
    news:     
    (search, kategori) => {
        let searchKey='';
        let kategoriKey='';
        if ( search ) {
            searchKey += `&keywords=${search}`
        }
        if ( kategori ) {
            searchKey += `&categories=${kategori}`
        }
        return `http://api.mediastack.com/v1/news?access_key=370c0980aa1c97bb699dd6eb3a033aa9&languages=en&sources=fullcoment`+searchKey;
    },
    latestNews: 'http://api.mediastack.com/v1/news?access_key=370c0980aa1c97bb699dd6eb3a033aa9&languages=en&sources=fullcomment&offset=0&limit=3',
    popularNews: 'http://api.mediastack.com/v1/news?access_key=370c0980aa1c97bb699dd6eb3a033aa9&languages=en&sources=fullcomment&offset=0&limit=3&sort=popularity'
}

export default url