import React, { Fragment, PureComponent, } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Form from '../components/Form'
import { Notes } from '../components/Notes'
import { addNote, fetchNotes, removeNote } from '../redux/firebaseReducer'
import { Typography } from 'antd';
import '.././styles/index.scss';


const { Title } = Typography;

class Home extends PureComponent {

    componentDidMount() {
        this.props.setNotes()
        // eslint-disable-next-line
    }

    componentWillUnmount(){}

    
    render() {
        return (
            <Fragment>
                <Title className="header">Tracker</Title>
                <Form createNote={this.props.createNote} />
                <hr />
                <Notes notes={this.props.notes} deleteNote={this.props.deleteNote}/>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        notes: state.fireBaseState.notes
    }
}

export default compose(connect(mapStateToProps, { setNotes: fetchNotes, createNote: addNote, deleteNote: removeNote }))(Home)