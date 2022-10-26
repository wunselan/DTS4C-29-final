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
        return `http://api.mediastack.com/v1/news?access_key=d05bee7fe110e797ab5b2bd17661c041&languages=en&sources=fullcomment,bbc,cnn`+searchKey;
    },
    latestNews: 'http://api.mediastack.com/v1/news?access_key=d05bee7fe110e797ab5b2bd17661c041&languages=en&sources=fullcomment,cnn,bbc&offset=0&limit=3',
    popularNews: 'http://api.mediastack.com/v1/news?access_key=d05bee7fe110e797ab5b2bd17661c041&languages=en&sources=fullcomment,cnn,bbc&offset=0&limit=3&sort=popularity'
}

export default url