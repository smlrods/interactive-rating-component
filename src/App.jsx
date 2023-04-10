import { useState } from 'react';
import './App.css';
import iconStar from './images/icon-star.svg';
import illustrationThankYou from './images/illustration-thank-you.svg';

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [rating, setRating] = useState();
  return (
    <>
    {confirmed ? <ThankYou rating={rating} /> : <Rating setConfirmed={setConfirmed} rating={rating} setRating={setRating} />}
    </>
  )
}

function Rating({setConfirmed, rating, setRating}) {
  return (
    <div className='rating card'>
      <div className='icon'>
        <img src={iconStar} alt="icon-star" />
      </div>
      <div className='info'>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className='rating'>
        {Array.from({length: 5}, (_, i) => i + 1).map((item) => {
          return <div className={rating === item ? 'selected' : ''} key={`rating-${item}`} onClick={(event) => {
            setRating(item);
            event.nativeEvent.target.color = 'red';
          }}>{item}</div>
        })}
      </div>
    <button type="button" onClick={() => {
      if (rating) setConfirmed(true);
    }}>SUBMIT</button>
    </div>
  )
}

function ThankYou({rating}) {
  return (
    <div className='thankyou card'>
      <img src={illustrationThankYou} alt="illustration-thank-you" />
      <div className='selected-info'>
        You selected {rating} out of 5.
      </div>
      <h1>Thank you!</h1>
      <div className='message'>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </div>
    </div>
  )
}

export default App
