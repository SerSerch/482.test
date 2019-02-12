export const handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

export const handleCheckboxChange = (event) => {
    this.setState({
        [event.target.name]: event.target.checked
    });
};