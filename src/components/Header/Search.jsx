import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from "mdb-react-ui-kit";

function Search() {
    return (
        <MDBInputGroup>
            <MDBInput label='Search' />
            <MDBBtn rippleColor='dark'>
                <MDBIcon icon='search' />
            </MDBBtn>
        </MDBInputGroup>
    );
}

export default Search;