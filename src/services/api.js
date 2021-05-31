export class API_SERVICE {
  static getTodoList({ callback, start = 30, limit = 10 }) {
    const url = `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        callback(
          result.map((item) => {
            const d = {
              ...item,
              done: item.completed,
            };
            return d;
          })
        );
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  static async getTodoListAsync({ start = 30, limit = 10 }) {
    const url = `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      const modified = result.map((item) => {
        const d = {
          ...item,
          done: item.completed,
        };
        return d;
      });
      return modified;
    } catch (err) {
      console.log(err);
    }
    return undefined;
  }
}

export default API_SERVICE;
