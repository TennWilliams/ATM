const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit", "Withdraw"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="labelhuge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input title="How Much?" type="number" min="1" width="200" onChange={onChange}></input>
      <input title="Are You Sure?" type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Your Account Balance is $${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };

  const handleSubmit = () => {
    ///let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
  
    if (isDeposit) {
      let newTotal = totalState + deposit;
      setTotalState(newTotal);
      //alert(`You deposited $${deposit}.`)
    }
    else if (deposit > totalState) {
      alert(`You do not have enough money to withdraw $${deposit}.  Your Account Balance is $${totalState} Try a lower amount.`);
    }
    else {
      let newTotal = totalState - deposit;
      setTotalState(newTotal); 
      //alert(`You withdrew $${deposit}.`)
    }
    event.preventDefault();
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}><br></br>
      <h2 id="total">{status}</h2><br></br>
      <h4>How May I Help You Today?</h4><br></br>
      <button className="deposit" title="Yes, add to the savings" onClick={() => setIsDeposit(true)}>Deposit</button><br></br><br></br>
      <button className="with" title="NO, you should be saving" onClick={() => setIsDeposit(false)}>Withdraw</button> 
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
