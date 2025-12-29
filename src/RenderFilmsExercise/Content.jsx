import React, { Component } from 'react'
import films from '../data/films.json'
import styles from './Content.module.css'

export default class Content extends Component {

    renderFilms(){
        return films.map((film, index) => {
            return <div className='col-2 mb-4' key={index}>
                <div>
                    <img  className={styles.img} src={film.poster_url} alt="" />
                </div>
                <div>
                    <p className={styles.title}> {film.title} </p>
                    <p className={styles.description}>{film.overview.length > 20 ? film.overview.substring(0, 80) + '...' : film.overview}</p>
                </div>
            </div>
        })
    }

  render() {
    return (
      <>
      <div className={styles.bgContent}>
          <div className='row ' >
            {this.renderFilms()}
        </div>
      </div>
      </>
    )
  }
}
