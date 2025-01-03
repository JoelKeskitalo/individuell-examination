export const sendBooking = async (bookingDetails) => {
    const response = await fetch("https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    });
    return response.json();
  };
  