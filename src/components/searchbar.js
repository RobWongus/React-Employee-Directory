import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


class Search extends Component {
    state = {
        result: {},
        placeholder: ""
    };

    // searchMovies = 

    handleInputChange = event => {
        let value = event.target.value;
        this.setState({
            placeholder: value
        });
        
        // handleFormSubmit = event => {
        //     event.preventDefault();
        //     this.state.search
        //     }
        // }
            
    }
    render() {
        return (
            <div>
             <Form inline className="center-align">
                <FormControl type="text" value={this.state.placeholder} onChange={this.handleInputChange} placeholder="Search" className="mr-sm-2" />
                <Button type ="submit" value="" variant="outline-success">Search</Button>
             </Form>
            </div>


            )

        }
}
export default Search;

