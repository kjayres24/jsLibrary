

import React, { Component } from 'react';
import NytResults from './NytResults'

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '6JAkk679WwdR7yS9mldSGu4LUiGEcIzd';

export default class NytApp extends Component { //
    constructor(props) { //sets up the class and constructs any values present at the creation of the class (props is the property)
        super(props) //
        this.state = { //"this is where we are starting in the object"
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: [] //stores info which we are pulling from the API
        };
    }

    handleChange = (event) => { //name of function and passing in parameter of (event), referring the the diff. input values
        this.setState({ //changing the state, we want the state to look at the info we are typing into the search
            [event.target.name]: event.target.value, //looks for the event and the name and reassign that to a value
        });
    }

    handleSubmit = (event) => { //whenever you submit information, this prevents the page from refreshing
        this.setState({ pageNumber: 0 })
        this.fetchResults()
        event.preventDefault() 
    }

    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url
        fetch(url)
            .then(
                (response) => response.json()
            ).then((data) => {
                this.setState({ results: data.response.docs })
            })
    }

    changePageNumber = (e, direction) => {
        e.preventDefault()
        if (direction === 'down') {
            if (this.state.pageNumber > 0) {
                let newPageNumber = this.state.pageNumber - 1
                this.setState({ pageNumber: newPageNumber })
                this.fetchResults();
            }
        }
        if (direction === 'up') {
            let newPageNumber = this.state.pageNumber + 1
            this.setState({ pageNumber: newPageNumber })
            this.fetchResults();
        }
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <span>Enter a SINGLE search term (required): </span>
                        <input type="text" name="search" onChange={this.handleChange} required /><br />
                        <span>Enter a start date: </span>
                        <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <span>Enter an end date: </span>
                        <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <button className="submit">Submit search</button>
                    </form>
                    {
                        this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
                    }
                </div>
            </div>
        );
    }
}