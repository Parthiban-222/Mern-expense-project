import React from 'react';
import './About.css';
import expenseTracImage from '../../assets/navImg/ExpenseTrac.jpeg'; // Adjust path if necessary

const Home = () => {
  return (
    <div className="home-container">
      <p>
        Our Expense Tracker is designed to empower you to take control of your financial health by helping you track and optimize your savings. By meticulously recording every expense and categorizing your spending, you gain valuable insights into your financial habits. This visibility allows you to identify areas where you can cut costs and redirect those savings towards your financial goals. Whether you're saving for a big purchase, building an emergency fund, or investing for the future, our tool provides the clarity and motivation needed to make informed decisions and achieve your savings objectives.
      </p>
      <br />
      <img src={expenseTracImage} alt="Expense Tracker" />
      <div className="home-content">
        <div className="box">
          <h2>Salary Entry</h2>
          <p>Details about the salary entries, including the amount and any relevant information.</p>
        </div>
        <div className="box">
          <h2>Job Detail 1</h2>
          <p>Description of job detail 1, salary your earnings in this job.</p>
        </div>
        <div className="box">
          <h2>Job Detail 2</h2>
          <p>Description of job detail 2, salary your earnings in this job.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

