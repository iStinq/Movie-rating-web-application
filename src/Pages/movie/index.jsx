import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";

export const Movie = () => {
    const {id} = useParams();
    
    const {data, isLoading} = useQuery({queryKey: ["movie"], queryFn: () => fetchMovieDetails(id)});

    if (isLoading) {
        return <Loader active />;
    }

    return <div>this is a movie</div>
}