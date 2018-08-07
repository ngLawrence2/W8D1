import {login} from '../../actions/session_actions';
import {connect} from 'react-redux';
import SessionForm from './SessionForm';

const mapStateToProps = (state,ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user)=> dispatch(login(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)
