export const sendBooking = async (bookingData) => {
  try {
    const response = await fetch('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error('Failed to send booking');
    }

    const data = await response.json();
    return data;  // Returnera response data
  } catch (error) {
    console.error('Error sending booking:', error);
  }
};
