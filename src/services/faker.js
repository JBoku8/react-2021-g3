import axios from 'axios';

const fakerUrl = process.env.REACT_APP_FAKER_API;

export const getFakerTexts = async ({ quantity = 3, characters = 250 }) => {
  try {
    const response = await axios.get(
      `${fakerUrl}/texts?_quantity=${quantity}&_characters=${characters}`
    );
    return response.data.data;
  } catch (error) {
    console.group('[getFakerTexts]@catch');
    console.trace(error);
    console.groupEnd();
  }
  return undefined;
};

export const getFakerBooks = async (quantity = 3) => {
  try {
    const response = await axios.get(`${fakerUrl}/books?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.group('[getFakerBooks]@catch');
    console.trace(error);
    console.groupEnd();
  }
  return undefined;
};
