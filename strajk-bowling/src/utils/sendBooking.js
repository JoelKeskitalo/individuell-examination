export async function sendBooking(bookingData) {
  const response = await fetch('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();  // Bearbeta JSON från servern
  return data;  // Returnera data från responsen
}
