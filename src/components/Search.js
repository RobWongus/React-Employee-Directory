import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


class Search extends Component {
    state = {
        placeholder: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        this.setState({
            placeholder: value
        });
    }
    render() {
        return (
            <div>
            <Form inline className="center-align">
                    <FormControl type="text" value={this.state.placeholder} onChange={this.handleInputChange} placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>

            </Form>
            </div>
        )

    }
}

export default Search;