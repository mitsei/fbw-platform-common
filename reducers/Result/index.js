import thunk from 'redux-thunk';
import 'lodash'

import {GET_PHASE_I_RESULTS_OPTIMISTIC, RECEIVE_PHASE_I_RESULTS} from './getPhaseIResults'
import {GET_PHASE_II_RESULTS_OPTIMISTIC, RECEIVE_PHASE_II_RESULTS} from './getPhaseIIResults'

// import {createMissionPart, createMissionPartOptimistic} from './createMissionPart'
// import {updateMissionPart, updateMissionPartOptimistic} from './updateMissionPart'
// import {deleteMissionPart, deleteMissionPartOptimistic} from './deleteMissionPart'
// import {updateMissionOffered, updateMissionOfferedOptimistic} from './updateMissionOffered'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function resultReducer (state = initialState, action) {
  switch (action.type) {

    case GET_PHASE_I_RESULTS_OPTIMISTIC:
      return _.assign({}, state, {
        isGetPhaseIResultsInProgress: true
      });

    case RECEIVE_PHASE_I_RESULTS:
      return _.assign({}, state, {
        phaseIResults: action.results,
        isGetPhaseIResultsInProgress: false
      });

    case GET_PHASE_II_RESULTS_OPTIMISTIC:
      return _.assign({}, state, {
        isGetPhaseIIResultsInProgress: true
      });

    case RECEIVE_PHASE_II_RESULTS:
      return _.assign({}, state, {
        phaseIIResults: action.results,
        isGetPhaseIIResultsInProgress: false
      });

    default:
      return state
  }
}
