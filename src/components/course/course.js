import React, {Component, ReactPropTypes} from "react";
//import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux'
import * as courseAction from '../../actions/courseAction'
import {bindActionCreators} from 'redux'

class CoursePage extends Component {
    constructor(props, context) {
        super(props, context)
        
        //State Literally is the place to declare, hold varaibles in the Component
        this.state = {
            cousre : {title : ""}
        }

        //This is the most effect and a proper way of binding functions to onClic kEvents
        this.onAddClick = this.onAddClick.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
    }


    //A Text Change Listener
    onTitleChange(event) {
        const course = this.state.cousre
        course.title = event.target.value
        //setState is used to overwrite and manipulate vairables 
        this.setState({course : course})
    }
    
    onAddClick() {
        //This will be present in the mapDispatchToProps
        this.props.actions.createCourse(this.state.cousre)
        //toast(`Saving ${this.state.cousre.title}` , {autoClose: 15000})
    }

    courseRow(course, index) {
        //This just like an adapter, dynamically adds rows with data
        return <p key={index}>{course.title}</p>
    }

    render(){
        return(
            <div className="row jumbotron">
                <h1>Course Section</h1>
                <div className="row">
                    <h2>Add Course</h2>
                    <div className="input-group">
                        <input onChange={this.onTitleChange}  type="text" className="form-control" placeholder="Add Course"/>
                        <span className="input-group-btn">
                            <button type="submit" onClick={this.onAddClick}  className="btn btn-default">Add Course</button>
                        </span>
                    </div>
                </div>
                <div><h2>Course List:</h2></div>

                <ToastContainer autoClose={8000} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses : state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseAction.createCourse(course))
        actions : bindActionCreators(courseAction, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)
