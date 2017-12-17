import React, {Component} from "react";
//import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux'
import * as courseAction from '../../actions/courseAction'

class CoursePage extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            cousre : {title : ""}
        }

        this.onAddClick = this.onAddClick.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
    }


    onTitleChange(event) {
        const course = this.state.cousre
        course.title = event.target.value
        this.setState({course : course})
    }
    
    onAddClick() {
        this.props.dispatch(courseAction.createCourse(this.state.cousre))
        console.log('hell')
        toast(`Saving ${this.state.cousre.title}` , {autoClose: 15000})
    }

    courseRow(course, index) {
        return <p key={index}>{course.title}</p>
    }

    render(){
        return(
            <div className="row jumbotron">
                <h1>Course Section</h1>
                <div>{this.props.courses.map(this.courseRow)}</div>
                <div className="row">
                    <h2>Add Course</h2>
                    <div className="input-group">
                        <input onChange={this.onTitleChange}  type="text" className="form-control" placeholder="Add Course"/>
                        <span className="input-group-btn">
                            <button type="submit" onClick={this.onAddClick}  className="btn btn-default">Add Course</button>
                        </span>
                    </div>
                </div>
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


export default connect(mapStateToProps)(CoursePage)
