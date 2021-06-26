import axios from 'axios';
import { getFakerBooks } from './faker';

jest.mock('axios');

const traceMock = jest.fn();
const groupMock = jest.fn();
const groupEndMock = jest.fn();

global.console.trace = traceMock;
global.console.group = groupMock;
global.console.groupEnd = groupEndMock;

describe('faker service testing', () => {
  test('getFakerBooks rejection', async () => {
    const rejection = new Error('rejected');
    axios.get = jest.fn().mockRejectedValue(rejection);
    await getFakerBooks();

    expect(groupMock).toBeCalledWith('[getFakerBooks]@catch');
    expect(traceMock).toBeCalledWith(rejection);
    expect(groupEndMock).toBeCalledTimes(1);
  });

  test('getFakerBooks resolved', async () => {
    const mockedResponse = {
      data: {
        data: [
          {
            title: 'mocked-title',
          },
        ],
      },
    };
    axios.get = jest.fn().mockResolvedValue(mockedResponse);
    const result = await getFakerBooks();
    expect(result).toStrictEqual(mockedResponse.data.data);
  });
});
