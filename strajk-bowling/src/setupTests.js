const fetch = require('node-fetch'); 
global.fetch = fetch; 
global.Response = fetch.Response;  
global.Request = fetch.Request;  
global.Headers = fetch.Headers; 


import { server } from './mocks/server';  

beforeAll(() => server.listen());  
afterEach(() => server.resetHandlers()); 
afterAll(() => server.close());  
