/* eslint-disable no-constant-condition */
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects'
import { NAV_LIST_item_ADD_ASYNC , NAV_LIST_item_ADD } from '@lib/action/actionTypes';

export function* incrementAsync(action) {
  yield delay(2000);
  yield put({ type: NAV_LIST_item_ADD , payload:action.payload });
}

export default function* rootSaga() {
  yield takeEvery( NAV_LIST_item_ADD_ASYNC , incrementAsync)
}
