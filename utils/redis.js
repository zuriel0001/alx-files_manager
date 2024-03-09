import { promisify } from 'util';
import { createClient } from 'redis';

/**
 * Represents a Redis client.
 */

class RedisClient {
  /**
   * Script to create a new RedisClient instance
   */
  constructor() {
    this.client = createClient();
    this.isClientConnected = true;
    this.client.on('error', (err) => {
      console.error('Redis client failed to connect:', err.message || err.toString());
      this.isClientConnected = false;
    });
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });
  }

  /**
   * Checks if this client's connection to the Redis server is active.
   *
   * @returns {boolean}
   */

  isAlive() {
    return (this.isClientConnected);
  }

  /**
   * Retrives the value of a given key.
   * 
   * @param {String} key: the key of the retrieved item
   * @returns {String | Object}
   */

  async get(key) {
    return (promisify(this.client.GET).bind(this.client)(key));
  }

  /**
   * Stores a key, its value and the expiration time.
   *
   * @param {String} key: The key of item to be stored.
   * @param {String | Number | Boolean} value: The itesm's value.
   * @param {Number} duration: Item's expiration time in seconds.
   *
   * @returns {Promise<void>}
   */

  async set(key, value, duration) {
    await promisify(this.client.SETEX)
      .bind(this.client)(key, duration, value);
  }

  /**
   * Script to remove the value of any given key
   * 
   * @param {String} key: The key of the item to be removed.
   * @returns {Promise<void>}
   */

  async del(key) {
    await promisify(this.client.DEL).bind(this.client)(key);
  }
}

export const redisClient = new RedisClient();
export default redisClient;
