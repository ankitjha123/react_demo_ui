import React,{ Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'

import Book from './Book/Book'
import Genre from './Genre/Genre'
import classes from './Books.css'
import AlertContainer from '../../Utils/Alert/Alert'
import SpinnerContainer from '../../Utils/Spinner/Spinner'
import imgUrl from '../../assets/images/cartographer.png'

class Books extends Component {
    constructor(props){
        super(props);
    }

    state = {
        books: [],
        error: null,
        loading: false,
        url: "DEFAULT_URL",
        searchProp : null,
        errorMsg : 'Oh snap! You got an error!'
    }

    componentDidMount(){
        document.body.style.backgroundImage=`url(${imgUrl})`;
        if (this.props.searchParam !== null && this.props.searchParam !== undefined) {
            this.makeRequest(this.props.searchParam);
        } else {
            this.makeRequest();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
   
        if (this.props.searchParam !== null && this.props.searchParam !== undefined) {
            if (prevProps.searchParam != this.props.searchParam || this.searchProp != null) {
                this.makeRequest(this.props.searchParam);
            }
        }
        
        if(prevState.url !== this.state.url){
            this.makeRequest();
        }
    }s

     makeRequest = function(urlParam){
        var urlConstructor;
        urlParam ? urlConstructor = `SEARCH_URL${urlParam}` : urlConstructor = this.state.url;
        axios.get( urlConstructor ,{
            method: 'GET',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        useCredentails: true,
        credentials: 'same-origin',
        }).then( resp => {
            if (resp.data.length === 0 || resp.data === null) {
                this.setState({error: true, errorMsg: 'No Books Found :(', url: urlConstructor});
            } else {
                this.setState({books: resp.data, loading : true, url: urlConstructor});
            }
        })
        .catch((error)=>{
            this.setState({error: true, url: urlConstructor});
            console.log(error);

        });
    }

    genreSelectionHandler = (genreName) => {
        var customUrl;
        switch (genreName.toLowerCase()) {
            case 'culture':
                customUrl = "URL_ONE";
                break;
            case 'mythology':
                customUrl = "URL_TWO";
                break;
            case 'biographies':
                customUrl = "URL_THREE";
                break;
            case 'kids':
                customUrl = "URL_FOUR";
                break;
        }
        if (this.state.url !== customUrl) {
            this.setState({loading : false, books: [], error: null, url: customUrl});
            // this.props.history.push(customUrl)
        }
    }

    render(){
        var bookList, genreList=["All Books", "Culture", "Biographies", "Mythology", "Kids"], genreContainers;

        genreContainers = genreList.map((elem)=>{
            return <Genre  id={elem.toLowerCase()} key={elem} clicked = {() => this.genreSelectionHandler(elem)} >{elem}</Genre>
        })

        bookList =  <AlertContainer heading= {this.state.errorMsg}>Something went wrong while retrieving books!!!</AlertContainer>

        if (!this.state.error) {
            if (!this.state.loading) {
                bookList = <SpinnerContainer/>
            } else {
                bookList = this.state.books.map( book => {
                    return <Book key= {book.id} id={book.id} title={book.name} author = {book.author} imageSrc = {book.image} description = {book.description}/>;
                });
            }
        }

        return (
            <>
                <div className={classes.CardsContainer}>
                    <section>
                        <Container fluid>
                        <div className={classes.GenreContainer}>
                            <div className="d-flex flex-row">
                                {genreContainers}
                            </div>
                        </div>
                        <hr></hr>
                            <div className={classes.BooksGridView}>
                                {bookList}
                            </div>
                        </Container>
                    </section>
                </div>  
            </>
        )
    }

}

export default Books;
