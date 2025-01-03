export async function sendBooking({ when, lanes, people, shoes }) {
    const response = await fetch('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ when, lanes, people, shoes }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send booking');
    }
  
    return response.json();
  }
  