export const handleInputChange = (event) => {
    this.setState({
        [event.currentTarget.name]: event.target.value
    });
};

export const handleCheckboxChange = (event) => {
    this.setState({
        [event.currentTarget.name]: event.target.checked
    });
};