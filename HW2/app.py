from flask import Flask, request, jsonify
from flask_cors import CORS

CORS( resources={r"/signup": {"origins": "*"}})

conn = sqlite3.connect('userdata.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    description TEXT NOT NULL,
    subject TEXT NOT NULL,
    role TEXT NOT NULL
    )
''')
conn.commit()
conn.close()

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        name = data['name']
        email = data['email']
        address = data['address']
        phone = data['phone']
        description = data['description']
        subject = data['subject']
        role = data['role']

        conn = sqlite3.connect('userdata.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (name, email, phone, address, description, subject, role'),
        (name, email, phone, address, description, subject, role)
        conn.commit()
        conn.close()

        response = {'success': True, 'message': 'Sign-up successful'}
        return jsonify(response), 200
    except Exception as e:
        response = {'success': False, 'message': str(e)}
        return jsonify(response), 400

if __name__ == '__main__':
    app.run(debug=True)
