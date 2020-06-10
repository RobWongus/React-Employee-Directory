import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const Searchbar = (props) => {

    return (
        <div>
            <Form inline className="center-align">
                <FormControl 
                    type="text" 
                    value={props.search} 
                    onChange={props.handleInputChange} 
                    placeholder="Search"
                    className="mr-sm-2" 
                />
                <Button 
                    type="submit" 
                    variant="outline-success"
                    onClick={props.searchPeople}
                >
                    Search
                </Button>
            </Form>
        </div>

    )
}

export default Searchbar;

