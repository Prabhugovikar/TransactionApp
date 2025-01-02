import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchTransactions} from "../../Redux/Dashbaord/transactionsSlice"
import './Dashbaord.css';
export default function Dashboard() {
  const dispatch = useDispatch();
  const { data: transactions, loading, error } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions()); 
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>Dashboard</div>
  )
}
