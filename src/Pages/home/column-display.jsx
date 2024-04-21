import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";

export const ColumnDisplay = (props) => {

    const {data, displayType} = props;

    return (
        <div>
            <Grid columns={4} stackable centered verticalAlign="top" padded="vertically">
                {data.map((displayData) => {
                    return (
                        <Grid.Column key={displayData.id}>
                            <Card.Group>
                                <Link to={`/${displayData === "Movies" ? "movie" : "tvshow"}/${displayData.id}`}>
                                <Card fluid image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} 
                                header={displayType === "Movies" ? displayData.title : displayData.name}
                                meta={`Release Data: ${displayData.release_date} | Rating: ${displayData.vote_average}`} 
                                description={displayData.overview.slice(0, 350) + "..."}/>
                                </Link>
                            </Card.Group>
                        </Grid.Column>
                     )    
                } )}
            </Grid>
        </div>
    )
}