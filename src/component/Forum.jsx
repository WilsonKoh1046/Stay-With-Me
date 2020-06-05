import React, { Component } from 'react';
import Message from './Message';
import '../style/forum.css';
import Pagination from 'react-js-pagination';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            activePage: 1,
            itemPerPage: 1
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/messages")
        .then(response => response.json())
        .then(data => {
            this.setState({people: data});
        })
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }
    
    render() {
        let end = this.state.itemPerPage * this.state.activePage;
        let start = end - (this.state.itemPerPage - 1);
        let pageCollection = [];
        if (end > this.state.people.length) {
            end = (end- this.state.itemPerPage) + (this.state.itemPerPage - (end - this.state.people.length));
        }
        for (let i = start - 1; i < end; i++) {
            pageCollection.push(this.state.people[i]);
        }
        return (
                <div className="forum-section">
                    <h2 style={{color: "black"}}>Messages To Miki</h2>
                    <h3>Wish To Say Something to Miki? Drop An Email At Example@email.com Now!</h3>
                    {pageCollection.map((individual) => {
                        return <Message person={individual}/>
                    })}
                    {/* only render pagination button if there's messages */}
                    {pageCollection.length > 0 && 
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemPerPage}
                            totalItemsCount={this.state.people.length}
                            pageRangeDisplayed={5}
                            itemClass="page-item"
                            linkClass="page-link"
                            onChange={this.handlePageChange.bind(this)}
                        />
                    }
                </div>
        );
    }
}

export default Forum;