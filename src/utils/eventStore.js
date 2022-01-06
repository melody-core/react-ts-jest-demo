class EventStore {
  store = {};
  on = (eventName, fn) => {
    this.store[eventName]
      ? this.store[eventName].push(fn)
      : (this.store[eventName] = [fn]);
  };
  emit = (eventName, params) => {
    this.store[eventName]?.forEach(fn => {
        fn(params);
    })
  }
}

export default new EventStore();
