import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./column-display";
import { fetchMovies, fetchTvShows } from './query';
import { useQuery } from "@tanstack/react-query";


export const Home = () => {
    const [displayType, setDisplayType] = useState("Movies");

    const {data: movieData, isLoading: isLoadingMovies} = useQuery({queryKey: ["movies"], queryFn: fetchMovies});
    const {data: tvShowData, isLoading: isLoadingTvShows} = useQuery({queryKey: ["tvshows"], queryFn: fetchTvShows});

    return (
        <div style={{marginTop:"30px"}}>
            <Button.Group>
                <Button color={displayType === "Movies" ? "blue" : undefined} onClick={() => setDisplayType("Movies")}>
                    Movies
                </Button>
                <Button color={displayType === "Tv Shows" ? "blue" : undefined} onClick={() => setDisplayType("Tv Shows")}>
                    Tv Shows
                </Button>
            </Button.Group>

            {isLoadingMovies || isLoadingTvShows ? (
                <div>Loading...</div>
            ) : (
            <div style={{marginTop:"20px"}}>
                {displayType === "Movies" ? <ColumnDisplay data={movieData.results} displayType={displayType}/> : <ColumnDisplay data={tvShowData.results} displayType={displayType}/>}
            </div>
            )}
        </div>
        
    )
}