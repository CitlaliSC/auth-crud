const QUERY = {
    SELECT_USERS: 'SELECT * FROM users ORDER BY created_at DESC LIMIT 100',
    SELECT_USER: 'SELECT * FROM users WHERE id = ?',
    CREATE_USER: 'INSERT INTO users(first_name, last_name, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
    UPDATE_USER: 'UPDATE users SET first_name = ?, last_name = ?, image_url = ? WHERE id = ?',
    DELETE_USER: 'DELETE FROM users WHERE id = ?'
};
  
export default QUERY;
  