import Hero from './Hero'

// tmdb API Key: 90d7018278ec88fc70a341903f492114
// Example URL: https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_keywords=star%20wars

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResults, "are the search results")
    return (
        <div>
            <Hero text={title} />
      
        </div>
    )
}

export default SearchView;