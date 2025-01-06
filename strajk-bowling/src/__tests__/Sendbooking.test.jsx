import { sendBooking } from '../utils/sendBooking';

test('should send a booking successfully', async () => {
    const data = {
        when: '2024-12-18T21:00',
        lanes: '1',
        people: '2',
        shoes: ['40', '42'],
    };

    const response = await sendBooking(data);

    expect(response).toEqual(
        expect.objectContaining({
            id: '12345-VERY-UNIQUE',
            active: true,
        })
    );
});
