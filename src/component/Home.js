import React, {useState, useEffect} from 'react'
import Recipe from "./Recipe"

const Home = () => {
    const APP_ID = "6fce45b3"
    const APP_KEY = "5f52a3c553369b154b438f06d0a3f7b2"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("chicken")

    useEffect(() => {
        getRecipe()
     }, [query])

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="home">
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-input" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>

            <div className="recipes">
            {recipes.map((recipe) => (
                <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
                image={recipe.recipe.image} key={recipe.recipe.label}
                ingredients={recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    )
}

export default Home
