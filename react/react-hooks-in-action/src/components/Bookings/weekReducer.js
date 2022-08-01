import { getWeek } from '../../utils/date-wrangler'; // Import the getWeek function

export default function reducer(state, action) {
  switch (action.type) {
    case 'NEXT_WEEK':
      return getWeek(state.date, 7); // Return a week object for 7 dats ahead.
    case 'PREV_WEEK':
      return getWeek(state.date, -7); // Return a week object for 7 days before.
    case 'TODAY':
      return getWeek(new Date()); // Return a week object for today.
    case 'SET_DATE':
      return getWeek(new Date(action.payload)); // Return a week object for a specified date.
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
