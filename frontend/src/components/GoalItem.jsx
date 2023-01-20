import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice'

const GoalItem = ({ goal }) => {

    const dispatch  = useDispatch();

  return (
    <div className='goal'>
      <h5>{new Date(goal.createdAt).toLocaleString('en-us')}</h5>
      
      <h3>{goal.text}</h3>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>X</button>
    </div>
  );
};

export default GoalItem;
