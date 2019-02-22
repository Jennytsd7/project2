import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <center>
                    <h3>Student Portal</h3>
                    <h5>Click on the Quiz to be completed</h5>
                    <br></br></center>

                <ListGroup>
                    <ListGroupItem><li><NavLink exact activeClassName="current" to='/takeQuiz'>Quiz 1</NavLink></li></ListGroupItem>
                    <ListGroupItem><li><NavLink exact activeClassName="current" to='/takeQuiz'>Quiz 2</NavLink></li></ListGroupItem>
                    <ListGroupItem><li><NavLink exact activeClassName="current" to='/takeQuiz'>Quiz 3</NavLink></li></ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Home;