// singleton pattern
/**
 * Singleton Pattern, we restrict the instantiation of certain classes to one single instance.
 * This single instance is unmodifiable, and can be accessed globally throughout the application.
 */

let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error(`DBConnection has multiple instance`);
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    this.isConnected = true;
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    this.isConnected = false;
    console.log("DB disconnected");
  }
}
