import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import axios from 'axios';

function Level() {
  const { world, level } = useParams();
  const navigate = useNavigate();
  const { API_URL } = useAuth();
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    fetchLevel();
  }, [world, level]);

  useEffect(() => {
    // Timer countdown
    if (timeLeft > 0 && !loading) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !loading) {
      handleTimeUp();
    }
  }, [timeLeft, loading]);

  const fetchLevel = async () => {
    try {
      const response = await axios.get(`${API_URL}/level/${world}/${level}`);
      setQuestions(response.data.questions);
      setUserAnswers(new Array(response.data.questions.length).fill(null));
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load level');
      setLoading(false);
    }
  };

  const handleTimeUp = () => {
    // Auto-submit current question with no answer (null)
    moveToNextQuestion();
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      alert('Please select an answer!');
      return;
    }

    // Save answer
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);

    // Move to next question
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setTimeLeft(60);
    } else {
      submitLevel();
    }
  };

  const submitLevel = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/level/${world}/${level}/submit`, {
        user_answers: userAnswers
      });
      
      // Navigate to level complete screen with results
      navigate('/level-complete', { 
        state: { 
          result: response.data,
          world: parseInt(world),
          level: parseInt(level)
        } 
      });
    } catch (err) {
      setError('Failed to submit level');
      setLoading(false);
    }
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
      navigate('/dashboard');
    }
  };

  if (loading) {
    return (
      <div className="level-loading">
        <p>Loading level...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="level-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/dashboard')} className="btn-primary">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="level-container">
      <div className="level-header">
        <button onClick={handleExit} className="btn-exit">Exit</button>
        <div className="level-info">
          <h2>World {world} - Level {level}</h2>
          <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>
        <div className="timer">
          <span className="timer-text">{timeLeft}s</span>
        </div>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="timer-bar">
        <div 
          className="timer-fill" 
          style={{ width: `${(timeLeft / 60) * 100}%` }}
        ></div>
      </div>

      <div className="question-container">
        <div className="question-text">
          <h3>{currentQuestion.question_text}</h3>
        </div>

        <div className="options-grid">
          {['A', 'B', 'C', 'D'].map((option) => (
            <button
              key={option}
              className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(option)}
            >
              <span className="option-letter">{option}</span>
              <span className="option-text">{currentQuestion[`option_${option.toLowerCase()}`]}</span>
            </button>
          ))}
        </div>

        <button 
          onClick={handleSubmitAnswer}
          className="btn-submit"
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Level'}
        </button>
      </div>
    </div>
  );
}

export default Level;