const baseUrl = 'https://jsonplaceholder.typicode.com';

export class API_SERVICE {
  static getTodoList({ callback, start = 30, limit = 10 }) {
    const url = `${baseUrl}/todos?_start=${start}&_limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        callback(
          result.map((item) => {
            item.done = item.completed;
            delete item.completed;
            return item;
          })
        );
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  static async getTodoListAsync({ start = 30, limit = 10 }) {
    const url = `${baseUrl}/todos?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      const modified = result.map((item) => {
        item.done = item.completed;
        delete item.completed;
        return item;
      });
      return modified;
    } catch (err) {
      console.log(err);
    }
  }
}

export default API_SERVICE;
