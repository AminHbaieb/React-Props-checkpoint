import React from "react";
import PropTypes from "prop-types";

const Data = ({ fullName, bio, profession }) => (
    <div>
        <div>First Name: {fullName}</div>
        <div>Bio : {bio}</div>
        <div>Profession : {Profession}</div>
    </div>
);
const Watch = (props) => {
    return <h1>Profile picture : {props.children}</h1>;
};

const ActionLink = () => {
    handleName = (e) => e.preventDefault();
    alert("Her or his name is: " + { fullName });
    return <name handleName={handleName}></name>;
};

Data.defaultProps = {
    fullName = "your name"
 }
Data.defaultProps = {
     bio = "A biographie must be placed here"
 }
Data.defaultProps = {
    profession = "a profession is unknown"
 }
 Data.propTypes={
 stringProps:PropTypes.string
}
export default Data;
export default Watch;
export default ActionLink;