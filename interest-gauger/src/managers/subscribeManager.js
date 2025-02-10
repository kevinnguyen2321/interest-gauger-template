// managers/subscribeManager.js

/**
 * Subscribes a user to the waitlist.
 * @param {Object} formData - The user's information.
 * @param {string} formData.firstName - The user's first name.
 * @param {string} formData.lastName - The user's last name.
 * @param {string} formData.email - The user's email address.
 * @returns {Promise<Object>} The JSON response from the API.
 * @throws Will throw an error if the API call fails.
 */
export async function subscribeUser({ firstName, lastName, email }) {
  const response = await fetch(
    'https://interest-gauger-template-api.vercel.app/api/subscribe',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to subscribe');
  }

  return response.json();
}
