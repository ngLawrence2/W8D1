import {signup} from '../../actions/session_actions';
import SessionForm from './SessionForm';
import {connect} from 'react-redux';

const mapStateToProps = (state,ownProps) => {
  return {
    formType: 'Sign Up',
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user)=> dispatch(signup(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
