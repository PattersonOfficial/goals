import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllGoals, reset } from '../features/goals/goalSlice';
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(getAllGoals());

    // reset the page when this component is unmounted
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* Heading components */}
      <section className='heading'>
        <h1>Welcome {user && user.name.trim().split(' ')[0]}</h1>

        <p>Goals Dashboard</p>
      </section>

      {/*  Adding Goal Components */}
      <GoalForm />

      <section className='content'>
        {/* Goal Items Components */}
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals yet. Care to try now?</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
