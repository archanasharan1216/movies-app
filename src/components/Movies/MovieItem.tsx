import React from 'react';
import Movie from '../../models/movie';
import Card from '../UI/Card';

const MovieItem: React.FC<{items: Movie[]}> = (props) => {
    
    return(
        <React.Fragment>
           {props.items.map((item)=>(
               <Card id={item.id} title={item.title} type={item.type} year={item.year} image={item.image}></Card>
           ))}
        </React.Fragment>
    );
};

export default MovieItem;