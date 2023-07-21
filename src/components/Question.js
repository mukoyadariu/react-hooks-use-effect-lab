const Question = ({ question, answers, correctAnswer, onAnswered }) => {
  // State to hold the time remaining for the countdown timer
  const [timeRemaining, setTimeRemaining] = useState(10);

  // Function to handle the countdown timer
  const handleCountdown = () => {
    // Decrease the time remaining by 1 every 1 second
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // When timeRemaining reaches 0, reset it to 10 seconds and trigger onAnswered(false)
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    // Cleanup function to clear the timer when the component unmounts or timeRemaining changes
    return () => clearTimeout(timer);
  };

  // Set up the countdown timer using useEffect
  useEffect(() => {
    // Start the countdown when the component mounts or when timeRemaining changes
    handleCountdown();
  }, [timeRemaining]);

  return (
    <div>
      <h1>{question}</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Question;
