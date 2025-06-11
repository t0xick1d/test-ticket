import { call, put, all } from 'redux-saga/effects';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getTickets() {
   try {
      const searchId = yield call('https://front-test.beta.aviasales.ru/search');
      const ticktes = yield call(`https://front-test.beta.aviasales.ru/tickets?${searchId}`);
      yield put({ type: 'GET_TICKETS', ticktes });
   } catch (error) {
      yield put({ type: 'GET_TICKETS', error });
   }
}
export default function* rootSaga() {
   yield all([getTickets()]);
}  
