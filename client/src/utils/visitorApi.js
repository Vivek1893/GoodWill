// API utility for visitor counter
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const getVisitorCount = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/visitors`);
    if (!response.ok) {
      throw new Error('Failed to fetch visitor count');
    }
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return null;
  }
};

export const incrementVisitorCount = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/visitors/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to increment visitor count');
    }
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    return null;
  }
};

